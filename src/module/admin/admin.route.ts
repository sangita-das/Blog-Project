// src/modules/admin/admin.route.ts
import express from 'express';
import AdminController from './admin.controller';

const router = express.Router();

router.get('/:id', AdminController.getAdminById);
router.post('/', AdminController.createAdmin);

export default router;
