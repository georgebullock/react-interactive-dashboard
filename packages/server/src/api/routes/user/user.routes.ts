import { Router, Request, Response } from 'express';
import UserService from './../../../services/user.service';
import { NextFunction } from 'express-serve-static-core';

const router = Router();

router.post(
	'/create',
	async (req: Request, res: Response, next: NextFunction) => {
		const { username, email, password } = req.body;
		try {
			const data = await UserService.create({ username, email, password });
			res.send({ data });
		} catch (error) {
			// TODO: Clarify if this is necessary. Suspect yes b/c context is async
			return next(error);
		}
	}
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await UserService.getAllUsers();
		res.json({ data });
	} catch (error) {
		console.error(error);

		// TODO: Clarify if this is necessary. Suspect yes b/c context is async
		return next(error);
	}
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await UserService.getUserById(parseInt(req.params.id));
		res.json({ data });
	} catch (error) {
		console.error(error);

		// TODO: Clarify if this is necessary. Suspect yes b/c context is async
		return next(error);
	}
});

router.delete(
	'/:id',
	async (req: Request, response: Response, next: NextFunction) => {
		try {
			const data = await UserService.deleteUserById(parseInt(req.params.id));
			response.json(data);
		} catch (error) {
			console.error(error);

			// TODO: Clarify if this is necessary. Suspect yes b/c context is async
			return next(error);
		}
	}
);

router.put(
	'/:id/username',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { username } = req.body;
			const data = await UserService.updateUsername(
				parseInt(req.params.id),
				username
			);
			res.json({ data });
		} catch (error) {
			console.error(error);

			// TODO: Clarify if this is necessary. Suspect yes b/c context is async
			return next(error);
		}
	}
);

router.put(
	'/:id/email',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email } = req.body;
			const data = await UserService.updateEmail(
				parseInt(req.params.id),
				email
			);
			res.json({ data });
		} catch (error) {
			console.error(error);

			// TODO: Clarify if this is necessary. Suspect yes b/c context is async
			return next(error);
		}
	}
);

router.put(
	'/:id/password',
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { password } = req.body;
			const data = await UserService.updatePassword(
				parseInt(req.params.id),
				password
			);
			res.json({ data });
		} catch (error) {
			console.error(error);

			// TODO: Clarify if this is necessary. Suspect yes b/c context is async
			return next(error);
		}
	}
);

export default router;
