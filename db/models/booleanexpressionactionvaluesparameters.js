
import { Schema, model } from 'mongoose';
            
const BooleanExpressionActionValuesParametersSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "boolean_expression_action_value_id": {
        "type": "String",
        "allowNull": false
    },
    "key": {
        "type": "String"
    },
    "value": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('BooleanExpressionActionValuesParameters', BooleanExpressionActionValuesParametersSchema);