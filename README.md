<details> <summary>Explanation</summary>



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

.</details>

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

