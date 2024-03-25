import express from 'express';
import MyUserController from '../controlles/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUSerRequest } from '../middleware/validation';

const router = express.Router();

router.get('/', jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post('/', jwtCheck, MyUserController.createCurrentUser);
router.put('/', jwtCheck, jwtParse, validateMyUSerRequest, MyUserController.updateCurrentUser);

export default router;