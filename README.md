<details> <summary>Explanation</summary>

# Discord Temp Voice Channel BOT

## Overview
Do you want a voice channel on Discord where you won't be disturbed or don't want others to join, but you don't want to trouble administrators to create a channel for you? Or do you have issues with the voice region, but the administrators are not online to help? Or perhaps there are users violating rules and intentionally harassing others, and you want to kick them out of the voice channel?

This bot can fulfill your requirements! The Private Voice Channel allows regular users to create voice channels without requiring special permissions.

It also has a separate control area, allowing room hosts to:
1. Kick users.
2. Ban users (hide the voice channel from specific users).
3. Hide channels.
4. Lock channels (visible but not joinable).
5. Customize channel names.
6. Change the voice region.
7. Whitelist.
8. Limit the number of users.
9. Mute others (affecting newcomers only).

For server owners, there are features like:
1. Setting default roles.
2. One-click clearing of all rooms.
3. Automatic clearing of voice channels if the room owner leaves for more than 3 minutes.
4. Logging.

#### Completely Commandless!
Except for specific commands (admin deletion, calling the console), everything is done using Discord's interactive system (buttons, forms, menus).

## How to Install and Start?

1. Download the source code.
2. Fill in the required information in `config.json` (Token, guild, HUBvcChannelID, DefaultRoleID, categoryID, owners).
3. Install the necessary components with `npm install`.
4. Start the bot with `node tempVCs.js`.

<hr><br><br>

</details>


# Discord Temp Voice Channel Bot


This BOT allows the average user to create channels, edit names, numbers, visibility, etc., without the need for administrator intervention!

And with the independent control interface, users can do:
1. Kick the user out of the voice channel.
2. Block the user from the voice channel.
3. Set a maximum number of users.
4. Change the region of the voice channel.
5. Change the name of the voice channel.
6. Set a whitelist.
7. Mute new users who join after the mute has been applied.
8. Hide the channel.
9. Lock the channel.

Server owners can:
1. Set the default role.
2. Clear all temp VCs.
3. Log.

And all temp VCs will automatically clear the voice channel when the user leaves for more than 3 minutes.

## Install

1. Download the repository.
2. Fill in the necessary information in `config.json` (Token, guild, HUBvcChannelID, DefaultRoleID, categoryID, owners).
3. Install the necessary components with `npm install`.
4. Start the bot with `node tempVCs.js`.

.

## Docker Compose

```yml
version: "3.9"
    environment:
      TOKEN: "YOUR Discord TOKEN"
      SERVER_ID: "YOUR Discord ServerID"
      CATEGORY_ID: "Your category ID"
      HUB_ID: "Your HUB Voice Channel ID"
      ROLE_ID: "Default role | if you use @everyone, please put the server ID here"
      PREFIX: "["
      OWNERS: "123456,123456"
```

## Social Media Links

Connect with me on various social media platforms:

- [Instagram](https://www.instagram.com/mohamed_gamer_38/)
- [Threads](https://www.threads.net/@mohamed_gamer_38)
- [Discord](https://discord.com/users/1091118468155314306)

Feel free to follow, connect, or reach out to me through these platforms.