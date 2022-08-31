
import { Schema, model } from 'mongoose';
            
const RegionJurisdictionsSchema = new Schema(
  {
    "region_id": {
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

export default model('RegionJurisdictions', RegionJurisdictionsSchema);