const express = require('express')
const app = express()
const port = 1517
const attendance = []
app.get('/', (req, res) => {
	let person = req.query.name
	attendance.push(person)
	console.log(person)
	res.send(person)

});
https://494fi8scv8qv.runkit.sh/
app.listen(port, () => console.log(`Example app listening on port ${port}!`))