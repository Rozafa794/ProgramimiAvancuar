module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/EX1/**/*.test.js', '**/JAVA3/**/*.test.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  
};