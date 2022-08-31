
import { Schema, model } from 'mongoose';
            
const AttributeSetsAttributesSchema = new Schema(
  {
    "attribute_set_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_id": {
        "type": "String",
        "allowNull": false
    },
    "order": {
        "type": "Number",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('AttributeSetsAttributes', AttributeSetsAttributesSchema);