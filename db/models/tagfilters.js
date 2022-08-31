
import { Schema, model } from 'mongoose';
            
const TagFiltersSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "tag_id": {
        "type": "String"
    },
    "filter_id": {
        "type": "String"
    },
    "filter_customer_id": {
        "type": "String"
    },
    "user_id": {
        "type": "Number"
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

export default model('TagFilters', TagFiltersSchema);