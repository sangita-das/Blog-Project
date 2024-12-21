import express from 'express';
import AuthController from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import authValidation from './auth.validation';

const router = express.Router();

router.post('/register', validateRequest(authValidation.register), AuthController.register);
router.post('/login', validateRequest(authValidation.login), AuthController.login);

export default router;