import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.json({
		message: `Welcome to React Interactive Dashboard`
	});
});

export default router;
