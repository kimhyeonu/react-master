import Joi from 'joi';

import User from '../../models/user';

export const signUp = async (context) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(2).max(32).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(context.request.body);

  if (result.error) {
    context.status = 400;
    context.body = result.error;
    return;
  }

  const { username, password } = context.request.body;

  try {
    const exists = await User.findByUsername(username);

    if (exists) {
      context.status = 409;
      return;
    }

    const user = new User({ username });
    await user.setPassword(password);
    await user.save();

    context.body = user.serialize();

    const token = user.generateToekn();
    context.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    context.throw(500, e);
  }
};

export const signIn = async (context) => {
  const { username, password } = context.request.body;

  if (!username || !password) {
    context.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      context.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      context.status = 401;
      return;
    }

    context.body = user.serialize();

    const token = user.generateToken();
    context.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    context.throw(500, e);
  }
};

export const check = async (context) => {
  const { user } = context.state;

  if (!user) {
    context.status = 401;
    return;
  }

  context.body = user;
};

export const signOut = async (context) => {
  context.cookies.set('access_token');
  context.status = 204;
};
