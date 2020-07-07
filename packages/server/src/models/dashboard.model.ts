import { SqlResponse } from '../types/sqlQuery';
import { sqlQuery } from '../utils/sqlQuery';
import { Dashboard } from '../interfaces/Dashboard';

const DashboardModel: Dashboard = {
	getAllCommentsCount: (): Promise<SqlResponse> => {
		const result = sqlQuery(`SELECT count(*) as count FROM comments`);

		console.log('2.) Dashboard(model) getAllCommentsCount result:', result);
		console.dir(result);

		return result;
	},

	getAllUsersCount: (): Promise<SqlResponse> => {
		const result = sqlQuery(`SELECT count(*) as count FROM users`);

		console.log('2.) Dashboard(model) getAllUsersCount result:', result);
		console.dir(result);

		return result;
	}
};

export default DashboardModel;
