import Dashboard from './../models/dashboard.model';
import { QueryResponse, QueryError } from './../types/sqlQuery';

const DashboardService = {
	getAllCommentsCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await Dashboard.getAllCommentsCount();

		console.log(`Service => dbResponse: `, dbResponse);

		// This works, but it's slow relative to a for loop
		console.log(
			`Service => dbResponse: `,
			JSON.parse(JSON.stringify(dbResponse))
		);

		// for (let index = 0; index < dbResponse.length; i++) {}
		// These responses return the same result, which doesn't make sense
		// console.log(`Service => typeof dbResponse: `, typeof dbResponse);
		// console.log(`Service => dbResponse: `, dbResponse);
		// console.log(`Service => dbResponse.data: `, dbResponse);
		// console.log(
		// 	`Service => dbResponse.data[0].rowDataPacket['count(*)']: `,
		// 	dbResponse
		// );

		return dbResponse;
	}
};

export default DashboardService;
