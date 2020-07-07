require('dotenv').config();
import request from 'supertest';
import createServer from './../../../app';
import DashboardService from './../../../services/dashboard.service';

jest.mock('./../../../services/dashboard.service');

afterEach(() => {
	jest.clearAllMocks();
});

describe('Test dashboard endpoints', () => {
	const app = createServer();

	test('Get total user count', async () => {
		// Arrange
		const serviceGetAllUsersCount = jest.spyOn(
			DashboardService,
			'getAllUsersCount'
		);
		serviceGetAllUsersCount.mockResolvedValue([{ count: 5000 }]);

		// Act and Assert
		const response = await request(app).get('/dashboard/getAllUsersCount');

		expect(response.status).toBe(200);
		expect(response.body).toEqual({ data: [{ count: 5000 }] });
	});

	test('Get total comments count', async () => {
		// Arrange
		const serviceGetAllCommentsCount = jest.spyOn(
			DashboardService,
			'getAllCommentsCount'
		);

		serviceGetAllCommentsCount.mockResolvedValue([{ count: 5000 }]);
		// Act and Assert
		const response = await request(app).get('/dashboard/getAllCommentsCount');
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ data: [{ count: 5000 }] });
	});
});
