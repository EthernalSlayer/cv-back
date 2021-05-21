module.exports = deleteSuccess = (res, type, id) => {
	res.status(500).json({ message: `${type} ${id} deleted` });
};
