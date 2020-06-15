const Discord = require("discord.js");
const { onCooldown } = require("../_CONSTS/cooldowns");
const { getWeeklyPrize } = require("../_CONSTS/weeklyPrize");
const { getResourceIcon } = require("../_CONSTS/icons");

const handleWeekly = async (user) => {
    const onCooldownInfo = onCooldown("weeklyPrize", user);
    if (onCooldownInfo.response) {
        return onCooldownInfo.embed;
    }
    const now = new Date();
    const lastClaimLessThanTwoDays = user.cooldowns.dailyPrize + 1000 * 60 * 60 * 14 >= now;

    let consecutiveWeek = user.consecutivePrizes.weeklyPrize;

    if (lastClaimLessThanTwoDays) {
        consecutiveWeek = 0;
    }
    if (consecutiveWeek >= 4) {
        consecutiveWeek = 4;
    }

    const weeklyPrizeResult = getWeeklyPrize(consecutiveWeek);
    await user.handleConsecutive(weeklyPrizeResult, (consecutiveWeek + 1), now, "weeklyPrize");

     const embededResult = generatePrizeEmbed(weeklyPrizeResult, consecutiveWeek);
     return embededResult;
};

const generatePrizeEmbed = (result, consecutiveWeek)=>{
    getResourceIcon();

    const sideColor = "#45b6fe";

    const preTitle = " WEEKLY PRIZE  ";
    const consecutiveStars = "🌟".repeat(consecutiveWeek + 1);

    let title = consecutiveStars;
    title += preTitle;
    title += consecutiveStars;
    // "🌟🌟🌟 WEEKLY PRIZE 🌟🌟🌟"


    let valueField = "";

            Object.keys(result).forEach(r=>{
                valueField += `${getResourceIcon(r)} ${r}: ${result[r]}\n`;
            });

    const lexicon = ["first", "second", "third", "fourth", "fifth (max)"];
    const embedUser = new Discord.MessageEmbed()
		.setTitle(title)
		.setColor(sideColor)
		.addFields(
			{
				name: "Reward:",
				value:valueField,
				inline: true,
            },
		)
		.setFooter(`This is your ${lexicon[consecutiveWeek]} consecutive week!`);

    return embedUser;
};


module.exports = { handleWeekly };
