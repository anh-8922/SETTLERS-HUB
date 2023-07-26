import express from 'express'
import {handleListGuide,
        handleAddGuide,
        handleEditGuide,
        handeleDeleteGuide,
        handleSearchGuide} from '../controllers/guideController.js'
//import multer from "multer";
import upload from "../config/cloudinary.js"

//const storage = multer.diskStorage({
//        destination: function (req, file, cb) {
 //         cb(null, "./server/uploads");
 //       },
 //       filename: function (req, file, cb) {
//          const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
 //     
 //         let extension = "";
      
          // get the rest of string after 5th character
//if (file.mimetype.includes("image"))
 //           extension = "." + file.mimetype.slice(6);
  //        console.log("extension:", extension);
  //    
  //        console.log("INSIDE STORAGE OBJECT: file=", file);
      
 //         cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  //      },
  //    });

//const upload = multer({ storage: storage });

const router = express.Router()

router.get('/list', handleListGuide)
router.get('/search', handleSearchGuide)
router.post('/add', upload.single('image'), handleAddGuide)
router.put('/edit', upload.single('image'),handleEditGuide)
router.delete('/delete/:id', handeleDeleteGuide)

export default router