
import { Schema, model } from 'mongoose';
            
const TagCustomersSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "tag_id": {
        "type": "String"
    },
    "owner_id": {
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

export default model('TagCustomers', TagCustomersSchema);