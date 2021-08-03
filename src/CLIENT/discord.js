const { Client } = require("discord.js");

module.exports = class DiscordClient extends Client {
    constructor(ops) {
        super(ops)
    this.prefex = '!'
    }

}