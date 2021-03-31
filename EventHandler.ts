import DiscordWebhookHandler from "./DiscordWebhookHandler.ts"

interface Event {
  triggeredAt: string
}

interface SchematicEvent extends Event{
  schematicId: string;
  schematicName: string;
}

interface CreateSchematicEvent extends SchematicEvent{

}

interface DeleteSchematicEvent extends SchematicEvent{
  reason: string;
}

interface EditSchematicEvent extends SchematicEvent{
  changes: string;
}

class EventHandler {
  constructor(webhookHandler: DiscordWebhookHandler; websiteURL: string){
    this.webhookHandler = webhookHandler
    this.websiteURL = websiteURL
  }
  
  webhookHandler: DiscordWebhookHandler
  websiteURL: string
  readonly events: Event[]
  
  createSchematic(event: CreateSchematicEvent){
    webhookHandler.sendEmbed({
      color: "green",
      title: `New Schematic: ${event.schematicName}`,
      url: `${this.websiteURL}/schematics/${event.schematicId}`
    })
  }
  
  editSchematic(event: EditSchematicEvent){
    webhookHandler.sendEmbed({
      color: "yellow",
      title: `Changed: ${event.schematicName}`,
      description: event.changes,
      url: `${this.websiteURL}/schematics/${event.schematicId}`
    })
  }
  
  deleteSchematic(event: DeleteSchematicEvent){
    webhookHandler.sendEmbed({
      color: "red",
      title: `Deleted: ${event.schematicName}`,
      description: event.reason,
      url: `${this.websiteURL}/schematics/${event.schematicId}`
    })
  }
}