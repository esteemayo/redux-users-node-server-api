const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());
// Access-Control-Allow-Origin
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

// Developmwent logging
if (app.get('env') === 'development') {
    app.use(morgan('dev'));
}

// Body Parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.post('/api/users/:id/update', (req, res, next) => {
    setTimeout(() => {
        res.status(200).send(req.body);
    }, [2000]);
});

module.exports = app;
