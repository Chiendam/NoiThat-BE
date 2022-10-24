import express from 'express';

let router = express.Router();

const initApiRouter = (app) => {
  router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  return app.use("/api/v1", router);
}

export default initApiRouter;