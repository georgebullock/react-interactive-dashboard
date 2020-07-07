export type SqlManipulationResponse = [
	{
		fieldCount: number;
		affectedRow: number;
		insertId: number;
		serverStatus: number;
		warningCount: number;
		protocol41: boolean;
		changedRows: number;
	}
];

export type SqlQueryResponse = object[];

export type SqlResponse = SqlQueryResponse | SqlManipulationResponse;

// export type SqlErrorResponse = {
// 	status: number;
// 	message: string;
// };
