
import { Schema, model } from 'mongoose';
            
const RegionContextAttributesSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_order": {
        "type": "Number"
    },
    "user_id": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextAttributes', RegionContextAttributesSchema);