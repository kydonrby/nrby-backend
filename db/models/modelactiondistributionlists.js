
import { Schema, model } from 'mongoose';
            
const ModelActionDistributionListsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "model_id": {
        "type": "String"
    },
    "action": {
        "type": "Number",
        "allowNull": false
    },
    "distribution_list_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('ModelActionDistributionLists', ModelActionDistributionListsSchema);