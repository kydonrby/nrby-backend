
import { Schema, model } from 'mongoose';
            
const CheckInReportsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "title": {
        "type": "String",
        "allowNull": false
    },
    "message": {
        "type": "String"
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "region_id": {
        "type": "String"
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date"
    },
    "deleted_at": {
        "type": "Date"
    },
    "created_by": {
        "type": "Number",
        "allowNull": false
    },
    "updated_by": {
        "type": "Number"
    },
    "deleted_by": {
        "type": "Number"
    },
    "criteria": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        }
    }
},
  {
      timestamps: false
  }
);

export default model('CheckInReports', CheckInReportsSchema);