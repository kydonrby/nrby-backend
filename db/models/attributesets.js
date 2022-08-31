
import { Schema, model } from 'mongoose';
            
const AttributeSetsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
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
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('AttributeSets', AttributeSetsSchema);