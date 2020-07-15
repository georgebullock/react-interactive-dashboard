import { Pool } from 'mysql';

export interface MySQLConnection {
	open(): Pool;
	close(): void;
}
