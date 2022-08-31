
import { Schema, model } from 'mongoose';
            
const AttributeValuesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "model": {
        "type": "String",
        "allowNull": false
    },
    "key": {
        "type": "String",
        "allowNull": false
    },
    "value": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('AttributeValues', AttributeValuesSchema);