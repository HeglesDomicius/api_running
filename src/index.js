const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const routes = require('./routes/routes.js');
const controllers = require('./controllers/users.js');

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(controllers);

app.listen(port, () => console.log(`API runninng on port ${port}`));
