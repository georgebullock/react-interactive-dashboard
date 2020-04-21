module.exports = {
	roots: ['<rootDir>'],
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node_modules/', '/dist/']
};
