import sql from './../models/db';

// TODO: Learn how to type this expression properly for its use case in models

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

			console.log(`sqlQuery response was successful: ${res}`);
			resolve(res);
		});
	});
};
