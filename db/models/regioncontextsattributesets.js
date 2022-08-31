
import { Schema, model } from 'mongoose';
            
const RegionContextsAttributeSetsSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_set_id": {
        "type": "String",
        "allowNull": false
    },
    "optional": {
        "type": "Boolean",
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

export default model('RegionContextsAttributeSets', RegionContextsAttributeSetsSchema);