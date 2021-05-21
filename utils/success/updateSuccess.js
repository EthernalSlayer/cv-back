module.exports = updateSuccess = (res, type, id) => {
	res.status(200).json({ message: `${type} ${id} updated` });
};
