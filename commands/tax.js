const Discord = require("discord.js");
const { getIcon } = require("../game/_CONSTS/icons");
const { calculateGoldGained } = require("../game/_GLOBAL_HELPERS");
module.exports = {
	name: "tax",
	description: "Shows your current gold income through taxes. Increase your taxes by completing quests and upgrading your buildings.",

	async execute(message, args, user) {
		const taxOfficeBuilding = user.empire.find(building => building.name === "tax office");
		if (!taxOfficeBuilding) return message.channel.send(`<@${message.author.id}>: You're not collecting taxes at the moment. Try building a tax office!`);
		const taxOfficeInformation = calculateGoldGained(user, taxOfficeBuilding, new Date());
		const embed = generateTaxEmbed(user, taxOfficeInformation);
		// generate embed
		// return message.channel.send(`<@${message.author.id}>: You're making ${getIcon("gold")} ${goldPerMinute} gold per minute through taxes. Type \`!collect\` to collect!`);
		return message.channel.send(embed);

	},
};


const generateTaxEmbed = (user, taxOfficeInformation) => {
	const { availableGoldToCollect,
		goldPerMinute,
		totalBuildingLevels,
		totalCompletedQuests,
		taxOfficeLevel } = taxOfficeInformation;

	const sideColor = "#45b6fe";
	const title = `${user.account.username}'s Tax Income `;

	const fields = [
		{
			name: `${getIcon("quest")} Quests Completed`,
			value: totalCompletedQuests,
			inline: true,
		},
		{
			name: "Buildings + upgrades",
			value: totalBuildingLevels,
			inline: true,
		},
		{
			name: "Gold Per Minute",
			value: `${getIcon("gold", "icon")} **${goldPerMinute}**`,
			inline: false,
		},
	];
	const attachment = new Discord.MessageAttachment("./assets/building-images/tax-office-level-0.png", "tax-office-level-0.png");
	const embedUser = new Discord.MessageEmbed()
		.attachFiles(attachment)
		.setTitle(title)
		.setDescription(`Tax Office Level: ${taxOfficeLevel}`)
		.setColor(sideColor)
		.setThumbnail("attachment://tax-office-level-0.png")
		.setFooter(`${getIcon("gold", "icon")} ${availableGoldToCollect} gold is available for collecting`)
		.addFields(...fields);
	/* .setThumbnail("attachment://assets/no-image.png") */


	return embedUser;
};