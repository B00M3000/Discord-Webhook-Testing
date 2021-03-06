import fetch from 'node-fetch';

interface DiscordWebhookEmbedImage {
  url: string;
}

interface DiscordWebhookEmbed {
  title?: string;
  url?: string;
  description?: string;
  color?: string;
  image?: DiscordWebhookEmbedImage;
}

interface DiscordWebhookBody {
  username?: string;
  avatar_url?: string;
  content?: string;
  embeds?: DiscordWebhookEmbed[];
}

interface DiscordWebhookRequestHeader {
  "Content-Type"?: string
}

interface DiscordWebhookRequest {
  method: string;
  header: DiscordWebhookRequestHeader;
  body: string;
}

export default class DiscordWebhookHandler {
  constructor(url: string){
    this.url = url
  }
  
  readonly url: string
  
  send(body: DiscordWebhookBody): number {
  
    let header: DiscordWebhookRequestHeader = {
      "Content-Type": "application/json"
    }
    
    let data: DiscordWebhookRequest = { 
      method: "POST", 
      header,
      body: JSON.stringify(body),
    }
    
    fetch(this.url, data)
    
    return 200
  }
  
  sendMessage(message: string): number {
  
    let header: DiscordWebhookRequestHeader = {
      "Content-Type": "application/json"
    }
    
    let body: DiscordWebhookBody = {
      content: message
    }
    
    return this.send(body)
  }
  
  sendEmbed(embed: DiscordWebhookEmbed): number {
  
    let header: DiscordWebhookRequestHeader = {
      "Content-Type": "application/json"
    }
    
    let body: DiscordWebhookBody = {
      embeds: [ embed ]
    }
    
    return this.send(body)
  }
}