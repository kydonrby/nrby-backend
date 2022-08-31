
import { Schema, model } from 'mongoose';
            
const BooleanExpressionActionValuesSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "boolean_expression_id": {
        "type": "String",
        "allowNull": false
    },
    "action_id": {
        "type": "String",
        "allowNull": false
    },
    "order": {
        "type": "Number",
        "allowNull": false
    },
    "data1": {
        "type": "String"
    },
    "data2": {
        "type": "String"
    },
    "data3": {
        "type": "String"
    },
    "data4": {
        "type": "String"
    },
    "data5": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('BooleanExpressionActionValues', BooleanExpressionActionValuesSchema);