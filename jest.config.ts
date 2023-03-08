// jest.config.js
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // This configuration tells Jest to map any import statement that starts with @/ to the src folder of your project. For example, the import statement import { myFunction } from '@/utils/myFunction' would be resolved to <rootDir>/src/utils/myFunction, assuming that src is located at the root of your project.
    // Note that the moduleNameMapper option uses regular expressions to match import statements and map them to file paths. In the example above, the regular expression ^@/(.*)$ matches any import statement that starts with @/ and captures the rest of the path (the (.*) part) as a group. The replacement string <rootDir>/src/$1 then replaces the matched path with the correct file path, where $1 represents the captured group.
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
