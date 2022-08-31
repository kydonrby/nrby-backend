
import { Schema, model } from 'mongoose';
            
const TagAppRolesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "tag_id": {
        "type": "String"
    },
    "app_role_id": {
        "type": "String"
    },
    "owner_id": {
        "type": "Number"
    },
    "app_role_customer_id": {
        "type": "String",
        "allowNull": false
    },
    "tag_name": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('TagAppRoles', TagAppRolesSchema);