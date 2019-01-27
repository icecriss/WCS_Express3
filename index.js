// const express = require('express');
// const app = express();
// const port = 3000;
// const connection = require('./conf');
// const bodyParser = require('body-parser');

// // Support JSON-encoded bodies
// app.use(bodyParser.json());
// // Support URL-encoded bodies
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.post('/api/movies', (req, res) => {
//   // TODO récupérer les données (étape 2)
//   // Données stockées dans req.body
//   const formData = req.body;
//   // TODO enregistrer les données (étape 3)
//   connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
//     // TODO envoyer une réponse au client (étape 4)
//     if (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong while trying to save a movie");
//     } else {
//       console.log(results);
//       res.status(200).send('Youhooo, your movie has been added to the list');
//     }
//   });
// });





// // Une route répondant à l'url /api/movies/names qui envoie uniquement les noms des films.

// // écoute de l'url "/api/movie"
// app.get('/api/movie', (req, res) => {

//   // connection à la base de données, et sélection de toutes les données de movie:
//   connection.query('SELECT * from movie', (err, results) => {

//     if (err) {

//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       res.status(500).send(err);
//     } else {
//       // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//       res.json(results);
//     }
//   });
// });

// // écoute de l'url "/api/movie/names"
// app.get('/api/movie/names', (req, res) => {

//   // connection à la base de données, et sélection de tous les titres de films:
//   connection.query('SELECT * from movie', (err, results) => {

//     if (err) {

//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       res.status(500).send(err);
//     } else {
//       // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//       res.json(results.map((result) => result.name));
//     }
//   });
// });



// app.listen(port, (err) => {
//   if (err) {
//     throw new Error('Something bad happened...');
//   }

//   console.log(`Server is listening on ${port}`);
// });







const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const bodyParser = require('body-parser');

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/api/movies', (req, res) => {
  // TODO récupérer les données (étape 2)
  // Données stockées dans req.body
  const formData = req.body;
  // TODO enregistrer les données (étape 3)
  connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
    // TODO envoyer une réponse au client (étape 4)
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong while trying to save a movie");
    } else {
      console.log(results);
      res.status(200).send('Youhooo, your movie has been added to the list');
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});