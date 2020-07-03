require('dotenv').config({ path: './../../.env' });
import { ChangeResponse, QueryResponse } from '../types/sqlQuery';
import { User } from '../types/user';
import { sqlQuery } from './../utils/sqlQuery';

const UserModel = function(
	this: User,
	username: string,
	password: string,
	email: string
): void {
	this.username = username;
	this.email = email;
	this.password = password;
};

UserModel.create = (userData: User): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		'INSERT INTO users (username, email, password) VALUES (?,?,?)',
		[userData.username, userData.email, userData.password]
	);
};

UserModel.getAllUsers = (): Promise<QueryResponse> => {
	return sqlQuery<QueryResponse>(`SELECT * FROM users LIMIT 5`);
};

UserModel.getUserById = (userId: number): Promise<QueryResponse> => {
	return sqlQuery<QueryResponse>(`SELECT * FROM users WHERE user_id = ?`, [
		userId
	]);
};

UserModel.deleteUserById = (userId: number): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(`DELETE FROM users WHERE user_id = ?`, [
		userId
	]);
};

UserModel.updateUsername = (
	userId: number,
	username: string
): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		`UPDATE users SET username = ? WHERE user_id = ?`,
		[username, userId]
	);
};

UserModel.updateEmail = (
	userId: number,
	email: string
): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		`UPDATE users SET email = ? WHERE user_id = ?`,
		[email, userId]
	);
};

UserModel.updatePassword = (
	userId: number,
	password: string
): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		`UPDATE users SET password = ? WHERE user_id = ?`,
		[password, userId]
	);
};

export default UserModel;
