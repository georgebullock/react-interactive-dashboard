import { QueryResponse } from '../types/sqlQuery';
import { sqlQuery } from '../utils/sqlQuery';
import { Dashboard as IDashboard } from '../interfaces/Dashboard';

// For now this module will only GET comment, user, and tag data for the dashboard page
const Dashboard: IDashboard = {
	getAllCommentsCount: (): Promise<QueryResponse> => {
		const result = sqlQuery<QueryResponse>(
			`select count(*) as count from comments`
		);

		console.log('model => getAllCommentsCount => result:', result);
		return result;
	},

	getAllUsersCount: (): Promise<QueryResponse> => {
		const result = sqlQuery<QueryResponse>(
			`select count(*) as count from users`
		);

		console.log('model => getAllUsersCount => result:', result);
		return result;
	}
};

export default Dashboard;
