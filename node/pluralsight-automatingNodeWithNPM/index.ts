import express from 'express'
import path from 'path'

const app = express();
const port = process.env.npm_package_config_port || 4005;
let runningMessage = 'Server is running on Port ' + port;

app.get('/api', (req, res) => {
  console.log('API was successfully called');
  res.send(runningMessage + ' Hello!')
})

app.use(express.static(path.resolve(`${__dirname}`, './')))

const server = app.listen(port, () => {
  console.log(runningMessage);
})

module.exports = server