
import { Schema, model } from 'mongoose';
            
const MobileRegistrationsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "cookie": {
        "type": "String",
        "allowNull": false
    },
    "os_type": {
        "type": "String",
        "allowNull": false
    },
    "os_version": {
        "type": "String",
        "allowNull": false
    },
    "model": {
        "type": "String"
    },
    "carrier": {
        "type": "String"
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    },
    "profile": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        },
        "allowNull": false
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    },
    "device_token": {
        "type": "String"
    },
    "device_id": {
        "type": "String"
    },
    "last_lat": {
        "type": "Number"
    },
    "last_lon": {
        "type": "Number"
    },
    "monitoring_radius": {
        "type": "Number"
    },
    "monitoring_regions": [
        {
            "type": "String"
        }
    ],
    "sns_endpoint_arn": {
        "type": "String"
    },
    "application_name": {
        "type": "String"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "versions": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        },
        "allowNull": false
    },
    "user_id": {
        "type": "Number",
        "allowNull": false
    },
    "heartbeat_topic": {
        "type": "String"
    },
    "last_check_in": {
        "type": "Date"
    }
},
  {
      timestamps: false
  }
);

export default model('MobileRegistrations', MobileRegistrationsSchema);