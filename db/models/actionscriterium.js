
import { Schema, model } from 'mongoose';
            
const ActionsCriteriumSchema = new Schema(
  {
    "action_id": {
        "type": "String",
        "allowNull": false
    },
    "criteria_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('ActionsCriterium', ActionsCriteriumSchema);