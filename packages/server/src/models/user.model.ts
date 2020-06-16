require('dotenv').config({ path: './../../.env' });
import sql from './db';
import { TUser } from '../types/TypeUser';

const User = function initUser(
	this: TUser,
	username: string,
	password: string,
	email: string
): void {
	this.username = username;
	this.email = email;
	this.password = password;
};

User.create = <T>(userData: TUser, result): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		sql.query(
			'INSERT INTO users (username, email, password) VALUES (?,?,?)',
			[userData.username, userData.email, userData.password],
			(err, res) => {
				if (err) {
					console.error(err);
					reject(result(err, null));
					return;
				}

				console.log(
					`Model: Create new user: ${{ id: res.insertId, ...userData }}`
				);
				resolve(result(null, { id: res.insertId, ...userData }));
			}
		);
	});
};

User.getAllUsers = <T>(result): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		sql.query(`SELECT * FROM users LIMIT 5`, (err, res) => {
			if (err) {
				console.error(err);
				reject(result(err, null));
			}

			console.log(`Model: Get all users: ${res}`);
			resolve(result(null, res));
		});
	});
};

User.getUserById = <T>(userId: number, result): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		sql.query(`SELECT * FROM users WHERE user_id = ?`, [userId], (err, res) => {
			if (err) {
				console.error(err);
				reject(result(err, null));
			}

			console.log(`Model: Got user ID: ${res}`);
			resolve(result(null, res));
		});
	});
};

User.deleteUserById = <T>(userId: number, result): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.query(`DELETE FROM users WHERE user_id = ?`, [userId], (err, res) => {
			if (err) {
				console.error(err);
				reject(result(err, null));
			}

			console.log(
				`Removed user ID: ${userId}. Affected row ${res.affectedRows}`
			);
			resolve(result(null, res));
		});
	});
};

User.updateUsername = <T>(
	userId: number,
	username: string,
	result
): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.query(
			`UPDATE users SET username = ? WHERE user_id = ?`,
			[username, userId],
			(err, res) => {
				if (err) {
					console.log(err);
					reject(result(err, null));
				}

				console.log(`Update user ID: ${userId}`);
				resolve(result(null, res));
			}
		);
	});
};

User.updateEmail = <T>(userId: number, email: string, result): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.query(
			`UPDATE users SET email = ? WHERE user_id = ?`,
			[email, userId],
			(err, res) => {
				if (err) {
					console.log(err);
					reject(result(err, null));
				}

				console.log(`Update user ID: ${userId}`);
				resolve(result(null, res));
			}
		);
	});
};

User.updatePassword = <T>(
	userId: number,
	password: string,
	result
): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.query(
			`UPDATE users SET password = ? WHERE user_id = ?`,
			[password, userId],
			(err, res) => {
				if (err) {
					console.log(err);
					reject(result(err, null));
				}

				console.log(`Update user ID: ${userId}`);
				resolve(result(null, res));
			}
		);
	});
};

export default User;
