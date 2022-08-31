
import { Schema, model } from 'mongoose';
            
const CustomViewsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "configuration": {
        "type": "String",
        "allowNull": false
    },
    "is_pinned": {
        "type": "Boolean",
        "allowNull": false
    },
    "view": {
        "type": "String",
        "allowNull": false
    },
    "is_default": {
        "type": "Boolean",
        "allowNull": false
    },
    "user_id": {
        "type": "Number",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('CustomViews', CustomViewsSchema);