const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Define array to hold person data
const persons = [];

// Use body-parser middleware to parse JSON in request body
app.use(bodyParser.json());

// Endpoint 1: Retrieve all persons
app.get('/getPerson', (req, res) => {
  res.json(persons);
});

// Endpoint 2: Retrieve a single person by id
app.get('/getAPerson/:id', (req, res) => {
  const personId = req.params.id;
  const person = persons.find(p => p.id === Number(personId));
  if (person) {
    res.json(person);
  } else {
    res.sendStatus(404);
  }
});

// Endpoint 3: Create a new person
app.post('/savePerson', (req, res) => {
  const newPerson = {
    id: persons.length,
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    birth_date: req.body.birth_date
  };
  persons.push(newPerson);
  res.json(newPerson);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
