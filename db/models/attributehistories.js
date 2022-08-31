
import { Schema, model } from 'mongoose';
            
const AttributeHistoriesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "date_time": {
        "type": "Date",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "region_id": {
        "type": "String",
        "allowNull": false
    },
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_id": {
        "type": "String",
        "allowNull": false
    },
    "attribute_name": {
        "type": "String",
        "allowNull": false
    },
    "attribute_value": {
        "type": "String"
    },
    "attribute_type": {
        "type": "String",
        "allowNull": false
    },
    "attribute_order": {
        "type": "Number"
    },
    "captured_by": {
        "type": "Number"
    },
    "attribute_set_name": {
        "type": "String"
    },
    "region_context_attribute_set_order": {
        "type": "Number"
    }
},
  {
      timestamps: false
  }
);

export default model('AttributeHistories', AttributeHistoriesSchema);