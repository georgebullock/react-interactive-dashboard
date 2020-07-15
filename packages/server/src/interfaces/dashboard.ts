import { SqlResponse } from '../types/sql-query';

export interface Dashboard {
	getAllCommentsCount(): Promise<SqlResponse>;
	getAllUsersCount(): Promise<SqlResponse>;
	getMostActiveUsers(): Promise<SqlResponse>;
}
