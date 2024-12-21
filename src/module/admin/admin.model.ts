// src/modules/admin/admin.model.ts
import mongoose, { Schema } from 'mongoose';

const AdminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;
