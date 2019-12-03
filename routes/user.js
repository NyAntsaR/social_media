const express = require("express");
const { requireSignin } = require("../controllers/auth");
const { userById, allUsers, getUser, updateUser, deleteUser, userPhoto, addFollowing, addFollowers } = require("../controllers/user");

const router = express.Router();

router.put('/user/follow', requireSignin, addFollowing, addFollowers );

router.get('/users', allUsers);
router.get('/user/:userId', requireSignin, getUser);
router.put('/user/:userId', requireSignin, updateUser);
router.delete('/user/:userId', requireSignin, deleteUser);

// photo
router.get('/user/photo/:userId', userPhoto);

router.param('userId', userById);

module.exports = router;