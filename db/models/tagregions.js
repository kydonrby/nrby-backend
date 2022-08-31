
import { Schema, model } from 'mongoose';
            
const TagRegionsSchema = new Schema(
  {
    "tag_id": {
        "type": "String"
    },
    "user_id": {
        "type": "Number"
    },
    "region_customer_id": {
        "type": "String"
    },
    "region_id": {
        "type": "String"
    },
    "tag_name": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('TagRegions', TagRegionsSchema);