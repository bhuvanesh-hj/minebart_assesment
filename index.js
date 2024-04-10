// app.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/userModels");
const Address = require("./models/addressModels");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", userRoutes);

Address.belongsTo(User);

sequelize
	.sync({force: false})
	.then(() => {
		console.log("Database synced");
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	})
	.catch((error) => console.error("Error syncing database:", error));
