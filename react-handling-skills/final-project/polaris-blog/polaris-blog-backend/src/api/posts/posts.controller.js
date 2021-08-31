import mongoose from 'mongoose';

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
  try {
    const posts = await Post.find().exec();
    context.body = posts;
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
  const { title, body, tags } = context.request.body;

  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    await post.save();
    context.body = post;
  } catch (e) {
    context.throw(500, e);
  }
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
