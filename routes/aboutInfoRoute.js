import express from 'express';
import { getMaps,getMap, addMap, updateMap, deleteMap } from '../controllers/aboutInfoController.js';

const aboutInfoRoute = express.Router();

import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

aboutInfoRoute.get('/', getMaps);
aboutInfoRoute.get('/:id', getMap);

aboutInfoRoute.post('/',verifyToken,isGeneralAdmin, addMap);
aboutInfoRoute.put('/:id',verifyToken,isGeneralAdmin, updateMap);
aboutInfoRoute.delete('/:id',verifyToken,isGeneralAdmin, deleteMap);

export default aboutInfoRoute;
