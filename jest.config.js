module.exports = {
  projects: [
    {
      displayName: "CLIENT",
      testMatch: ["<rootDir>/packages/client/jest.config.js"],
    },
    {
      displayName: "SERVER",
      testMatch: ["<rootDir>/packages/server/jest.config.js"],
    },
  ];
}
