import supertest from 'supertest';
import router from './user.routes';

const request = supertest(router);

describe('User concerned CRUD', () => {
	test.skip('It should return true', async done => {
		const response = await request.get('/user');

		expect(response).toEqual(200);
		done();
	});
});
