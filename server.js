require('dotenv').config();
const express = require('express');
const { catchAsyncHandler } = require('./utils/catchAsyncHandler');
const {
	globalErrorMiddleware,
} = require('./middlewares/globalErrorMiddleware');
const { noHandleUrl } = require('./controllers/errorController');

const db = require('./db/connect');

const app = express();

const PORT = process.env.SERVER_PORT || 3000;

const initServer = catchAsyncHandler(async () => {
	app.listen(PORT, () => {
		console.log(`Server is listening at port : ${PORT}`);
	});
	await db();
});

app.all('*', noHandleUrl);

app.use(globalErrorMiddleware);

initServer();

process.on('uncaughtException', err => {
	const { name, message } = err;
	console.log({
		name,
		message,
	});
	process.exit(1);
});
