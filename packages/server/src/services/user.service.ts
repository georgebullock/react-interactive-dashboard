import User from './../models/user.model';
import { InterfaceUser } from '../Interfaces/InterfaceUser';

// Services are a collection of methods that apply business logic to data
const UserService = function(): void {
	console.log('Create new User Service');
};

UserService.create = async <T>(userData: InterfaceUser): Promise<T> => {
	return await User.create(userData, (err, res) => {
		if (err) {
			console.error('Error: ', err);
			return;
		}

		console.log(`Service to Model Call: Create user: ${JSON.stringify(res)}`);
		return JSON.stringify(res);
	});
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

UserService.getUserById = async <T>(id: number): Promise<T> => {
	return await User.getUserById(id, (err, res) => {
		if (err) {
			console.log(`Error ${err}`);
		}

		console.log(
			`Service to Model Call: Get user by ID: ${JSON.stringify(res)}`
		);
		return JSON.stringify(res);
	});
};

UserService.deleteUserById = async <T>(userId: number): Promise<T> => {
	return await User.deleteUserById(userId, (err, res) => {
		if (err) {
			console.error(err);
		}

		console.log(`Service to Model Call: Remove user ID: ${userId}`);
		return JSON.stringify(res);
	});
};

UserService.updateUserById = async <T>(
	userId: number,
	userData: InterfaceUser
): Promise<T> => {
	return await User.updateUserById(userId, userData, (err, res) => {
		if (err) {
			console.error(err);
		}

		console.log(`Service to Model Call: Update user ID: ${userId}`);
		return JSON.stringify(res);
	});
};

export default UserService;
