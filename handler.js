module.exports = (event, context) => {
  const result = {
    status: 'Hello Serverless',
  };

  //サンプルテキスト
  context.status(200).succeed(result);
};
