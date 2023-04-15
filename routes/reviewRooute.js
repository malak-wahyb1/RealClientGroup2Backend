import express from 'express';
import {createReview,getReview, updateReview,getReviews,deleteReview } from '../controllers/reviewController.js';

const reviewRoute = express.Router();

reviewRoute.post('/', createReview);
reviewRoute.get('/:id', getReview);
reviewRoute.get('/', getReviews);

reviewRoute.put('/:id', updateReview);
reviewRoute.delete('/:id', deleteReview);


export default reviewRoute;
