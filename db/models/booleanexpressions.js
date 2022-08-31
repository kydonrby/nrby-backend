
import { Schema, model } from 'mongoose';
            
const BooleanExpressionsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "region_context_id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "expression": {
        "type": "String",
        "allowNull": false
    },
    "order": {
        "type": "Number",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('BooleanExpressions', BooleanExpressionsSchema);