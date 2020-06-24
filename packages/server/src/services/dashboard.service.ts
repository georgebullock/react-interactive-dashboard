import Dashboard from './../models/dashboard.model';
import { QueryResponse, QueryError } from './../types/sqlQuery';

const DashboardService = {
	getAllCommentsCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await Dashboard.getAllCommentsCount();
		console.log(dbResponse);

		return dbResponse;
	}
};

export default DashboardService;
