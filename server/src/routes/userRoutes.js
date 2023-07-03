import express from 'express'

import {handleUserRegister,
        handleUserLogin,
        handleListUsers,
        handleUpdateProfile } from "../controllers/userControllers.js"



const router = express.Router()

router.post('/register', handleUserRegister)
router.post('/login', handleUserLogin)
router.get('/userlist', handleListUsers)



export const verifyToken = (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (authHeader) {
          jwt.verify(authHeader, "secret", (err) => {
            if (err) {
              return res.sendStatus(403);
            }
            next();
          });
        } else {
          res.sendStatus(401);
        }
      };


export default router