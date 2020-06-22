require('dotenv').config({ path: './../../.env' });
import { ChangeResponse, QueryResponse } from '../types/sqlQuery';
import { User as TUser } from '../types/user';
import { sqlQuery } from './../utils/sqlQuery';

// User Model is a collection of methods to handle CRUD for user concerns
const User = function(
	this: TUser,
	username: string,
	password: string,
	email: string
): void {
	this.username = username;
	this.email = email;
	this.password = password;
};

User.create = (userData: TUser): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		'INSERT INTO users (username, email, password) VALUES (?,?,?)',
		[userData.username, userData.email, userData.password]
	);
};

User.getAllUsers = (): Promise<QueryResponse> => {
	return sqlQuery<QueryResponse>(`SELECT * FROM users LIMIT 5`);
};

User.getUserById = (userId: number): Promise<QueryResponse> => {
	return sqlQuery<QueryResponse>(`SELECT * FROM users WHERE user_id = ?`, [
		userId
	]);
};

User.deleteUserById = (userId: number): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(`DELETE FROM users WHERE user_id = ?`, [
		userId
	]);
};

User.updateUsername = (
	userId: number,
	username: string
): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		`UPDATE users SET username = ? WHERE user_id = ?`,
		[username, userId]
	);
};

User.updateEmail = (userId: number, email: string): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		`UPDATE users SET email = ? WHERE user_id = ?`,
		[email, userId]
	);
};

User.updatePassword = (
	userId: number,
	password: string
): Promise<ChangeResponse> => {
	return sqlQuery<ChangeResponse>(
		`UPDATE users SET password = ? WHERE user_id = ?`,
		[password, userId]
	);
};

export default User;
