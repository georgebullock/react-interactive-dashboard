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

User.create = (newUser: InterfaceUser, result): void => {
	const query = `INSERT INTO users VALUES username = ?, email = ?, password = ?)`;
	sql.query(
		query,
		[newUser.username, newUser.email, newUser.password],
		(err, res) => {
			if (err) {
				console.error(`Error: ${err}`);
				result(err, null);
				return;
			}

			console.log(`Model: Create new user: ${{ id: res.user_id, ...newUser }}`);
			result(null, { id: res.user_id, ...newUser });
		}
	);
};

User.getAllUsers = <T>(result): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		sql.query(`SELECT * FROM users LIMIT 5`, (err, res) => {
			if (err) {
				console.error(`Error: ${err}`);
				reject(result(err, null));
			}

			console.log(`Model: Get all users: ${res}`);
			resolve(result(null, res));
		});
	});
};

User.getUserById = <T>(userId, result): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		sql.query(`SELECT * FROM users WHERE user_id = ?`, [userId], (err, res) => {
			if (err) {
				console.error(`Error: ${err}`);
				reject(result(err, null));
			}

			console.log(`Model: Get user by id: ${res}`);
			resolve(result(null, res));
		});
	});
};

export default User;
