
import { Schema, model } from 'mongoose';
            
const RegionContextsSchema = new Schema(
  {
    "id": {
        "type": "String",
        "allowNull": false
    },
    "name": {
        "type": "String",
        "allowNull": false
    },
    "icon": {
        "type": "String",
        "allowNull": false
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "export": {
        "type": "Boolean",
        "allowNull": false
    },
    "default_radius": {
        "type": "Number"
    },
    "alert": {
        "type": "Boolean",
        "allowNull": false
    },
    "keep_attribute_history": {
        "type": "Boolean"
    },
    "messages": {
        "key": {
            "type": "String"
        },
        "value": {
            "type": "String"
        }
    },
    "is_a_parent": {
        "type": "Boolean",
        "allowNull": false
    },
    "is_a_child": {
        "type": "Boolean",
        "allowNull": false
    },
    "move_children": {
        "type": "Boolean",
        "allowNull": false
    },
    "hide_children": {
        "type": "Boolean",
        "allowNull": false
    },
    "work_complete_hidden": {
        "type": "Boolean",
        "allowNull": false
    },
    "work_complete_label": {
        "type": "String"
    },
    "live_form_url": {
        "type": "String"
    }
},
  {
      timestamps: false
  }
);

export default model('RegionContexts', RegionContextsSchema);