import { Router, Request, Response, NextFunction } from 'express';
import UserService from './../../../services/user.service';

const router = Router();

router.post(
	'/create',
	async (req: Request, res: Response, next: NextFunction) => {
		const { username, email, password } = req.body;
		const data = await UserService.create({
			username,
			email,
			password
		}).catch(error => next(error));

		res.send({ data });
	}
);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	const data = await UserService.getAllUsers().catch(error => next(error));

	res.json({ data });
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	const data = await UserService.getUserById(
		parseInt(req.params.id)
	).catch(error => next(error));

	res.json({ data });
});

router.delete(
	'/:id',
	async (req: Request, response: Response, next: NextFunction) => {
		const data = await UserService.deleteUserById(
			parseInt(req.params.id)
		).catch(error => next(error));

		response.json(data);
	}
);

router.put(
	'/:id/username',
	async (req: Request, res: Response, next: NextFunction) => {
		const { username } = req.body;
		const data = await UserService.updateUsername(
			parseInt(req.params.id),
			username
		).catch(error => next(error));

		res.json({ data });
	}
);

router.put(
	'/:id/email',
	async (req: Request, res: Response, next: NextFunction) => {
		const { email } = req.body;
		const data = await UserService.updateEmail(
			parseInt(req.params.id),
			email
		).catch(error => next(error));

		res.json({ data });
	}
);

router.put(
	'/:id/password',
	async (req: Request, res: Response, next: NextFunction) => {
		const { password } = req.body;
		const data = await UserService.updatePassword(
			parseInt(req.params.id),
			password
		).catch(error => next(error));

		res.json({ data });
	}
);

export default router;
