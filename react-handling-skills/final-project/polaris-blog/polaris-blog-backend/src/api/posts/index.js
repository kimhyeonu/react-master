const Router = require('koa-router');
const controller = require('./posts.controller');

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
posts.delete('/:id', controller.delete);
posts.put('/:id', controller.replace);
posts.patch('/:id', controller.update);

module.exports = posts;
