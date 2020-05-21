import { Router, Request, Response } from 'express';
import UserService from './../../services/user.service';

const router = Router();

// TODO: Understand precisely why res.json is not waiting for UserService
// It should wait for UserService and only call res.json after UserService resolves with data
// Add error handling
router.get('/', async (req: Request, res: Response) => {
	console.log('Route: Before Get all users');

	const data = await UserService.getAllUsers();

	console.log('Route: Data After Get all users: ', data);

	res.json({ data });
});

export default router;
