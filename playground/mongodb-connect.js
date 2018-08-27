const MongoClient = require('mongodb').MongoClient;

//Destrutturando la riga di sopra
// const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Dani', age: 26};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });

// Insert new doc into Users (name, age, locationstring)
// db.collection('Users').insertOne({
//   name: 'Dani',
//   age: '26',
//   location: 'Milano'
// }, (err, result) =>{
//   if (err) {
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2));
// });

  db.close();
});
