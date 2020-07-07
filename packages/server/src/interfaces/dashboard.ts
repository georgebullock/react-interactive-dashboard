import { SqlResponse } from '../types/sqlQuery';

export interface Dashboard {
	getAllCommentsCount(): Promise<SqlResponse>;
	getAllUsersCount(): Promise<SqlResponse>;
}
