export type ChangeResponse = {
	data: {
		fieldCount: number;
		affectedRow: number;
		insertId: number;
		serverStatus: number;
		warningCount: number;
		protocol41: boolean;
		changedRows: number;
	};
};

export type QueryResponse = {
	data: object[];
};

export type QueryError = {
	status: number;
	message: string;
};
