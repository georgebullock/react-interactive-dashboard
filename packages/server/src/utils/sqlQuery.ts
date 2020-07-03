require('dotenv').config({ path: './../../.env' });
import sql from './../models/db';

export const sqlQuery = <T>(
	query: string,
	values?: string | Array<string | number>
): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.open().query(query, values, (err, res) => {
			if (err) {
				console.error(err);
				reject(err);
			}

			console.log('3.) sqlQuery => result:', res);
			console.dir(res);

			sql.close();
			resolve(res);
		});
	});
};
