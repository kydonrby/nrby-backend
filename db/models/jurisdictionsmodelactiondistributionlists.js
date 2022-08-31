
import { Schema, model } from 'mongoose';
            
const JurisdictionsModelActionDistributionListsSchema = new Schema(
  {
    "model_action_distribution_list_id": {
        "type": "String",
        "allowNull": false
    },
    "jurisdiction_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('JurisdictionsModelActionDistributionLists', JurisdictionsModelActionDistributionListsSchema);