const express = require('express');
const os = require('node:os');
const app = express();



/**
 * information about the host system
 * to be displayed in the user panel
 */
let systemInfo = os.platform() + ' ' + os.arch();

app.get('/', (req, res) => {
  res.json(systemInfo);
});



/**
 * events is custom test data used while
 * learning vue lifecycle methods
 */
let events = [
  {
    id: 1,
    name: 'some event',
    category: 'some category',
    description: 'some description',
  },
  {
    id: 2,
    name: 'second some event',
    category: 'second some category',
    description: 'second some description',
  }
];

app.get('/events', (req, res) => {
  res.send(events);
});

app.get('/events/:id', (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(event => event.id === id);
  res.send(event);
});



/**
 * app.listen starts the server on port
 * define any port you would like
 */
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});