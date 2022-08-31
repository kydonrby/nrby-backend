
import { Schema, model } from 'mongoose';
            
const RegionContextMirrorsSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "origin_customer_id": {
        "type": "String",
        "allowNull": false
    },
    "mirror_customer_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextMirrors', RegionContextMirrorsSchema);