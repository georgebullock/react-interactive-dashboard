require('dotenv').config({ path: './../../.env' });
import sql from './db';
import { InterfaceUser } from '../Interfaces/InterfaceUser';
// import { util } from 'util';

const User = function initUser(
	this: InterfaceUser,
	username: string,
	password: string,
	email: string
): void {
	this.username = username;
	this.email = email;
	this.password = password;
};

User.create = <T>(userData: InterfaceUser, result): Promise<T> => {
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

User.updateUserById = <T>(userId, userData, result): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.query(
			`UPDATE users SET (username = ?, email = ?, password = ? WHERE user_id = ?`,
			[userData.username, userData.email, userData.password, userId],
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
