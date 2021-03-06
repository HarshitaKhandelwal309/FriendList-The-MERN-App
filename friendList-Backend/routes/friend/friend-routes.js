const express= require('express');
const router = express.Router();
const friendController = require('../../controllers/friend/friend-controller')
router.use(express.json());

router.post("/add/friends", friendController.addFriends)

//fetch all documents inside collection
router.get("/get/documents", friendController.fetchingFriends)

//find document using id and delete 
router.delete("/delete/documents", friendController.deleteFriend)

//delete all document
router.delete("/delete/friend" ,  friendController.deleteFriends)

// update
router.put("/update/documents", friendController.updateFriend)

// find document using id
router.get("/get/friends", friendController.gettingFriends);


    module.exports =  router;



  