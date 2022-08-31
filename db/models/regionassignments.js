
import { Schema, model } from 'mongoose';
            
const RegionAssignmentsSchema = new Schema(
  {
    "region_id": {
        "type": "String",
        "allowNull": false
    },
    "assigned_to": {
        "type": "Number",
        "allowNull": false
    },
    "assigned_by": {
        "type": "Number",
        "allowNull": false
    },
    "assigned_at": {
        "type": "Date",
        "allowNull": false
    },
    "id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionAssignments', RegionAssignmentsSchema);