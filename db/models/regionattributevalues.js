
import { Schema, model } from 'mongoose';
            
const RegionAttributeValuesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "region_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_id": {
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

export default model('RegionAttributeValues', RegionAttributeValuesSchema);