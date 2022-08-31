
import { Schema, model } from 'mongoose';
            
const TriggersActionsSchema = new Schema(
  {
    "trigger_id": {
        "type": "String",
        "allowNull": false
    },
    "action_id": {
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

export default model('TriggersActions', TriggersActionsSchema);