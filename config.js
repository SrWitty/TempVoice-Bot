const config = {
  HUBtxtChannelID: "leaveBlank",
  HUBvcChannelID: "1239725139914919956",
  DefaultRoleID: "1237843005407232091",
  categoryID: "1239725051947909170",
  status: "idle",
  enable_slash: true,
  prefix: ".",
  owners: ["440222721079508993"],
};
//use env

config.HUBvcChannelID = process.env.HUB_ID || "";
config.DefaultRoleID = process.env.ROLE_ID || "";
config.categoryID = process.env.CATEGORY_ID || "";
config.prefix = process.env.PREFIX || "]";
config.owners = process.env.OWNERS
  ? process.env.OWNERS.split(",")
  : null || [""];

module.exports = { config };
