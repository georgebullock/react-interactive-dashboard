import DashboardModel from './../models/dashboard.model';
import { SqlResponse } from '../types/sql-query';

const DashboardService = {
	getAllCommentsCount: async (): Promise<SqlResponse> => {
		const dbResponse = await DashboardModel.getAllCommentsCount();

		console.log('4.) DashboardModel.getAllCommentsCount response:');
		console.dir(dbResponse);

		return dbResponse;
	},

	getAllUsersCount: async (): Promise<SqlResponse> => {
		const dbResponse = await DashboardModel.getAllUsersCount();

		console.log('4.) DashboardModel.getAllUsersCount response:', dbResponse);
		console.dir(dbResponse);

		return dbResponse;
	},

	getMostActiveUsers: async (): Promise<SqlResponse> => {
		const dbResponse = await DashboardModel.getMostActiveUsers();

		return dbResponse;
	}
};

export default DashboardService;
