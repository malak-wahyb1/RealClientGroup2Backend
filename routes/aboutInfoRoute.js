import express from 'express';
import {getLink, updateLink, getMaps, addMap, updateMap, deleteMap } from '../controllers/aboutInfoController.js';

const aboutInfoRoute = express.Router();

// Routes for links
// aboutInfoRoute.post('/links', createLink);
aboutInfoRoute.get('/links/:id', getLink);
aboutInfoRoute.put('/links/:id', updateLink);

// Routes for maps
aboutInfoRoute.get('/maps', getMaps);
aboutInfoRoute.post('/maps', addMap);
aboutInfoRoute.put('/maps/:mapId', updateMap);
aboutInfoRoute.delete('/maps/:mapId', deleteMap);

export default aboutInfoRoute;
