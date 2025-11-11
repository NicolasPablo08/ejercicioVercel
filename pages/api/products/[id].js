function prod(req, res) {
	res.json({
		producto: "papa",
		index: req.query,
	});
}
export default prod;
