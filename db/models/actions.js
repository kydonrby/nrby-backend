
import { Schema, model } from 'mongoose';
            
const ActionsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "type": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "description": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('Actions', ActionsSchema);