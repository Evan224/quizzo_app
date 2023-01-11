// mongodb://localhost:27017
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbConnection=async ()=>{
    try{
        await mongoose.connect(MONGO_URI,{

        });
        console.log('DB Online');
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

const db=dbConnection();


export default db;
