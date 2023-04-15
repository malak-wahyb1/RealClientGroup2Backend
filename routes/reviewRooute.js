import express from 'express';
import {createReview,getReview, updateReview,getReviews,deleteReview } from '../controllers/reviewController.js';

const reviewRoute = express.Router();
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

reviewRoute.post('/',verifyToken, createReview);
reviewRoute.get('/:id',verifyToken,isGeneralAdmin, getReview);
reviewRoute.get('/',verifyToken,isGeneralAdmin, getReviews);

reviewRoute.put('/:id',verifyToken,isGeneralAdmin, updateReview);
reviewRoute.delete('/:id',verifyToken,isGeneralAdmin, deleteReview);


export default reviewRoute;
