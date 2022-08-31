
import { Schema, model } from 'mongoose';
            
const CustomerPartnersSchema = new Schema(
  {
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "partner_id": {
        "type": "String",
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

export default model('CustomerPartners', CustomerPartnersSchema);