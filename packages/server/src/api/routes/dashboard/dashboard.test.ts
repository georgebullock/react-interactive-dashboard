require('dotenv').config();
import request from 'supertest';
import createServer from './../../../app';
import DashboardService from './../../../services/dashboard.service';

jest.mock('./../../../services/dashboard.service');

// beforeEach => clear mocks?

describe('Test dashboard endpoints', () => {
	const app = createServer();

	test.skip('Get total user count', async () => {
		// Arrange
		const response = await request(app).get('/dashboard/getAllUsersCount');

		// Assert
		expect(response.status).toBe(200);
	});

	test.skip('It should return 5000', async () => {
		const serviceGetAllUsersCount = jest.spyOn(
			DashboardService,
			'getAllUsersCount'
		);

		serviceGetAllUsersCount.mockResolvedValue({ data: [{ count: 5000 }] });

		const response = await request(app).get('/dashboard/getAllUsersCount');
		expect(response.body.data[0].count).toBe(5000);
	});

	test.skip('Get total comments count', async () => {
		// Arrange
		const response = await request(app).get('/dashboard/getAllCommentsCount');
		// Assert
		expect(response.status).toBe(200);
	});
});

/* 
	What I'm trying to achieve 
		1. Import supertest from supertest => I can make requests
		2. Import app => I can access my endpoints
		3. Import DashboardService => I can access (or mock) a database???
		4. Make requests via request(app)

	What I want to test:
		1. It returns the right value (number of users / comments)
		2. It was only called once
		3. It returns a status code of 200
		4. It returns 404 when endpoint not found
		5. It returns 500 for all other errors
		
		*May need to skip #5 until I can write an error handling middleware
*/
