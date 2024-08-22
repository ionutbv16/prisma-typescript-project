import http from 'http';
import express, { Application } from 'express';
import { createAppServer } from './methods';

const app: Application = express();
const httpServer = http.createServer(app);

process.nextTick(async () => {
  await createAppServer(app);

  httpServer.listen(3000, () => {
    console.log(`server started on 3000!`);
  })
});
