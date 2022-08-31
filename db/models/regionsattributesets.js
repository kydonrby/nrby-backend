
import { Schema, model } from 'mongoose';
            
const RegionsAttributeSetsSchema = new Schema(
  {
    "region_id": {
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
    "enabled": {
        "type": "Boolean",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionsAttributeSets', RegionsAttributeSetsSchema);