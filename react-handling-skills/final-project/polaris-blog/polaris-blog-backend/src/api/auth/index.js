import Router from 'koa-router';

import * as controller from './auth.controller';

const auth = new Router();

auth.post('/sign-up', controller.signUp);
auth.post('/sign-in', controller.signIn);
auth.get('/check', controller.check);
auth.post('/sign-out', controller.signOut);

export default auth;
