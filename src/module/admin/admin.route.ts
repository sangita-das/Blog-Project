// src/modules/admin/admin.route.ts
import express from 'express';
import AdminController from './admin.controller';

const adminRouter = express.Router();

adminRouter.get('/:id', AdminController.getAdminById);
adminRouter.post('/', AdminController.createAdmin);

export default adminRouter;
