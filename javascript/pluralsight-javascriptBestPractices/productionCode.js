/**
 * Production Code
 * - Node Best Practices
 * - NPM
 * - Env
 * - Cross Platform Environment
 */

//  NPM - Always npm init a new project
const packageJson = {
  engines: {
    node: '4.2.1', // this can say this package is only allowed with node engines
  },
};

// Environment - Nodemon and NodeForeman can be used to create .env file
console.log(process.env.PORT);
