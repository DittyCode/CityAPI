require('dotenv').config({ path: './../.env' });
const AppError = require('./../utils/AppError');
exports.globalErrorMiddleware = (err, req, res, next) => {
	const { message, statusCode, status } = err;
	res.status(statusCode).send({
		err: {
			message,
			statusCode,
			status,
		},
		stack: process.env.NODE_ENV === 'development' && err.stack,
	});
};
