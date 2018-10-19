const Weight = require("../database/models/weight");

const Mutation = {
	async addWeight(parent, args, ctx, info) {
		const newWeight = await Weight.create({
			gms: args.gms,
    });
    return newWeight;
	},
};

module.exports = Mutation;
