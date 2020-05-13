require('dotenv').config({ path: './../../.env' });
import sql from './db';

interface User {
	username: string;
	password: string;
	email: string;
}

const User = function initUser(
	this: User,
	username: string,
	password: string,
	email: string
): void {
	this.username = username;
	this.email = email;
	this.password = password;
};

User.create = function(newUser, result): void {
	const query = `INSERT into users VALUES username = ?, email = ?, password = ?)`;
	sql.query(
		query,
		[newUser.username, newUser.email, newUser.password],
		(err, res) => {
			if (err) {
				console.error(err);
				result(err, null);
				return;
			}

			console.log(`New user ${{ id: res.user_id, ...newUser }} created'`);
			result(null, { id: res.user_id, ...newUser });
		}
	);
};

export default User;
