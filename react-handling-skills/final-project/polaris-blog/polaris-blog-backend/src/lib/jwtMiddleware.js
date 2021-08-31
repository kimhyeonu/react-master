import jwt from 'jsonwebtoken';

import User from '../models/user';

const jwtMiddleware = async (context, next) => {
  const token = context.cookies.get('access_token');

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    context.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await user.findById(decoded._id);
      const token = user.generateToken();

      context.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }

    // console.log(decoded);

    return next();
  } catch (e) {
    return next();
  }
};

export default jwtMiddleware;
