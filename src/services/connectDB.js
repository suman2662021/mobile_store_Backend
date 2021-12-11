import mongoose from 'mongoose';

const connect_DB = async () => {
    const connectionstring = process.env.DB_URL;

    try {
        await mongoose.connect(connectionstring)
        console.log("DB connected succesfully")
    } catch (error) {
        console.log(`could not connect to the DB: ${error.message}`)
        console.log(error.message)
    }
}

export default connect_DB;