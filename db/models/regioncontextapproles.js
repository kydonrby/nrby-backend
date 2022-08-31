
import { Schema, model } from 'mongoose';
            
const RegionContextAppRolesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "parent_id": {
        "type": "String"
    },
    "region_context_order": {
        "type": "Number",
        "allowNull": false
    },
    "app_role_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextAppRoles', RegionContextAppRolesSchema);