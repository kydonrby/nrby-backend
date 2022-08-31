
import { Schema, model } from 'mongoose';
            
const RegionContextRequiredActionsSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "trigger_action": {
        "type": "Number",
        "allowNull": false
    },
    "id": {
        "type": "String",
        "allowNull": false
    },
    "label": {
        "type": "String",
        "allowNull": false
    },
    "action": {
        "type": "String",
        "allowNull": false
    },
    "action_order": {
        "type": "Number",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextRequiredActions', RegionContextRequiredActionsSchema);