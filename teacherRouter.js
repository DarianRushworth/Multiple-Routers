const {Router} = require("express")

const router = new Router()

const teachers = ["David", "Rein", "Matias"]

router.get(
    "/teacher",
    (req, res) => res.send(teachers)
)
module.exports = router