import User from './../models/user.model';

// Services are a collection of methods that apply business logic to data
const UserService = function(): void {
	console.log('Create new User Service');
};

// TODO: If User.getAllUsers returns a promise then we can await a response
// Add error handling
UserService.getAllUsers = async (): Promise<string | void> => {
	return await User.getAllUsers((err, res) => {
		if (err) {
			console.error('Error: ', err);
			return;
		}

		console.log(`Service to Model Call: Get all users: ${JSON.stringify(res)}`);
		return JSON.stringify(res);
	});
};

export default UserService;
