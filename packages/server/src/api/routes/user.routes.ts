import { Router, Request, Response } from 'express';
import UserService from './../../services/user.service';
import { NextFunction } from 'express-serve-static-core';

const router = Router();

router.post(
	'/create',
	async (req: Request, res: Response, next: NextFunction) => {
		const { username, email, password } = req.params;
		try {
			// const data = await UserService.create();
			console.log({ username, email, password });
		} catch (error) {
			return next(error);
		}
	}
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await UserService.getAllUsers();
		res.json({ data });
	} catch (error) {
		console.error(`Error: ${error}`);

		//TODO: Clarify if this is necessary. Suspect yes b/c context is async
		return next(error);
	}
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await UserService.getUserById(parseInt(req.params.id));
		res.json({ data });
	} catch (error) {
		console.error(`Error: ${error}`);

		//TODO: Clarify if this is necessary. Suspect yes b/c context is async
		return next(error);
	}
});

export default router;
