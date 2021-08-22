module.exports = {
	/* The token of your Discord Bot */
	token: "ODc3NjI5MTU4Nzg2NzM2MTk4.YR1Z2Q.9c3L-idj7G-uR940CulXxDxIt5o",
	/* For the support server */
	support: {
		id: "877631293192536144", // The ID of the support server
		logs: "878192383546777620", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "8x6-mY7nu6u8ZhaMobAJs7GSFeoo0sUx", // Your discord client secret
		baseURL: "http://localhost:8080/", // The base URl of the dashboard
		logs: "878192383546777620", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "$£*^%$^!£564$£", // Express session password (it can be what you want)
		failureURL: "" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://TruDet:Q!Sze.ByfKgZ7Kg@trudettoutilities.56zih.mongodb.net/Data", // The URl of the mongodb database
	prefix: ">", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#fca800", // The default color for the embeds
		footer: "TruDetto Utilities | TruDetto" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "788110802699419719", // The ID of the bot's owner
		name: "TruDet#9999" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "", // The webhook auth that you have defined on discordbots.org
		channel: "" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "b0c7b38d-914c-4ae3-902a-75f6e78c35e0",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "d569f86562a05f32d4bbe6c25035db43400e8df155fd97992d0d0210815af318698bbe8dbcf3b15a85a510f0388952ef61468125ee0ba0c085bf0564eac66eaf"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/TruDet", // Founder's github account
		donate: "https://paypal.me/TruDetto" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "TruDetto Utilities on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "TruDetto https://dsc.gg/trudet",
			type: "PLAYING"
		}
	]
};
