const terminate = (server) => {
  const exit = (code) => {
    process.exit(code);
  };

  // eslint-disable-next-line no-unused-vars
  return (code, reason) => (err, promise) => {
    if (err && err instanceof Error) {
      console.log(err.message, err.stack);
    }
    server.close(exit(code));
    process.nextTick(exit(code));
  };
};

export default terminate;
