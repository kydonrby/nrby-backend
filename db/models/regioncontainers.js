
import { Schema, model } from 'mongoose';
            
const RegionContainersSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    },
    "region_container_id": {
        "type": "String"
    },
    "old_customer_id": {
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
    "created_by": {
        "type": "Number"
    },
    "updated_by": {
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

export default model('RegionContainers', RegionContainersSchema);