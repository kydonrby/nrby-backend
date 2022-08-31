
import { Schema, model } from 'mongoose';
            
const SchemaMigrationsSchema = new Schema(
  {
    "filename": {
        "type": "String",
        "allowNull": false
    }
},
  {
      timestamps: false
  }
);

export default model('SchemaMigrations', SchemaMigrationsSchema);