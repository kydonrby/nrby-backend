
import { Schema, model } from 'mongoose';
            
const JurisdictionsCrudInstructionsSchema = new Schema(
  {
    "crud_instruction_id": {
        "type": "String",
        "allowNull": false
    },
    "jurisdiction_id": {
        "type": "String",
        "allowNull": false
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

export default model('JurisdictionsCrudInstructions', JurisdictionsCrudInstructionsSchema);