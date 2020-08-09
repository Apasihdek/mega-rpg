const { handleDaily } = require("../game/dailyPrize");

module.exports = {
	name: "dailyPrize",
	aliases: ["daily"],
	description: "Get daily bonuses!",
	async execute(message, args, user) {
		const result = await handleDaily(user);
		return message.channel.send(result);
	},
};