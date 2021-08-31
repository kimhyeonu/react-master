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
  } catch (e) {
    context.throw(500, e);
  }
};

export const signIn = async (context) => {};

export const check = async (context) => {};

export const signOut = async (context) => {};
