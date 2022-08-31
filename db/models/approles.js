
import { Schema, model } from 'mongoose';
            
const AppRolesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String"
    },
    "created_at": {
        "type": "Date"
    },
    "updated_at": {
        "type": "Date"
    },
    "created_by": {
        "type": "Number"
    },
    "updated_by": {
        "type": "Number"
    },
    "customer_id": {
        "type": "String"
    },
    "data": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        }
    },
    "is_dashboard_role": {
        "type": "Boolean",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('AppRoles', AppRolesSchema);