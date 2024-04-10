// models/Address.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModels");

const Address = sequelize.define("Address", {
	street: {
		type: DataTypes.STRING,
	},
	city: {
		type: DataTypes.STRING,
	},
	state: {
		type: DataTypes.STRING,
	},
	country: {
		type: DataTypes.STRING,
	},
	pin_code: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

Address.belongsTo(User);

module.exports = Address;
