require('dotenv').config({ path: './../../.env' });
import { User as TUser } from '../types/user';
import { sqlQuery } from './../utils/sqlQuery';

// TODO: Learn how to type User Object expressions properly for their use case in routes
// TODO: Learn how to make sqlQuery function calls with the correct types

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

User.create = <T>(userData: TUser): Promise<T> => {
	return sqlQuery(
		'INSERT INTO users (username, email, password) VALUES (?,?,?)',
		[userData.username, userData.email, userData.password]
	);
};

User.getAllUsers = <T>(): Promise<T> => {
	return sqlQuery(`SELECT * FROM users LIMIT 5`);
};

User.getUserById = <T>(userId: number): Promise<T> => {
	return sqlQuery(`SELECT * FROM users WHERE user_id = ?`, [userId]);
};

User.deleteUserById = <T>(userId: number): Promise<T> => {
	return sqlQuery(`DELETE FROM users WHERE user_id = ?`, [userId]);
};

User.updateUsername = <T>(userId: number, username: string): Promise<T> => {
	return sqlQuery(`UPDATE users SET username = ? WHERE user_id = ?`, [
		username,
		userId
	]);
};

User.updateEmail = <T>(userId: number, email: string): Promise<T> => {
	return sqlQuery(`UPDATE users SET email = ? WHERE user_id = ?`, [
		email,
		userId
	]);
};

User.updatePassword = <T>(userId: number, password: string): Promise<T> => {
	return sqlQuery(`UPDATE users SET password = ? WHERE user_id = ?`, [
		password,
		userId
	]);
};

export default User;
