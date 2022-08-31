
import { Schema, model } from 'mongoose';
            
const AssetsMetadataSchema = new Schema(
  {
    "s3_key": {
        "type": "String",
        "allowNull": false
    },
    "metadata": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        }
    },
    "region_id": {
        "type": "String",
        "allowNull": false
    },
    "size": {
        "type": "Number",
        "allowNull": false
    },
    "last_modified": {
        "type": "Date",
        "allowNull": false
    },
    "created_by": {
        "type": "Number"
    },
    "updated_by": {
        "type": "Number"
    },
    "deleted_by": {
        "type": "Number"
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "content_type": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "id": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('AssetsMetadata', AssetsMetadataSchema);