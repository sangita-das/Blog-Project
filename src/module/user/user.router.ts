/* import express from 'express';
import UserController from './user.controller';
import verifyToken from '../../middlewares/verifyToken';

const router = express.Router();

router.get('/:id', verifyToken, UserController.getUserById);
router.patch('/:id', verifyToken, UserController.updateUser); */


import { Router } from 'express'
import UserController from './user.controller';
import { UserValidation } from './user.validation'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constants'

const router = Router()

router.post('/create-admin', validateRequest(UserValidation.userValidationSchema), UserController.createUser)
router.get('/:userId', UserController.getSingleUser)
router.put('/:userId', UserController.updateUser)
router.delete('/:userId', UserController.deleteUser)
router.get('/',auth(USER_ROLE.admin, USER_ROLE.user), userController.getUser)



export default router;


