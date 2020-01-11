const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const morgan = require('morgan');

const accountsRouter = require('./router/accountsRouter');

const server = express();

// global middleware
server.use(express.json());

// Third-party middleware
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome. You have successfully reached our serveer. If you know the available endpoints, enjoy!!!'
  })
});

server.use('/api', accountsRouter);

server.use('/*', (req, res) => {
  res.status(404).json({
    error: "The requested path does not exist on this server"
  });
})

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal server error.",
    err
  });
});

module.exports = server;
