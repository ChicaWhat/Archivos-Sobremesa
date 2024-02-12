import express from 'express';

import { 
    getPostControllers, 
    newPostController 
    } 
    from '../controllers/posts/index.js';

const router = express.Router();

router.post('/messages', newPostController);
router.get('/messages/:messageId', getPostControllers);

export default router;