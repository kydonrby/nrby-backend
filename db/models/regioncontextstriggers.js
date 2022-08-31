
import { Schema, model } from 'mongoose';
            
const RegionContextsTriggersSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "trigger_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextsTriggers', RegionContextsTriggersSchema);