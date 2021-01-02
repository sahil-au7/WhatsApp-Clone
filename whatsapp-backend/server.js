//Importing
import express from "express";
import morgan from "morgan";
import connect from "./db_connect"
import routes from "./routes"
import cors from "cors"

//app config
const app = express();
const port = process.env.PORT || 9000


//middleware
app.use(express.json());
app.use(morgan("dev"))
app.use(express.urlencoded());
//Use this 
app.use(cors());
// OR this
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });


//database
const db = "mongodb+srv://admin:admin@whatsapp.xqumg.mongodb.net/whatsappDB?retryWrites=true&w=majority"
connect(db);


//routes
app.use("/",routes)


//Listening
app.listen(port, () => console.log(`Listening on Localhost : ${port}`));

