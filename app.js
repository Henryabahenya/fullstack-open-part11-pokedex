const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

// health check for uptime/readiness probes
app.get('/health', (req, res) => {
  res.status(200).send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})