import Router from 'koa-router';

import * as controller from './posts.controller.js';

const posts = new Router();

// const printInfo = (context) => {
//   context.body = {
//     method: context.method,
//     path: context.path,
//     params: context.params,
//   };
// };

posts.get('/', controller.readAllPost);
posts.post('/', controller.createPost);

posts.get('/:id', controller.checkObjectId, controller.readPost);
posts.delete('/:id', controller.checkObjectId, controller.deletePost);
posts.patch('/:id', controller.checkObjectId, controller.updatePost);

export default posts;
