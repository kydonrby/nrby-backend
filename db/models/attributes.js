
import { Schema, model } from 'mongoose';
            
const AttributesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "type": {
        "type": "String",
        "allowNull": false
    },
    "options": [
        {
            "type": "String"
        }
    ],
    "required": {
        "type": "Boolean"
    },
    "default_value": {
        "type": "String"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "persist": {
        "type": "Boolean",
        "allowNull": false
    },
    "system": {
        "type": "Boolean",
        "allowNull": false
    },
    "is_parent_identifier": {
        "type": "Boolean",
        "allowNull": false
    },
    "required_before_complete": {
        "type": "Boolean",
        "allowNull": false
    },
    "inheritable": {
        "type": "Boolean",
        "allowNull": false
    },
    "generate_unique_value": {
        "type": "Boolean"
    },
    "read_only": {
        "type": "Boolean"
    }
},
  {
      timestamps: false
  }
);

export default model('Attributes', AttributesSchema);