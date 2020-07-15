import { Router, Request, Response, NextFunction } from 'express';
import DashboardService from './../../../services/dashboard.service';

const router = Router();

router.get(
	'/getAllCommentsCount',
	async (req: Request, res: Response, next: NextFunction) => {
		console.log('1.) /getAllCommentsCount request:');
		// console.dir(req);

		const data = await DashboardService.getAllCommentsCount().catch(error =>
			next(error)
		);

		console.log('5.) DashboardService.getAllCommentsCount response:');
		console.log('5.)', res);
		console.log('5.)', data);

		res.status(200).json({ data });
	}
);

router.get(
	'/getAllUsersCount',
	async (req: Request, res: Response, next: NextFunction) => {
		console.log('1.) /getAllUsersCounts request:');
		// console.dir(req);

		const data = await DashboardService.getAllUsersCount().catch(error =>
			next(error)
		);

		console.log('5.) DashboardService.getAllCommentsCount response:');
		console.log('5.)', res);
		console.log('5.)', data);

		res.status(200).json({ data });
	}
);

export default router;
