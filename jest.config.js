module.exports = {
    testEnvironment: 'node',           // Specify the environment to run tests in Node.js
    verbose: true,                     // Display detailed results of the tests
    testMatch: ['**/tests/**/*.test.js'],  // Pattern to locate test files
    collectCoverage: true,             // Collect test coverage
    collectCoverageFrom: ['**/controllers/**/*.js', '**/models/**/*.js'], // Specify the files for coverage report
    coverageDirectory: 'coverage',     // Directory where the coverage report will be saved
    coverageThreshold: {               // Minimum coverage percentage thresholds
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    moduleDirectories: ['node_modules'], // Directories to search for modules
    setupFilesAfterEnv: ['./jest.setup.js'], // Optional setup file to run before tests
  };
  