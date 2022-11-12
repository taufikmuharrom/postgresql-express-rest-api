const express = require('express')
const studentRoutes = require('./src/student/router')
const app = express()
const port = 5000

app.use(express.json())
app.use("/api/v1/students", studentRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))