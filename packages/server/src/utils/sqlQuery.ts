import sql from './../models/db';

export const sqlQuery = <T>(
	query: string,
	values?: string | Array<string | number>
): Promise<T> => {
	return new Promise((resolve, reject) => {
		sql.query(query, values, (err, res) => {
			if (err) {
				console.error(err);
				reject(err);
			}

			resolve(res);
		});
	});
};
