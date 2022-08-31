
import { Schema, model } from 'mongoose';
            
const CustomersSchema = new Schema(
  {
    "old_id": {
        "type": "Number",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "api_key": {
        "type": "String",
        "allowNull": false
    },
    "contact_name": {
        "type": "String",
        "allowNull": false
    },
    "contact_email": {
        "type": "String",
        "allowNull": false
    },
    "contact_phone": {
        "type": "String"
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    },
    "id": {
        "type": "String",
        "allowNull": false
    },
    "settings": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        }
    },
    "deleted_by": {
        "type": "Number"
    },
    "enabled": {
        "type": "Boolean",
        "allowNull": false
    },
    "pin": {
        "type": "Number"
    },
    "email_domains": [
        {
            "type": "String"
        }
    ],
    "sns_topic_arn": {
        "type": "String"
    },
    "allowed_asset_extensions": [
        {
            "type": "String"
        }
    ]
},
  {
      timestamps: false
  }
);

export default model('Customers', CustomersSchema);