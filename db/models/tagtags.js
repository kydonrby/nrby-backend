
import { Schema, model } from 'mongoose';
            
const TagTagsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "tag_id": {
        "type": "String"
    },
    "tagged_with_id": {
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
    },
    "tagged_with_name": {
        "type": "String"
    },
    "tagged_order": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('TagTags', TagTagsSchema);