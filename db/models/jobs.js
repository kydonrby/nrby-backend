
import { Schema, model } from 'mongoose';
            
const JobsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "type": {
        "type": "String",
        "allowNull": false
    },
    "progress": {
        "type": "String"
    },
    "status": {
        "type": "String",
        "allowNull": false
    },
    "notes": {
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
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "stopped_at": {
        "type": "Date"
    },
    "deleted_at": {
        "type": "Date"
    },
    "created_by": {
        "type": "Number",
        "allowNull": false
    },
    "stopped_by": {
        "type": "Number"
    },
    "deleted_by": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('Jobs', JobsSchema);