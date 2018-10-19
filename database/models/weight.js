const Sequelize = require("sequelize");
const db = require("../connection");
const {dropIfExists} = require("../utils/drop")

const Weight = db.define("weight", {
	gms: {
		type: Sequelize.FLOAT,
	},
});

dropIfExists(Weight);


module.exports = Weight;
