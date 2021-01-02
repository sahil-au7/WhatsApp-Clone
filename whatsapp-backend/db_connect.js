import mongoose from 'mongoose';
import Pusher from "pusher";

export default (db) => {
  const connect = () => {
    mongoose
      .connect(db, {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('CONNECTED TO DATABASE');
      })
      .catch((err) => {
        console.log('ERROR : ', err.message);
      });
  };

  connect();


  
  //Pusher integration
  const pusher = new Pusher({
    appId: "1131664",
    key: "ead039f2f0f0fade48c0",
    secret: "ddb955dd1fc961b9111a",
    cluster: "ap2",
    useTLS: true
  });

  const database = mongoose.connection;
  database.once("open", () => {
    console.log("DB connected")
    const msgCollection = database.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
      console.log(change);

      if (change.operationType === "insert") {
        const messageDetails = change.fullDocument;
        pusher.trigger("messages", "inserted", {
          name: messageDetails.name,
          message: messageDetails.message
        });
      } else {
        console.log("Error triggering Pusher");
      }
    })
  })

};
