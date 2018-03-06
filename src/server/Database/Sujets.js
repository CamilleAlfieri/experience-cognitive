import { MongoClient, ObjectID } from 'mongodb'


class Sujets {

  constructor(){
    this.databaseUrl = 'mongodb://localhost:27017';
    this.databaseName = 'psycho';
    this.collectionName = 'sujets';
    this.connectDatabase()
  }

  connectDatabase = () => {
    MongoClient.connect(this.databaseUrl, (err, client) => {
      if(err){
        console.error(error)
        return this.connectDatabase()
      }
      console.log("Connected successfully to server");
      const db = client.db(this.databaseName);
      this.collection = db.collection('sujets');
    });
  }

  create = async () => {
    const result = await this.collection.insertOne({a:1})
    const id = result.insertedId.toString();
    return id
  }

  setAnswer = async (token, question, answer) => {
    const result = await this.collection.updateOne(
      { 
        _id: ObjectID(token)
      },
      { 
        $set: {
          [question]: answer
        }
      }
    );
  }

}

const S = new Sujets()

export default S