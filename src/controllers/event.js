exports.handleEvent = (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: req.body.message });
}
