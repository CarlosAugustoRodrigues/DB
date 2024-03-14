const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});