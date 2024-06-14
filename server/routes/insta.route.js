const router = require("express").Router();

const {
  postReels,
  postImages,
  profileData,
} = require("../controllers/snapinsta");

// SNAPINSTA ROUTES
router.get("/si/profile", profileData); //Toolzu is used for profilepic
router.get("/si/posts", postImages);
router.get("/si/reels", postReels);

module.exports = router;
