const createError = (message?: string) => ({
  id: new Date().getTime().toString(),
  message,
});

export default createError;
