import DashboardModel from './../models/dashboard.model';
import { QueryResponse, QueryError } from './../types/sqlQuery';

const DashboardService = {
	getAllCommentsCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await DashboardModel.getAllCommentsCount();

		console.log('4.) Dashboard.getAllCommentsCount response:');
		console.dir(dbResponse);

		return dbResponse;
	},

	getAllUsersCount: async (): Promise<QueryResponse | QueryError> => {
		const dbResponse = await DashboardModel.getAllUsersCount();

		console.log('4.) Dashboard.getAllUsersCount response:', dbResponse);
		console.dir(dbResponse);

		return dbResponse;
	}
};

export default DashboardService;
