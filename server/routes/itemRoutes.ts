import { Router } from 'express';
import controller from '../controllers/itemController';

const router = Router();

router.post('/', controller.createItem);
router.get('/', controller.getAllItems);
router.get('/:id', controller.getItemById);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);

export default router;
