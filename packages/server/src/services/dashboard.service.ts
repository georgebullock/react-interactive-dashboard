import Dashboard from './../models/dashboard.model';
import { QueryResponse, QueryError } from './../types/sqlQuery';

const DashboardService = {
	getAllCommentsCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await Dashboard.getAllCommentsCount();
		return dbResponse;
	},

	getAllUsersCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await Dashboard.getAllUsersCount();
		return dbResponse;
	}
};

export default DashboardService;
