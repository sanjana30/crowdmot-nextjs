
import Mongoose from "mongoose";

function connect() {
  if (Mongoose.connection.readyState === 0) {
    Mongoose.connect(
      `${process.env.MONGO_URL || "mongodb://localhost:27017"}/crowdmot` || 'mongodb+srv://crowdmotUser:crowdmot@123@cluster0-2o56v.mongodb.net/crowdmot?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        createIndexes: true
      }
    );
  }
}

export default { connect };