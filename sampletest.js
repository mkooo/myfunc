module.exports = (event, context) => {
  const result = {
    status: 'Node.js serverless on Unubo Cloud.',
  };

  context.status(200).succeed(result);
};
