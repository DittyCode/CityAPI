require('dotenv').config({ path: './../.env' });
const { catchAsyncHandler } = require('./../utils/catchAsyncHandler');

const mongoose = require('mongoose');

const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

const initDB = catchAsyncHandler(async () => {
	await mongoose.connect(DB);
	console.log('Connected with DB : status success');
});

module.exports = initDB;
