const sendMail = require('../nodemailer')

const sendMailHandler = async (req, res) => {
  const { title, content, to } = req.body
  const info = await sendMail({ title, content, to })
  res.json({ msg: info })
}

module.exports = {
  sendMailHandler
}