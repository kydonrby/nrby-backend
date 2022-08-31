
import { Schema, model } from 'mongoose';
            
const TagRegionContextsSchema = new Schema(
  {
    "tag_id": {
        "type": "String",
        "allowNull": false
    },
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "tag_name": {
        "type": "String",
        "allowNull": false
    },
    "user_id": {
        "type": "Number"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('TagRegionContexts', TagRegionContextsSchema);