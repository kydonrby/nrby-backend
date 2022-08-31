
import { Schema, model } from 'mongoose';
            
const ModelPermissionsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "model_id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "permissions": [
        {
            "type": "Number"
        }
    ]
},
  {
      timestamps: false
  }
);

export default model('ModelPermissions', ModelPermissionsSchema);