
import { Schema, model } from 'mongoose';
            
const ProblemReportMetadataSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "email": {
        "type": "String",
        "allowNull": false
    },
    "device_type": {
        "type": "String",
        "allowNull": false
    },
    "app_information": {
        "type": "String",
        "allowNull": false
    },
    "problem_description": {
        "type": "String"
    },
    "files_url": {
        "type": "String",
        "allowNull": false
    },
    "submitted_at": {
        "type": "Date",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('ProblemReportMetadata', ProblemReportMetadataSchema);