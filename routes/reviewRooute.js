import express from 'express';
import {createReview,getReview, updateReview, } from '../controllers/reviewController.js';

const reviewRoute = express.Router();

// Routes for reviews
reviewRoute.post('/review', createReview);
reviewRoute.get('/review/:id', getReview);
reviewRoute.put('/review/:id', updateReview);
export default reviewRoute;
