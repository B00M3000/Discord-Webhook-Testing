import DiscordWebhookHandler from "./DiscordWebhookHandler.ts"

const url: string = "https://discord.com/api/webhooks/826600067199926274/X60ThoHVd1M-x5A-A3QbEMXw1gSCaGf5qFET9suLc4MHsQKsGvEvkqLKPYXmgVRQrDxG"

const handler: DiscordWebhookHandler = new DiscordWebhookHandler(url)

handler.send({ content: "Hello" })