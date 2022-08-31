
import { Schema, model } from 'mongoose';
            
const UserMessagesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "message_id": {
        "type": "String",
        "allowNull": false
    },
    "to": {
        "type": "Number",
        "allowNull": false
    },
    "sent_at": {
        "type": "Date",
        "allowNull": false
    },
    "received": {
        "type": "Boolean",
        "allowNull": false
    },
    "received_at": {
        "type": "Date"
    },
    "read": {
        "type": "Boolean",
        "allowNull": false
    },
    "read_at": {
        "type": "Date"
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    }
},
  {
      timestamps: false
  }
);

export default model('UserMessages', UserMessagesSchema);