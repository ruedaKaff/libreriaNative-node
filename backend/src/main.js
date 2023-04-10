import { app } from "./app.module.js"


app.listen(process.env.PORT, ()=> {
    console.log(`server running on ${process.env.PORT} whit 'nodemon' for production`);
});