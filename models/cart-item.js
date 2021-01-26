const { Sequelize, DataTypes } = require('sequelize')

const sequlize = require('../util/database')

const CartItem = sequlize.define('cartItem', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	quantity: DataTypes.INTEGER,
})

module.exports = CartItem
