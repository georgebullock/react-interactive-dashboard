import User from './../models/user.model';
import { User as TUser } from '../types/user';

// Services are a collection of methods that apply business logic to data
const UserService = function(): void {
	console.log('Create new User Service');
};

UserService.create = async <T>(userData: TUser): Promise<T> => {
	return await User.create(userData);
};

UserService.getAllUsers = async <T>(): Promise<T> => {
	return await User.getAllUsers();
};

UserService.getUserById = async <T>(id: number): Promise<T> => {
	return await User.getUserById(id);
};

UserService.deleteUserById = async <T>(userId: number): Promise<T> => {
	return await User.deleteUserById(userId);
};

UserService.updateUsername = async <T>(
	userId: number,
	username: string
): Promise<T> => {
	return await User.updateUsername(userId, username);
};

UserService.updateEmail = async <T>(
	userId: number,
	email: string
): Promise<T> => {
	return await User.updateEmail(userId, email);
};

UserService.updatePassword = async <T>(
	userId: number,
	password: string
): Promise<T> => {
	return await User.updatePassword(userId, password);
};

export default UserService;
