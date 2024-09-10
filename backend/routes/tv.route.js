// import express from 'express';
// import { getTrendingTv, getTvTrailers , getTVDetails, getSimiliarTv, getTvsByCategory} from "../controllers/tv.controller.js";
// const router=express.Router();
// router.get("/trending", getTrendingTv);
// router.get("/:id/trailers", getTvTrailers);
// router.get("/:id/details", getTVDetails);
// router.get("/:id/similar", getSimiliarTv);
// router.get("/:category", getTvsByCategory);
// export default router;
import express from "express";
import {
	getSimilarTvs,
	getTrendingTv,
	getTvDetails,
	getTvsByCategory,
	getTvTrailers,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;