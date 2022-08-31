
import { Schema, model } from 'mongoose';
            
const UsersSchema = new Schema(
  {
    "name": {
        "type": "String",
        "allowNull": false
    },
    "email": {
        "type": "String",
        "allowNull": false
    },
    "encrypted_password": {
        "type": "String",
        "allowNull": false
    },
    "reset_password_token": {
        "type": "String"
    },
    "reset_password_sent_at": {
        "type": "Date"
    },
    "remember_created_at": {
        "type": "Date"
    },
    "sign_in_count": {
        "type": "Number"
    },
    "current_sign_in_at": {
        "type": "Date"
    },
    "last_sign_in_at": {
        "type": "Date"
    },
    "current_sign_in_ip": {
        "type": "String"
    },
    "last_sign_in_ip": {
        "type": "String"
    },
    "confirmation_token": {
        "type": "String"
    },
    "confirmed_at": {
        "type": "Date"
    },
    "confirmation_sent_at": {
        "type": "Date"
    },
    "unconfirmed_email": {
        "type": "String"
    },
    "created_at": {
        "type": "Date",
        "allowNull": false
    },
    "updated_at": {
        "type": "Date",
        "allowNull": false
    },
    "old_customer_id": {
        "type": "Number"
    },
    "id": {
        "type": "Number",
        "allowNull": false
    },
    "password_salt": {
        "type": "String"
    },
    "roles_mask": {
        "type": "Number",
        "allowNull": false
    },
    "deleted": {
        "type": "Boolean",
        "allowNull": false
    },
    "deleted_time": {
        "type": "Date"
    },
    "customer_id": {
        "type": "String",
        "allowNull": false
    },
    "reset_password_next_login": {
        "type": "Boolean",
        "allowNull": false
    },
    "enabled": {
        "type": "Boolean",
        "allowNull": false
    },
    "updated_by": {
        "type": "Number"
    },
    "deleted_by": {
        "type": "Number"
    },
    "created_by": {
        "type": "Number"
    },
    "password_changed_at": {
        "type": "Date"
    },
    "old_passwords": [
        {
            "type": "String"
        }
    ],
    "api_key": {
        "type": "String",
        "allowNull": false
    },
    "validation_key": {
        "type": "String"
    },
    "validated": {
        "type": "Boolean"
    },
    "validated_at": {
        "type": "Date"
    },
    "validation_sent_at": {
        "type": "Date"
    },
    "entity_id": {
        "type": "String"
    },
    "supervisor_email": {
        "type": "String"
    },
    "supervisor_phone_number": {
        "type": "String"
    },
    "encrypted_otp_secret": {
        "type": "String"
    },
    "encrypted_otp_secret_iv": {
        "type": "String"
    },
    "encrypted_otp_secret_salt": {
        "type": "String"
    },
    "consumed_timestep": {
        "type": "Number"
    },
    "otp_required_for_login": {
        "type": "Boolean",
        "allowNull": false
    },
    "failed_attempts": {
        "type": "Number",
        "allowNull": false
    },
    "locked_at": {
        "type": "Date"
    },
    "unlock_token": {
        "type": "String"
    },
    "otp_backup_codes": [
        {
            "type": "String"
        }
    ]
},
  {
      timestamps: false
  }
);

export default model('Users', UsersSchema);