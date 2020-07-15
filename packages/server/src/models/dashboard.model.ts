import { SqlResponse } from '../types/sql-query';
import { sqlQuery } from '../utils/sql-query';
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
	},

	getMostActiveUsers: (): Promise<SqlResponse> => {
		const result = sqlQuery(`
			SELECT 
				users.user_id, username
			FROM 
				users
			INNER JOIN comments ON
				comments.user_id
			WHERE 
				comments.created_at BETWEEN curdate() AND curdate() - 7;`);

		return result;
	}
};

export default DashboardModel;
