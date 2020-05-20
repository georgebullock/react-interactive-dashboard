require('dotenv').config({ path: './../../.env' });
import sql from './db';
import { InterfaceUser } from '../Interfaces/InterfaceUser';

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

User.create = (newUser, result): void => {
	const query = `INSERT into users VALUES username = ?, email = ?, password = ?)`;
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

User.getAllUsers = (result): void => {
	sql.query(`SELECT * from users LIMIT 5`, (err, res) => {
		if (err) {
			console.error(`Error: ${err}`);
			result(err, null);
			return;
		}

		console.log(`Model: Get all users: ${res}`);
		result(null, res);
	});
};

export default User;
