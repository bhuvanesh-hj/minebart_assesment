const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
	process.env.DATABASE_SCHEMA_NAME,
	process.env.DATABASE_USER_NAME,
	process.env.DATABASE_USER_PASSWORD,
	{
		dialect: "mysql",
		host: "localhost",
	}
);

module.exports = sequelize;
