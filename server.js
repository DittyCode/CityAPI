require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening at port : ${PORT}`);
});


process.on('uncaughtException', err => {
	const { name, message } = err;
	console.log({
		name,
		message,
	});
	process.exit(1);
});
