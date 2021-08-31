const checkSignedIn = (context, next) => {
  if (!context.state.user) {
    context.status = 401;
    return;
  }

  return next();
};

export default checkSignedIn;
