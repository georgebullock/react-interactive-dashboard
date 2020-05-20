import { Router, Request, Response } from 'express';
import UserService from './../../services/user.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	console.log('Route: Get all users: ', UserService.getAllUsers());
	return res.json({
		message: `Serving all user data`
	});
});

export default router;
