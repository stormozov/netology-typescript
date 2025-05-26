module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx', 'json', 'node' ],
  testPathIgnorePatterns: [ '<root-dir>/src/ts/enums/' ],  
};
