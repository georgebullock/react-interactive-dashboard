import { QueryResponse } from '../types/sqlQuery';
import { sqlQuery } from '../utils/sqlQuery';
import { Dashboard as IDashboard } from '../interfaces/Dashboard';

// For now this module will only GET comment, user, and tag data for the dashboard page
const DashboardModel: IDashboard = {
	getAllCommentsCount: (): Promise<QueryResponse> => {
		const result = sqlQuery<QueryResponse>(
			`select count(*) as count from comments`
		);

		console.log('2.) Dashboard(model) getAllCommentsCount result:', result);
		console.dir(result);

		return result;
	},

	getAllUsersCount: (): Promise<QueryResponse> => {
		const result = sqlQuery<QueryResponse>(
			`select count(*) as count from users`
		);

		console.log('2.) Dashboard(model) getAllUsersCount result:', result);
		console.dir(result);

		return result;
	}
};

export default DashboardModel;
