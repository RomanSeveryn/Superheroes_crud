module.exports.createImage = async (req, res, next) => {
  try {
    res.send(req.file)
  } catch (err) {
    next(err)
  }
}