const express = require ('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routerUsers = require ('./routes/users')

app.use ('/api/Users', routerUsers)


app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`);
  });