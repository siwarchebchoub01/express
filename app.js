const express = require('express');
const app = express();
const { restrictAccess } = require('./middleware'); 

app.use(express.static('Public'));
app.set('view engine', 'pug');


app.use(restrictAccess);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.use((req , res)=> {
  res.status(404).send('Not Found');
});

const port = 3000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server running at port ${port}`);
});