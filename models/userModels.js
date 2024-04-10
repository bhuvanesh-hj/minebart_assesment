// models/User.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	phone: {
		type: DataTypes.STRING,
	},
	password:{
		type: DataTypes.STRING,
    allowNull: false,
	},
	registration_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
	pin_code: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = User;
