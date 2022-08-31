
import { Schema, model } from 'mongoose';
            
const CheckInReportsMobileRegistrationsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "check_in_report_id": {
        "type": "String",
        "allowNull": false
    },
    "mobile_registration_id": {
        "type": "String",
        "allowNull": false
    },
    "check_in_date": {
        "type": "Date"
    },
    "status": {
        "type": "String"
    },
    "check_in_lat": {
        "type": "Number"
    },
    "check_in_lon": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('CheckInReportsMobileRegistrations', CheckInReportsMobileRegistrationsSchema);