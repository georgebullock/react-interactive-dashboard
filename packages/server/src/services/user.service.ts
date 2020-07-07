import UserModel from './../models/user.model';
import { User } from '../types/user';
import { SqlResponse } from '../types/sqlQuery';

// User Service is a collection of methods to handle CRUD for user concerns
const UserService = function(): void {
	console.log('Create new User Service');
};

UserService.create = async (userData: User): Promise<SqlResponse> => {
	const dbResponse = await UserModel.create(userData);
	console.log('dbResponse', dbResponse);

	return dbResponse;

	// return {
	// 	id: dbResponse[0]insertId,
	// 	message: `User ${dbResponse[0].insertId} was successfully created`
	// };
};

UserService.getAllUsers = async (): Promise<SqlResponse> => {
	return await UserModel.getAllUsers();
};

UserService.getUserById = async (id: number): Promise<SqlResponse> => {
	const dbResponse = await UserModel.getUserById(id);

	/*
	 MySQL return an empty arry for deleted users. To handle this I
	 check for 0 length response (e.g. if user with ID x was deleted)
	 and return a 404 with
	 */
	// if (dbResponse.data.length === 0) {
	// 	return {
	// 		status: 404,
	// 		message: `User ${id} was deleted`
	// 	};
	// }

	return dbResponse;
};

UserService.deleteUserById = async (id: number): Promise<SqlResponse> => {
	const dbResponse = await UserModel.deleteUserById(id);

	return dbResponse;
	// return {
	// 	id: dbResponse.data.insertId,
	// 	message: `User ${id} was deleted`
	// };
};

UserService.updateUsername = async (
	id: number,
	username: string
): Promise<SqlResponse> => {
	const dbResponse = await UserModel.updateUsername(id, username);

	return dbResponse;
};

UserService.updateEmail = async (
	id: number,
	email: string
): Promise<SqlResponse> => {
	const dbResponse = await UserModel.updateEmail(id, email);

	return dbResponse;
};

UserService.updatePassword = async (
	id: number,
	password: string
): Promise<SqlResponse> => {
	const dbResponse = await UserModel.updatePassword(id, password);

	console.log('dbResponse', dbResponse);

	return dbResponse;

	// return {
	// 	id: dbResponse.data.insertId,
	// 	message: `User ${id}'s password was updated`
	// };
};

export default UserService;
