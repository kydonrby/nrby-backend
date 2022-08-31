
import { Schema, model } from 'mongoose';
            
const UserPreferencesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String"
    },
    "initial": {
        "type": "Boolean"
    },
    "user_id": {
        "type": "Number",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "prefType": {
        "type": "String"
    },
    "configuration": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('UserPreferences', UserPreferencesSchema);