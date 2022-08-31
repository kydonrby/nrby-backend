
import { Schema, model } from 'mongoose';
            
const RegionContextTriggerActionValuesSchema = new Schema(
  {
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "trigger_id": {
        "type": "String",
        "allowNull": false
    },
    "action_id": {
        "type": "String",
        "allowNull": false
    },
    "data1": {
        "type": "String"
    },
    "data2": {
        "type": "String"
    },
    "data3": {
        "type": "String"
    },
    "data4": {
        "type": "String"
    },
    "data5": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextTriggerActionValues', RegionContextTriggerActionValuesSchema);