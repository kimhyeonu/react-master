import mongoose from 'mongoose';
import Joi from 'joi';

import Post from '../../models/post';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (context, next) => {
  const { id } = context.params;

  if (!ObjectId.isValid(id)) {
    context.status = 400;
    return;
  }

  return next();
};

export const readAllPost = async (context) => {
  const page = parseInt(context.query.page || '1', 10);

  if (page < 1) {
    context.status = 400;
    return;
  }

  try {
    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    const postCount = await Post.countDocuments().exec();
    context.set('Last-Page', Math.ceil(postCount / 10));

    context.body = posts.map((post) => ({
      ...post,
      body:
        post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    context.throw(500, e);
  }
};

export const readPost = async (context) => {
  const { id } = context.params;

  try {
    const post = await Post.findById(id).exec();

    if (!post) {
      context.status = 404;
      return;
    }

    context.body = post;
  } catch (e) {
    context.throw(500, e);
  }
};

export const createPost = async (context) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(context.request.body);

  if (result.error) {
    context.status = 400;
  }

  context.body = result;
  return;
};

export const deletePost = async (context) => {
  const { id } = context.params;

  try {
    await Post.findByIdAndRemove(id).exec();
    context.status = 204;
  } catch (e) {
    context.throw(500, e);
  }
};

export const updatePost = async (context) => {
  const { id } = context.params;

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(context.request.body);

  if (result.error) {
    context.status = 400;
    context.body = result.error;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, context.request.body, {
      new: true,
    }).exec();

    if (!post) {
      context.status = 404;
      return;
    }

    context.body = post;
  } catch (e) {
    context.throw(500, e);
  }
};
