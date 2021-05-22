const express = require('express');
const router = express.Router();
const multer = require('multer');

const checkAccessToken = require('../utils/authentication/checkAccessToken');

// multer options
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './images');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage }).single('upload');

router.post('/', checkAccessToken, (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.status(201).json({ message: 'upload success' });
		}
	});
});

module.exports = router;
