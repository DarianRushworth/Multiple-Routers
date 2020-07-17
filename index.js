const express = require("express")
const StudentRouter = require("./studentRouter")
const TeacherRouter = require("./teacherRouter")

const app = express()
const port = 4000

app.use(StudentRouter)
app.use(TeacherRouter)

function onListen(){
    console.log(`Listening on port: ${port}`)
}

app.listen(
    port,
    onListen
)