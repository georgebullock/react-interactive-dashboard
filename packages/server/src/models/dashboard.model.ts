import { QueryResponse } from '../types/sqlQuery';
import { sqlQuery } from '../utils/sqlQuery';
import { Dashboard } from '../interfaces/Dashboard';

const DashboardModel: Dashboard = {
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
