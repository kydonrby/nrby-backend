
import { Schema, model } from 'mongoose';
            
const AppRolesJurisdictionsSchema = new Schema(
  {
    "app_role_id": {
        "type": "String",
        "allowNull": false
    },
    "jurisdiction_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('AppRolesJurisdictions', AppRolesJurisdictionsSchema);