const express = require("express");
const addApiRoutes = require("./routes/apiRoutes");
const addHtmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.Port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

addApiRoutes(app);
addHtmlRoutes(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));