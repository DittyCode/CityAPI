const AppError = require('./../utils/AppError');

exports.noHandleUrl = (req, res, next) => {
	next(new AppError(`This API don't handle this ${req.originalUrl} path`, 404));
};
