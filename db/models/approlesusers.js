
import { Schema, model } from 'mongoose';
            
const AppRolesUsersSchema = new Schema(
  {
    "app_role_id": {
        "type": "String"
    },
    "user_id": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('AppRolesUsers', AppRolesUsersSchema);