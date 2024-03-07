# Files Manager

This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination, and background processing. The objective is to build a simple platform to upload and view files. Users can authenticate via a token, list all files, upload a new file, change permission of a file, view a file, and generate thumbnails for images. 

## Objective
The main objective is to assemble each piece and build a full product to understand the process better.

## Installation and Setup
1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Run the project using `npm start`.

## Resources
Read or watch:
- [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [nodemon documentation](https://github.com/remy/nodemon#nodemon)
- [MongoDB](https://github.com/mongodb/node-mongodb-native)
- [Bull](https://github.com/OptimalBits/bull)
- [Image thumbnail](https://www.npmjs.com/package/image-thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis](https://github.com/redis/node-redis)

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be verified against lint using ESLint

## Provided Files
- `package.json`
- `.eslintrc.js`
- `babel.config.js`

## Tasks
1. **Redis utils**: `utils/redis.js`
2. **MongoDB utils**: `utils/db.js`
3. **First API**: `server.js`, `routes/index.js`, `controllers/AppController.js`
4. **Create a new user**: `routes/index.js`, `controllers/UsersController.js`
5. **Authenticate a user**: `routes/index.js`, `controllers/AuthController.js`
6. **First file**: `routes/index.js`, `controllers/FilesController.js`
7. **Get and list file**: `routes/index.js`, `controllers/FilesController.js`
8. **File publish/unpublish**: `routes/index.js`, `controllers/FilesController.js`
9. **File data**: `routes/index.js`, `controllers/FilesController.js`
10. **Image Thumbnails**: Update `POST /files` endpoint

## Usage
- After setting up the project, follow the provided instructions for each task in the README file.
- Run the provided code snippets in the terminal to test the endpoints.

