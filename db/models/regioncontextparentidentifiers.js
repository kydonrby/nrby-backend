
import { Schema, model } from 'mongoose';
            
const RegionContextParentIdentifiersSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextParentIdentifiers', RegionContextParentIdentifiersSchema);