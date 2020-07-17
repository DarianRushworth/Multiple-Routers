const {Router} = require("express")

const router = new Router()

const students = ["Darian", "Myrin", "Ivaylo"]

router.get(
    "/student",
    (req, res) => res.send(students)
)
module.exports = router