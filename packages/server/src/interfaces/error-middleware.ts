export interface CustomHttpError extends Error {
	name: string;
	status: string;
	message: string;
}
