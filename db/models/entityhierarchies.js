
import { Schema, model } from 'mongoose';
            
const EntityHierarchiesSchema = new Schema(
  {
    "parent_id": {
        "type": "String",
        "allowNull": false
    },
    "parent_type": {
        "type": "Number",
        "allowNull": false
    },
    "child_id": {
        "type": "String",
        "allowNull": false
    },
    "child_type": {
        "type": "Number",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('EntityHierarchies', EntityHierarchiesSchema);