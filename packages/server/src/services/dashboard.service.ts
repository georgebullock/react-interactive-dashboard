import Dashboard from './../models/dashboard.model';
import { QueryResponse, QueryError } from './../types/sqlQuery';

const DashboardService = {
	getAllCommentsCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await Dashboard.getAllCommentsCount();
		console.log(
			'DashboardService.getAllCommentsCount response => ',
			dbResponse
		);
		return dbResponse;
	},

	getAllUsersCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await Dashboard.getAllUsersCount();
		console.log('DashboardService.getAllUsersCount response => ', dbResponse);
		return dbResponse;
	}
};

export default DashboardService;
