
import { Schema, model } from 'mongoose';
            
const CrudInstructionsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "when": {
        "type": "Number",
        "allowNull": false
    },
    "action": {
        "type": "Number",
        "allowNull": false
    },
    "priority": {
        "type": "Number",
        "allowNull": false
    },
    "file_url": {
        "type": "String",
        "allowNull": false
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    },
    "region_context_id": {
        "type": "String"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "created_by": {
        "type": "Number",
        "allowNull": false
    },
    "updated_by": {
        "type": "Number",
        "allowNull": false
    },
    "deleted_by": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('CrudInstructions', CrudInstructionsSchema);