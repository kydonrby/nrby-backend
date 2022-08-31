
import { Schema, model } from 'mongoose';
            
const TimeToLiveSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "model_id": {
        "type": "String"
    },
    "expire_at": {
        "type": "Date"
    },
    "model_clazz": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('TimeToLive', TimeToLiveSchema);