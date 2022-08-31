
import { Schema, model } from 'mongoose';
            
const BeaconsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "proximity": {
        "type": "String",
        "allowNull": false
    },
    "major": {
        "type": "Number"
    },
    "minor": {
        "type": "Number"
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    },
    "region_id": {
        "type": "String",
        "allowNull": false
    },
    "old_customer_id": {
        "type": "Number"
    },
    "lat": {
        "type": "Number"
    },
    "lon": {
        "type": "Number"
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "deleted_by": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('Beacons', BeaconsSchema);