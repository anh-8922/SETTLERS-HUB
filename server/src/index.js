import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import guideRoutes from './routes/guideRoutes.js'
import communityRoutes from './routes/communityRoutes.js'
import housingRoutes from './routes/housingRoutes.js'
import serviceProviderRoutes from './routes/serviceProviderRoutes.js'
import  serviceRequestRoutes from './routes/serviceRequestRoutes.js'
import replyRoutes from "./routes/replyRoutes.js"
import cookieParser from "cookie-parser"
import messageRoutes from './routes/messageRoutes.js'

dotenv.config();
dbConnect();

const app = express();
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded ({extended : false}));



app.use('/guide', guideRoutes)
app.use('/user', userRoutes)
app.use('/community', communityRoutes)
app.use('/housing', housingRoutes)
app.use('/serviceprovider', serviceProviderRoutes)
app.use('/servicerequests', serviceRequestRoutes)
app.use('/reply', replyRoutes)
app.use('/message', messageRoutes)
app.use("/image", express.static("./server/uploads"));

app.use("/uploads", express.static("./server/uploads"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is up and running at port ${port}`))