const Discord = require("discord.js");
// const { getIcon } = require("../_CONSTS/icons");

const towerInfoEmbed = (user) => {
	const username = `${user.account.username}'s tower`;
	const sideColor = "#45b6fe";

	const fields = [
		{
			name: "Solo Full-Army",
			value:
              `Command: \`!tower solo full-army\`\nLevel: ${user.tower["solo full-army"].level}`,
			inline: true,
		},
		{
			name: "Trio Full-Army",
			value:
              `Command: \`!tower trio full-army\`\nLevel: ${user.tower["trio full-army"].level}`,
			inline: true,
		},
		{
			name: "Solo Hero",
			value:
              `Command: \`!tower solo hero\`\nLevel: ${user.tower["solo hero"].level}`,
			inline: true,
		},
		{
			name: "Trio Hero",
			value:
              `Command: \`!tower trio hero\`\nLevel: ${user.tower["trio hero"].level}`,
			inline: true,
		},
	];

	const embedTowerInfo = new Discord.MessageEmbed()
		.setTitle(username)
		.setColor(sideColor)
		.addFields(
			...fields,
		);
	return embedTowerInfo;
};

module.exports = towerInfoEmbed;