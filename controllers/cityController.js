const { catchAsyncHandler } = require('./../utils/catchAsyncHandler');
const City = require('./../models/cityModel');

exports.getAllCity = catchAsyncHandler((req, res, next) => {
	res.send({
		message: 'ALL',
	});
});
