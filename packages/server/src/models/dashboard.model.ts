import { QueryResponse } from '../types/sqlQuery';
import { sqlQuery } from '../utils/sqlQuery';
import { Dashboard as IDashboard } from '../interfaces/Dashboard';

// For now this module will only GET comment, user, and tag data for the dashboard page
const Dashboard: IDashboard = {
	getAllCommentsCount: (): Promise<QueryResponse> => {
		return sqlQuery<QueryResponse>(`select count(*) from comments`);
	}
};

export default Dashboard;
