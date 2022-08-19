import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    user_id: {  type: Schema.Types.ObjectId, index: true, required: true, auto: true },
    username: { type: String, required: true },
    nrby_version: { type: String },
    os_type: { type: String },
    os_version: { type: String },
    model: { type: String },
    carrier: { type: String },
    last_lat: { type: String },
    last_lon: { type: String },
    last_check_in: { type: Date },
    app_role_name: { type: String },
  },
  {
    timestamps: false,
  }
);

export default model('User', UserSchema);
