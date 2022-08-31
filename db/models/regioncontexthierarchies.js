
import { Schema, model } from 'mongoose';
            
const RegionContextHierarchiesSchema = new Schema(
  {
    "parent_id": {
        "type": "String",
        "allowNull": false
    },
    "child_id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContextHierarchies', RegionContextHierarchiesSchema);