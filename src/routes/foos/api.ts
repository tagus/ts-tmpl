import { Router } from 'express';
import { fetchFoo } from './fetch-foo';

const FooApi = Router();

FooApi.get('/:id', fetchFoo);

export default FooApi;
