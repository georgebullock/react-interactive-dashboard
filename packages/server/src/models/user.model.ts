require('dotenv').config({ path: './../../.env' });
import { SqlResponse } from '../types/sql-query';
import { User } from '../types/user';
import { sqlQuery } from '../utils/sql-query';

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

UserModel.create = (userData: User): Promise<SqlResponse> => {
	return sqlQuery(
		'INSERT INTO users (username, email, password) VALUES (?,?,?)',
		[userData.username, userData.email, userData.password]
	);
};

UserModel.getAllUsers = (): Promise<SqlResponse> => {
	return sqlQuery(`SELECT * FROM users LIMIT 5`);
};

UserModel.getUserById = (userId: number): Promise<SqlResponse> => {
	return sqlQuery(`SELECT * FROM users WHERE user_id = ?`, [userId]);
};

UserModel.deleteUserById = (userId: number): Promise<SqlResponse> => {
	return sqlQuery(`DELETE FROM users WHERE user_id = ?`, [userId]);
};

UserModel.updateUsername = (
	userId: number,
	username: string
): Promise<SqlResponse> => {
	return sqlQuery(`UPDATE users SET username = ? WHERE user_id = ?`, [
		username,
		userId
	]);
};

UserModel.updateEmail = (
	userId: number,
	email: string
): Promise<SqlResponse> => {
	return sqlQuery(`UPDATE users SET email = ? WHERE user_id = ?`, [
		email,
		userId
	]);
};

UserModel.updatePassword = (
	userId: number,
	password: string
): Promise<SqlResponse> => {
	return sqlQuery(`UPDATE users SET password = ? WHERE user_id = ?`, [
		password,
		userId
	]);
};

export default UserModel;
