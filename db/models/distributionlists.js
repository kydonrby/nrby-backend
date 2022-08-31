
import { Schema, model } from 'mongoose';
            
const DistributionListsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String"
    },
    "created_at": {
        "type": "Date"
    },
    "created_by": {
        "type": "Number"
    },
    "updated_at": {
        "type": "Date"
    },
    "updated_by": {
        "type": "Number"
    },
    "deleted_at": {
        "type": "Date"
    },
    "deleted_by": {
        "type": "Number"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "body": {
        "type": "String"
    },
    "subject": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('DistributionLists', DistributionListsSchema);