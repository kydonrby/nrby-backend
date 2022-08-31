
import { Schema, model } from 'mongoose';
            
const FlashMessagesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "priority": {
        "type": "Number",
        "allowNull": false
    },
    "message": {
        "type": "String",
        "allowNull": false
    },
    "acknowledged": {
        "type": "Boolean",
        "allowNull": false
    },
    "acknowledged_at": {
        "type": "Date"
    },
    "created_at": {
        "type": "Date"
    },
    "acknowledged_by": {
        "type": "Number"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "model_id": {
        "type": "String"
    },
    "model_clazz": {
        "type": "String"
    },
    "notify": {
        "type": "Number",
        "allowNull": false
    },
    "user_id": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('FlashMessages', FlashMessagesSchema);