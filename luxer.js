const Discord = require("discord.js")
const config = require("./luxerconfig.json")
const axios = require("axios")
const luxer1 = new Discord.Client()
const luxer2 = new Discord.Client()
const luxer3 = new Discord.Client()
const luxer4 = new Discord.Client()
const luxer5 = new Discord.Client()
const luxer6 = new Discord.Client()
// Luxer
// Luxer
luxer1.on("ready", () => {
    luxer1.user.setActivity(config.BotOynuyor);


    console.log(luxer1.user.tag)
})
// Luxer
// Luxer
luxer1.on("ready", () => {
    let url = config.ServerURL // URL
    let guild = luxer1.guilds.cache.get(config.Guild) // Sunucu Guild
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${luxer1.token}` }
        }).catch(() => {
            console.log("Url Gelmedi AMK!")
        })
    }, 1350)
})
// Luxer
luxer1.login(config.Bot1)
////////////////////////////////////////////////////////////////
// Luxer
// Luxer
luxer2.on("ready", () => {
    luxer2.user.setActivity(config.BotOynuyor);


    console.log(luxer2.user.tag)
})
// Luxer
// Luxer
luxer2.on("ready", () => {
    let url = config.ServerURL // URL
    let guild = luxer2.guilds.cache.get(config.Guild) // Sunucu Guild
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${luxer2.token}` }
        }).catch(() => {
            console.log("Url Gelmedi AMK!")
        })
    }, 1350)
})
// Luxer
luxer2.login(config.Bot2)
////////////////////////////////////////////////////////////////
// Luxer
// Luxer
luxer3.on("ready", () => {
    luxer3.user.setActivity(config.BotOynuyor);


    console.log(luxer3.user.tag)
})
// Luxer
// Luxer
luxer3.on("ready", () => {
    let url = config.ServerURL // URL
    let guild = luxer3.guilds.cache.get(config.Guild) // Sunucu Guild
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${luxer3.token}` }
        }).catch(() => {
            console.log("Url Gelmedi AMK!")
        })
    }, 1350)
})
// Luxer
// Luxer
luxer3.login(config.Bot3)
////////////////////////////////////////////////////////////////


luxer4.on("ready", () => {
    luxer4.user.setActivity(config.BotOynuyor);


    console.log(luxer4.user.tag)
})
// Luxer
// Luxer
luxer4.on("ready", () => {
    let url = config.ServerURL // URL
    let guild = luxer4.guilds.cache.get(config.Guild) // Sunucu Guild
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${luxer4.token}` }
        }).catch(() => {
            console.log("Url Gelmedi AMK!")
        })
    }, 1350)
})
// Luxer
// Luxer
luxer4.login(config.Bot4)
////////////////////////////////////////////////////////////////

luxer5.on("ready", () => {
    luxer5.user.setActivity(config.BotOynuyor);


    console.log(luxer5.user.tag)
})
// Luxer
luxer5.on("ready", () => {
    let url = config.ServerURL // URL
    let guild = luxer5.guilds.cache.get(config.Guild) // Sunucu Guild
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${luxer5.token}` }
        }).catch(() => {
            console.log("Url Gelmedi AMK!")
        })
    }, 1350)
})
// Luxer
luxer5.login(config.Bot5)
////////////////////////////////////////////////////////////////

luxer6.on("ready", () => {
    luxer6.user.setActivity(config.BotOynuyor);


    console.log(luxer6.user.tag)
})
// Luxer
// Luxer
luxer6.on("ready", () => {
    let url = config.ServerURL // URL
    let guild = luxer6.guilds.cache.get(config.Guild) // Sunucu Guild
    setInterval(() => {
        if (guild.vanityURLCode == url) return
        axios({
            method: "patch",
            url: `https://discord.com/api/v6/guilds/887281354113425428/vanity-url`,
            data: { code: url },
            headers: { authorization: `Bot ${luxer6.token}` }
        }).catch(() => {
            console.log("Url Gelmedi AMK!")
        })
    }, 1350)
})
// Luxer
luxer6.login(config.Bot6)
////////////////////////////////////////////////////////////////
// Luxer
// Luxer
// Luxer
// Luxer