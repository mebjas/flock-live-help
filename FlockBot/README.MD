# How to run this server

1. Clone this repo on some server with public IP. Let's say it's public name is `flockbot.minhaz.com`
2. Now create a flock app with event lisner url as `http://flockbot.minhaz.com/flocklive/event`, config url as: `http://flockbot.minhaz.com/flocklive/config`
3. Note down the bot token.
4. Now clone this app in your server and come to this path `cd FlockBot`
5. Chnage this line of code https://github.com/mebjas/flock-live-help/blob/master/FlockBot/index.js#L21 with the bot token.
6. Install all required packages `npm install`
7. Run the app `npm start` - should look something like this

![Might look something like this](../screenshots/flockbot_start.png)