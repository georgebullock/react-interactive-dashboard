import { Router, Request, Response, NextFunction } from 'express';
import DashboardService from './../../../services/dashboard.service';

const router = Router();

router.get(
	'/getAllCommentsCount',
	async (req: Request, res: Response, next: NextFunction) => {
		console.log(`/getAllCommentsCount's request object: ${req}`);

		const data = await DashboardService.getAllCommentsCount().catch(error =>
			next(error)
		);

		res.status(200).json({ data });
	}
);

export default router;
