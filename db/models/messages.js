
import { Schema, model } from 'mongoose';
            
const MessagesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "body": {
        "type": "String"
    },
    "attachment": {
        "type": "String"
    },
    "from": {
        "type": "Number"
    },
    "subject": {
        "type": "String"
    },
    "action": {
        "type": "String"
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('Messages', MessagesSchema);