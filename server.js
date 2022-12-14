const express = require('express');


const app = express();
const PORT = process.env.PORT || 3005;
const routes = require("./routes");
app.use(express.static('public'));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

