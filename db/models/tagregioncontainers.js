
import { Schema, model } from 'mongoose';
            
const TagRegionContainersSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "tag_id": {
        "type": "String"
    },
    "region_container_id": {
        "type": "String"
    },
    "user_id": {
        "type": "Number"
    },
    "customer_id": {
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

export default model('TagRegionContainers', TagRegionContainersSchema);