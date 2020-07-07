// require('dotenv').config();
// // import request from 'supertest';
// import createServer from './../../../app';
// // import DashboardService from './../../../services/dashboard.service';

// jest.mock('./../../../services/dashboard.service');

// afterEach(() => {
// 	jest.clearAllMocks();
// });

test('Dummy test', () => {
	expect(true).toEqual(true);
});

// describe('Test dashboard endpoints', () => {
// 	const app = createServer();

// 	test.skip('Get total user count', async () => {
// 		// // Arrange
// 		// const serviceGetAllUsersCount = jest.spyOn(
// 		// 	DashboardService,
// 		// 	'getAllUsersCount'
// 		// );
// 		// serviceGetAllUsersCount.mockResolvedValue({
// 		// 	data: [{ count: 5000 }]
// 		// });
// 		// // Act and Assert
// 		// const response = await request(app).get('/dashboard/getAllUsersCount');
// 		// console.log('TEST RESPONSE: ', response);
// 		// expect(response.status).toBe(200);
// 		// expect(response.status).toBe({ data: [{ count: 5000 }] });
// 	});

// 	test.skip('Get total comments count', async () => {
// 		// // Arrange
// 		// const serviceGetAllCommentsCount = jest.spyOn(
// 		// 	DashboardService,
// 		// 	'getAllCommentsCount'
// 		// );
// 		// serviceGetAllCommentsCount.mockResolvedValue({
// 		// 	data: [{ count: 5000 }]
// 		// });
// 		// // Act and Assert
// 		// request(app)
// 		// 	.get('/dashboard/getAllCommentsCount')
// 		// 	.expect(200, { data: [{ count: 5000 }] });
// 	});
// });

// /*
// 	What I'm trying to achieve
// 		1. Import supertest from supertest => I can make requests
// 		2. Import app => I can access my endpoints
// 		3. Import DashboardService => I can access (or mock) a database???
// 		4. Make requests via request(app)

// 	What I want to test:
// 		1. It returns the right value (number of users / comments)
// 		2. It was only called once
// 		3. It returns a status code of 200
// 		4. It returns 404 when endpoint not found
// 		5. It returns 500 for all other errors

// 		*May need to skip #5 until I can write an error handling middleware
// */
