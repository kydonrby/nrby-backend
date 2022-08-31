
import { Schema, model } from 'mongoose';
            
const TagsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('Tags', TagsSchema);