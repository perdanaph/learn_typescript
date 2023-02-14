import express from 'express';

// express build with javascript not using es6 module so for the declare type from express we can install devDependencies @types/express
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello Express',
  });
});

app.listen(port, () => {
  console.log(`Server Run at http://localhost:${port}`);
});
