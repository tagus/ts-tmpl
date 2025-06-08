import { Router } from 'express';

import FooRouter from '@/routes/foos/api';

const ApiRouter = Router();

ApiRouter.use('/foos', FooRouter);

export { ApiRouter };
