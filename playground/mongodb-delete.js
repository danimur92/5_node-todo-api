// const MongoClient = require('mongodb').MongoClient;

// //Destrutturando la riga di sopra
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
// db.collection('Users').deleteMany({
//   name: "Die",
// }).then((result) => {
//   console.log(result);
// })

  //deleteOne
// db.collection('Users').deleteOne({
//   name: 'Dani'
// }).then((result) => {
//   console.log(result);
// });

  //findOneAndDelete: il new viene messo perchè non era mai stato usato un ObjectID
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5b6b0509393c960d22c8854d'),//JSON.stringify(_id, undefined, 2),
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});


  // db.close();
});
