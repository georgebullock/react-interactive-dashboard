import { Router, Request, Response } from 'express';
import UserService from './../../services/user.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const data = await UserService.getAllUsers();

	res.json({ data });
});

export default router;
