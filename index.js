const app = require("./app")
const env = require('dotenv').config({path:"./config.env"})
const PORT = process.env.WEB_PORT || 5000;

app.listen(PORT, () => {
    console.log(`App Running ${PORT}`)
})