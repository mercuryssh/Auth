const errorHandler = (error,req, res, next) => {
  if (error) {
    res.status(500).send('<h1>They was a Error, please try later</h1>')
  }
  next()
}
export default errorHandler
