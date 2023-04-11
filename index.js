const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let persons = [];

// Endpoint 1: retrieve all persons
app.get('/getPerson', (req, res) => {
  res.json(persons);
});

// Endpoint 2: retrieve one person by ID
app.get('/getAPerson/:id', (req, res) => {
  const id = parseInt(req.params.id);
   const person = req.body;
find(p => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).send('Person not found');
  }
});

// Endpoint 3: create a person
app.post('/savePerson', (req, res) => {
  const person = req.body;
  person.id = persons.length + 1;
  persons.push(person);
  res.json({id: person.id});
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
