import { express, Response, Request, NextFunction } from 'express';

const router: Router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
});

export default router;
