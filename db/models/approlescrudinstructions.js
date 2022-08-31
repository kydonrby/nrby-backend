
import { Schema, model } from 'mongoose';
            
const AppRolesCrudInstructionsSchema = new Schema(
  {
    "crud_instruction_id": {
        "type": "String",
        "allowNull": false
    },
    "app_role_id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('AppRolesCrudInstructions', AppRolesCrudInstructionsSchema);