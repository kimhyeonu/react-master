let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// 포스트 목록 조회
// GET /api/posts
export const list = (context) => {
  context.body = posts;
};

// 특정 포스트 조회
// GET /api/posts/:id
export const read = (context) => {
  const { id } = context.params;

  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }

  context.body = post;
};

// 특정 포스트 삭제
export const remove = (context) => {
  const { id } = context.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  if (index === -1) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }

  posts.splice(index, 1);
  context.status = 204;
};

// 특정 포스트 전체 수정
// PUT /api/posts/:id {title, body}
export const replace = (context) => {
  const { id } = context.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  if (index === -1) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }

  posts[index] = {
    id,
    ...context.request.body,
  };
  context.body = posts[index];
};

// 특정 포스트 일부 수정
// PATCH /api/posts/:id {title, body}
export const update = (context) => {
  const { id } = context.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  if (index === -1) {
    context.status = 404;
    context.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }

  posts[index] = {
    ...posts[index],
    ...context.request.body,
  };
  context.body = posts[index];
};

// 포스트 생성
// POST /api/posts {title, body}
export const create = (context) => {
  const { title, body } = context.request.body;

  postId += 1;

  const post = {
    id: postId,
    title,
    body,
  };

  posts.push(post);

  context.body = post;
};
