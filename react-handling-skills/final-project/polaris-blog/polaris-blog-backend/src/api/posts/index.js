import Router from 'koa-router';

import * as controller from './posts.controller.js';
import checkSignedIn from '../../lib/checkSignedIn.js';

const posts = new Router();
posts.get('/', controller.inquireAll);
posts.post('/', checkSignedIn, controller.write);

const post = new Router();
post.get('/', controller.inquire);
post.delete('/', checkSignedIn, controller.checkOwnPost, controller.remove);
post.put('/', checkSignedIn, controller.checkOwnPost, controller.modify);

posts.use('/:id', controller.getPostById, post.routes());

export default posts;
