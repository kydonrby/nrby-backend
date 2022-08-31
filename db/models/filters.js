
import { Schema, model } from 'mongoose';
            
const FiltersSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String"
    },
    "owner_id": {
        "type": "Number"
    },
    "parent_filter_id": {
        "type": "String"
    },
    "created_by": {
        "type": "Number"
    },
    "updated_by": {
        "type": "Number"
    },
    "deleted_by": {
        "type": "Number"
    },
    "created_at": {
        "type": "Date"
    },
    "updated_at": {
        "type": "Date"
    },
    "deleted_time": {
        "type": "Date"
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "enabled": {
        "type": "Boolean",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('Filters', FiltersSchema);