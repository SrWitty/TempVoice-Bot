const { Client, PermissionsBitField, Permissions, TextInputComponent, MessageSelectMenu, UserSelectMenuBuilder, GatewayIntentBits, SlashCommandBuilder, PermissionFlagsBits, ChannelType, RoleSelectMenuBuilder, ButtonBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js')
const { config } = require('./config')

const flooter = {
    "text": "Temp Voice Channel Bot by _9z. | ver 1.0",
    "iconURL": "https://media.discordapp.net/attachments/1154505539741548706/1170378658976895096/channels4_profile.jpg?ex=6558d310&is=65465e10&hm=52ae974168c10de868db6588a560a365189043182ff2703f4523cbfd8422a3cf&=&width=220&height=220"
}

const HubEmbed = new EmbedBuilder()
    .setTitle(`Temporary Private Voice Chat`)
    .setColor(0x00B9FF)
    .setDescription(
        `Join <#${config.HUBvcChannelID}> to create your own Temp VC, you will be the host. By default, it is hidden unless manually clicked to open for everyone!`,
    )
    .setFooter(flooter)

const AdminForceDelete = new EmbedBuilder()
    .setTitle(`Admin has used the force delete command!`)
    .setColor(0xe80000)
    .setFooter(flooter)

const consoleembed = new EmbedBuilder()
    .setTitle("Temporary Private Voice Chat Control")
    .setDescription("Use the buttons below to quickly change some settings!. \nHere is an explanation of the buttons:\n\nUse `Lock/Unlock` to lock the VC so that only whitelisted users can connect. Use `Hide/Unhide` to make the VC private, so only whitelisted users can see it. Use `Mute/Unmute` to allow only whitelisted users to speak, affecting only newly joined users. Use `Ban/Unban` to ban specific users from joining the VC. Use `Whitelist/Remove` for whitelisting. Use `Limit` to limit the number of users who can join. Use `Change Owner` to transfer ownership of the room. Use `Change Name` to change the VC's name to anything you want (remember to follow the rules). Use `Get Mention` to get a voice invitation link to invite them to join the voice channel immediately!\n\nTransferring ownership will clear previous restrictions!!.")
    .setColor(0x00B9FF)
    .setFooter(flooter)

const Whitelisttembed = new EmbedBuilder()
    .setTitle('Whitelist')
    .setColor(0xaf40de)
    .setAuthor({
        name: "_9z.'s Private Voice Chat Assistant",
        iconURL: "https://media.discordapp.net/attachments/1154505539741548706/1170378658976895096/channels4_profile.jpg?ex=6558d310&is=65465e10&hm=52ae974168c10de868db6588a560a365189043182ff2703f4523cbfd8422a3cf&=&width=220&height=220"
    })

const banliste = new EmbedBuilder()
    .setTitle('Ban List')
    .setColor(0xaf40de)
    .setAuthor({
        name: "_9z.'s Private Voice Chat Assistant",
        iconURL: "https://media.discordapp.net/attachments/1154505539741548706/1170378658976895096/channels4_profile.jpg?ex=6558d310&is=65465e10&hm=52ae974168c10de868db6588a560a365189043182ff2703f4523cbfd8422a3cf&=&width=220&height=220"
    })

const predelete_Cancel = new EmbedBuilder()
    .setTitle("Deletion Canceled!")
    .setDescription("The scheduled deletion process has been canceled!")
    .setColor(0x02cf21)
    .setAuthor({
        name: "_9z.'s Private Voice Chat Assistant",
        iconURL: "https://media.discordapp.net/attachments/1154505539741548706/1170378658976895096/channels4_profile.jpg?ex=6558d310&is=65465e10&hm=52ae974168c10de868db6588a560a365189043182ff2703f4523cbfd8422a3cf&=&width=220&height=220"
    })

const predelete = new EmbedBuilder()
    .setTitle("Scheduled Deletion!")
    .setColor(0xff0000)
    .setAuthor({
        name: "_9z.'s Private Voice Chat Assistant",
        iconURL: "https://media.discordapp.net/attachments/1154505539741548706/1170378658976895096/channels4_profile.jpg?ex=6558d310&is=65465e10&hm=52ae974168c10de868db6588a560a365189043182ff2703f4523cbfd8422a3cf&=&width=220&height=220"
    })

const ownerLeave = new EmbedBuilder()
    .setTitle("Room Owner Has Left the Voice Chat")
    .setColor(0x00B9FF)
    .setFooter(flooter)
    .setAuthor({
        name: "_9z.'s Private Voice Chat Assistant",
        iconURL: "https://media.discordapp.net/attachments/1154505539741548706/1170378658976895096/channels4_profile.jpg?ex=6558d310&is=65465e10&hm=52ae974168c10de868db6588a560a365189043182ff2703f4523cbfd8422a3cf&=&width=220&height=220"
    })

module.exports = {
    embedFlooter: flooter,
    createHubEmbed: HubEmbed,
    adminDeleteEmbed: AdminForceDelete,
    controlsEmbed: consoleembed,
    whitelist_Embed: Whitelisttembed,
    banlist_Embed: banliste,
    CancelPreDelete_Embed: predelete_Cancel,
    predelete_Embed: predelete,
    ownerLeave_Embed: ownerLeave
}
