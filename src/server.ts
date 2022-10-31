import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import express from 'express';
import hbs from 'hbs';

import 'express-async-errors';

import { camelCaseBody, handleError } from '@/middlewares';
import env from '@/config/env';

const main = async () => {
  const app = express();

  // set views dir
  const viewsDir = path.join(__dirname, 'views');
  app.set('views', viewsDir);
  app.set('view engine', 'hbs');
  hbs.registerPartials(path.join(__dirname, 'views/partials'));
  hbs.registerHelper('toJSON', JSON.stringify);

  // set static dir
  const staticDir = path.join(__dirname, 'public');
  app.use(express.static(staticDir));

  /******************************************************************************/

  // common middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan(env.isProd ? 'tiny' : 'dev'));
  app.use(camelCaseBody);

  /******************************************************************************/

  app.use('/healthy', (req, res) => res.send('ok'));
  app.get('/', (req, res) => {
    res.render('index', {
      script: 'index',
    });
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
