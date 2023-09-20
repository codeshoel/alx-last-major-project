require('dotenv').config({path: './.env'});
const express = require('express')
const app = express()
const dbConnect = require('./config/config');
// const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static('uploads'))


//Routers
const userRouter = require('./routes/user.routes')
const categoryRouter = require('./routes/category.routes')
const productRouter = require('./routes/product.routes')

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/cate', categoryRouter)
app.use('/api/v1/', productRouter)


const port = process.env.ACCESS_PORT || 7000;
const start = async () => {
    try{
        //console.log(`db_uri: ${process.env.MONGO_URI}`)
        await dbConnect(process.env.MONGO_URI)
        app.listen(port, () => console.log(`e-commerce is listening on port: ${port}`));
    }catch(error){
        console.log(error);
    }
}

start();

