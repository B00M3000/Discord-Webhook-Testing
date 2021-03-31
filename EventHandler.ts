import DiscordWebhookHandler from "./DiscordWebhookHandler.ts"

interface Event {
  triggeredAt: string
}

interface SchematicEvent extends Event{
  schematicId: string;
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
  constructor(webhookHandler: DiscordWebhookHandler){
    this.webhookHandler = webhookHandler
  }
  
  readonly webhookHandler: DiscordWebhookHandler
  
  readonly events: Event
  
  createSchematic(event: CreateSchematicEvent){
    webhookHandler.send({
      embeds: [
        
      ]
    })
  }
  
  editSchematic(event: EditSchematicEvent){
    
  }
  
  deleteSchematic(event: DeleteSchematicEvent){
    
  }
}