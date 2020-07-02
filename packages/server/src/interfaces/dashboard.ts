import { QueryResponse } from '../types/sqlQuery';

export interface Dashboard {
	getAllCommentsCount(): Promise<QueryResponse>;
	getAllUsersCount(): Promise<QueryResponse>;
}
