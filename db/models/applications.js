
import { Schema, model } from 'mongoose';
            
const ApplicationsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    },
    "sns_apns_platform_application_arn": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('Applications', ApplicationsSchema);