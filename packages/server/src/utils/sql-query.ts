require('dotenv').config({ path: './../../.env' });
import sql from '../models/db';
import { SqlResponse } from '../types/sql-query';
import { isArray } from 'util';

export const sqlQuery = (
	query: string,
	values?: string | Array<string | number>
): Promise<SqlResponse> => {
	return new Promise((resolve, reject) => {
		sql.open().query(query, values, (err, res) => {
			if (err) {
				console.error(err);
				reject(err);
			}

			let data: SqlResponse;

			if (isArray(res)) {
				data = [];
				for (const item of res) {
					data.push({ ...item });
				}

				resolve(data);
			}

			data = { ...res };

			sql.close();
			console.log('3.) sqlQuery => result:');
			console.dir(res);

			resolve(data);
		});
	});
};
