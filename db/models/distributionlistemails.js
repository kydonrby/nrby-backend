
import { Schema, model } from 'mongoose';
            
const DistributionListEmailsSchema = new Schema(
  {
    "distribution_list_id": {
        "type": "String",
        "allowNull": false
    },
    "email": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('DistributionListEmails', DistributionListEmailsSchema);