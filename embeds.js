const {
  Client,
  PermissionsBitField,
  Permissions,
  TextInputComponent,
  MessageSelectMenu,
  UserSelectMenuBuilder,
  GatewayIntentBits,
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChannelType,
  RoleSelectMenuBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  EmbedBuilder,
} = require("discord.js");
const { config } = require("./config");

const flooter = {
  text: "Geçici Ses Kanalı Botu",
  iconURL:
    "https://cdn.discordapp.com/icons/280519904510345216/a_b6c60dfadc9ebe8e963fcf3cf256fd9b.png?size=4096",
};

const HubEmbed = new EmbedBuilder()
  .setTitle(`Patlıcan Sesli Sohbet Asistanı`)
  .setColor(0x00b9ff)
  .setDescription(
    `Join <#${config.HUBvcChannelID}> to create your own Temp VC, you will be the host. By default, it is hidden unless manually clicked to open for everyone!`,
  )
  .setFooter(flooter);

const AdminForceDelete = new EmbedBuilder()
  .setTitle(`Yetkili kanal silme komutunu kullandı!`)
  .setColor(0xe80000)
  .setFooter(flooter);

const consoleembed = new EmbedBuilder()
  .setTitle("Geçici Sesli Sohbet Kontrolü")
  .setDescription(
    "Bazı ayarları hızla değiştirmek için aşağıdaki düğmeleri kullanın!. \nButonların kullanış talimatları:\n\n`Kanalı Kilitle/Kilidi Kaldır` odaya sadece whitelist üyeleri bağlanabilir. \n`Kanalı Gizle/Kanalı Göster` odayı sadece whitelist üyeleri görebilir.. \n`Mute/Unmute` odaya katılan üyler muteli bir şekilde bağlanır. \n`Yasakla/Kaldır` odayı yasaklı üyelere tamamen kapatırsın. \n`Whitelist/Kaldır` odana katılabilmesi seçtiğin kişilere izin ver. \n`Limit` odaya katılabilecek üyelerin sayısını belirler. \n`Odayı Aktar` odayı başka bir kullanıcıya aktarırsın. \n`Kanal Adı` odanın adını belirle (kurallara uygun bir şekilde).",
  )
  .setColor(0x00b9ff)
  .setFooter(flooter);

const Whitelisttembed = new EmbedBuilder()
  .setTitle("Whitelist")
  .setColor(0xaf40de)
  .setAuthor({
    name: "Patlıcan Sesli Sohbet Asistanı",
    iconURL:
      "https://cdn.discordapp.com/icons/280519904510345216/a_b6c60dfadc9ebe8e963fcf3cf256fd9b.png?size=4096",
  });

const banliste = new EmbedBuilder()
  .setTitle("Yasaklı Listesi")
  .setColor(0xaf40de)
  .setAuthor({
    name: "Patlıcan Sesli Sohbet Asistanı",
    iconURL:
      "https://cdn.discordapp.com/icons/280519904510345216/a_b6c60dfadc9ebe8e963fcf3cf256fd9b.png?size=4096",
  });

const predelete_Cancel = new EmbedBuilder()
  .setTitle("Iptal Edildi!")
  .setDescription("Planlanan silme işlemi iptal edildi!")
  .setColor(0x02cf21)
  .setAuthor({
    name: "Patlıcan Sesli Sohbet Asistanı",
    iconURL:
      "https://cdn.discordapp.com/icons/280519904510345216/a_b6c60dfadc9ebe8e963fcf3cf256fd9b.png?size=4096",
  });

const predelete = new EmbedBuilder()
  .setTitle("Planlanmış Silme!")
  .setColor(0xff0000)
  .setAuthor({
    name: "Patlıcan Sesli Sohbet Asistanı",
    iconURL:
      "https://cdn.discordapp.com/icons/280519904510345216/a_b6c60dfadc9ebe8e963fcf3cf256fd9b.png?size=4096",
  });

const ownerLeave = new EmbedBuilder()
  .setTitle("Oda Sahibi Sesli Sohbetten Ayrıldı")
  .setColor(0x00b9ff)
  .setFooter(flooter)
  .setAuthor({
    name: "Patlıcan Sesli Sohbet Asistanı",
    iconURL:
      "https://cdn.discordapp.com/icons/280519904510345216/a_b6c60dfadc9ebe8e963fcf3cf256fd9b.png?size=4096",
  });

module.exports = {
  embedFlooter: flooter,
  createHubEmbed: HubEmbed,
  adminDeleteEmbed: AdminForceDelete,
  controlsEmbed: consoleembed,
  whitelist_Embed: Whitelisttembed,
  banlist_Embed: banliste,
  CancelPreDelete_Embed: predelete_Cancel,
  predelete_Embed: predelete,
  ownerLeave_Embed: ownerLeave,
};
