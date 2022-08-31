
import { Schema, model } from 'mongoose';
            
const SmartSpacesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "pretty_name": {
        "type": "String"
    },
    "description": {
        "type": "String"
    },
    "clazz": {
        "type": "String",
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
    "created_by": {
        "type": "Number",
        "allowNull": false
    },
    "updated_by": {
        "type": "Number",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('SmartSpaces', SmartSpacesSchema);