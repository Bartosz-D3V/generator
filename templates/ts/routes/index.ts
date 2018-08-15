import express from 'express';
import { Router, Response, Request, NextFunction } from 'express';

const router: Router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {title: 'Express'});
});

export default router;
