import User from './../models/user.model';
import { User as TUser } from '../types/user';
import { QueryResponse, QueryError } from '../types/sqlQuery';

// User Service is a collection of methods to handle CRUD for user concerns
const UserService = function(): void {
	console.log('Create new User Service');
};

UserService.create = async (
	userData: TUser
): Promise<{ id: number; message: string }> => {
	const dbResponse = await User.create(userData);
	return {
		id: dbResponse.data.insertId,
		message: `User ${dbResponse.data.insertId} was successfully created`
	};
};

UserService.getAllUsers = async (): Promise<QueryResponse> => {
	return await User.getAllUsers();
};

UserService.getUserById = async (
	id: number
): Promise<QueryResponse | QueryError> => {
	const dbResponse = await User.getUserById(id);

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

UserService.deleteUserById = async (
	id: number
): Promise<{ id: number; message: string }> => {
	const dbResponse = await User.deleteUserById(id);

	return {
		id: dbResponse.data.insertId,
		message: `User ${id} was deleted`
	};
};

UserService.updateUsername = async (
	id: number,
	username: string
): Promise<{ id: number; message: string }> => {
	const dbResponse = await User.updateUsername(id, username);

	return {
		id: dbResponse.data.insertId,
		message: `User ${id}'s username was updated`
	};
};

UserService.updateEmail = async (
	id: number,
	email: string
): Promise<{ id: number; message: string }> => {
	const dbResponse = await User.updateEmail(id, email);

	return {
		id: dbResponse.data.insertId,
		message: `User ${id}'s email was updated`
	};
};

UserService.updatePassword = async (
	id: number,
	password: string
): Promise<{ id: number; message: string }> => {
	const dbResponse = await User.updatePassword(id, password);

	return {
		id: dbResponse.data.insertId,
		message: `User ${id}'s password was updated`
	};
};

export default UserService;
