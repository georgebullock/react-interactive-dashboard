import User from './../models/user.model';

// Services are a collection of methods that apply business logic to data
const UserService = function(): void {
	console.log('Create new User Service');
};

UserService.getAllUsers = async <T>(): Promise<T> => {
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
