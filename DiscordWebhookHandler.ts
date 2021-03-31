import fetch from 'node-fetch'

interface DiscordWebhookEmbedImage {
  url: string
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
  header: PostRequestHeader;
  body: string;
}

export class DiscordWebhookHandler {
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
      body: string = JSON.stringify(body),
    }
    
    fetch(this.url, data)
  }
  
  sendMessage(message: DiscordWebhookBody): number {
  
    let header: DiscordWebhookRequestHeader = {
      "Content-Type": "application/json"
    }
    
    let data: DiscordWebhookRequest = { 
      method: "POST", 
      header,
      body: string = JSON.stringify(body),
    }
    
    fetch(this.url, data)
  }
  
  send(body: DiscordWebhookBody): number {
  
    let header: DiscordWebhookRequestHeader = {
      "Content-Type": "application/json"
    }
    
    let data: DiscordWebhookRequest = { 
      method: "POST", 
      header,
      body: string = JSON.stringify(body),
    }
    
    fetch(this.url, data)
  }
}