import Router from 'koa-router';

import * as controller from './posts.controller';

const posts = new Router();

// const printInfo = (context) => {
//   context.body = {
//     method: context.method,
//     path: context.path,
//     params: context.params,
//   };
// };

posts.get('/', controller.list);
posts.post('/', controller.create);

posts.get('/:id', controller.read);
posts.delete('/:id', controller.remove);
posts.put('/:id', controller.replace);
posts.patch('/:id', controller.update);

export default posts;
