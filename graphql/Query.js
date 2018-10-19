const Weight = require("../database/models/weight");
const Op = require("sequelize").Op;

const Query = {
	async getWeight(parent, args, ctx, info) {
		const wts = await Weight.findAll().map(wt => {
			const obj = wt.dataValues;
			return obj;
		});

		return wts;
	},
	async getWeightinMonth(parent, args, ctx, info) {
		const date = new Date();
    const firstDay = new Date(date.getFullYear(), args.month, 1);
    const lastDay = new Date(date.getFullYear(), args.month + 1, 0);
    
		const wts = await Weight.findAll({
			where: {
				createdAt: {
					[Op.between]: [firstDay, lastDay],
				},
			},
		}).map(wt => {
			const obj = wt.dataValues;
			return obj;
		});

		return wts;
	},
};

module.exports = Query;
