import { Router, Request, Response } from 'express';
import UserService from './../../services/user.service';
import { NextFunction } from 'express-serve-static-core';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await UserService.getAllUsers();
		res.json({ data });
	} catch (error) {
		console.error(`Error: ${error}`);

		//TODO: Clarify if this is necessary
		return next(error);
	}
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await UserService.getUserById(parseInt(req.params.id));
		res.json({ data });
	} catch (error) {
		console.error(`Error: ${error}`);

		//TODO: Clarify if this is necessary
		return next(error);
	}
});

export default router;
