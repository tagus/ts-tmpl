import { Request, Response } from 'express';

type Foo = {
  id: string;
  label: string;
};

export const fetchFoo = async (req: Request, res: Response) => {
  const foo: Foo = { id: req.params.id, label: 'Test' };
  res.json(foo);
};
