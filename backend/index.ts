import { MongoClient } from 'mongodb';


const client = new MongoClient('mongodb://localhost:27017')

const start = async () => {
    try {
       await client.connect()
       console.log('Connection successfull');
         
    } catch (error) {
        console.log(error);
        
    }
}

start()