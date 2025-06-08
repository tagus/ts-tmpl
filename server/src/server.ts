import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import express from 'express';

import { ApiRouter } from '@/routes/api';
import { camelCaseBody, handleError } from '@/middlewares';
import env from '@/config/env';

async function main() {
  const app = express();

  // common middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan(env.isProd ? 'tiny' : 'dev'));
  app.use(camelCaseBody);

  // health check endpoint
  app.use('/healthy', (req, res) => { res.send('ok') })

  // api routes
  app.use('/api', ApiRouter);

  /******************************************************************************/

  // serve all vite build output
  // NOTE: this assumes that the output dist directory has the same relative path
  // to the client dist output or the following will not work.
  const staticDir = path.join(__dirname, '../../client/dist');
  app.use(express.static(staticDir));

  // SPA fallback: serve index.html for all other routes
  app.get('*path', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
  });

  /******************************************************************************/

  // error handling
  app.use(handleError);

  // handling 404 response
  app.use((req, res) => {
    res.status(404);
    if (req.accepts('text/html')) {
      res.send('404 not found');
      return;
    }
    res.json({
      failed: true,
      message: 'url not found',
    });
  });

  return app;
};

export default main;
