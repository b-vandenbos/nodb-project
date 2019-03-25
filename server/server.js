let express = require('express');
let bodyParser = require('body-parser');
let pc = require('./controllers/post_controller');
let mc = require('./controllers/movie_controller');

let app = express();
let port = 4000;

app.use(bodyParser.json());


app.get('/api/movies', mc.read);
app.get('/api/posts', pc.read);
app.post('/api/posts', pc.create);
app.delete('/api/posts/:id', pc.delete);
app.put('/api/posts/:id', pc.update);

app.listen(port, () => console.log(`The server is listening at port ${port}`));