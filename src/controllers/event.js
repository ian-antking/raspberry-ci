exports.handleEvent = (req, res) => {
    console.log(req);
    res.status(200).json({ message: "Hello World!" });
}
