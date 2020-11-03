const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to DesCore application." });
// });

require('./app/routes/auth.routes')(app);
require('./app/routes/identifikasi.routes')(app);
require('./app/routes/lembaga.routes')(app);
require('./app/routes/profil.routes')(app);
require('./app/routes/sejarah.routes')(app);
require('./app/routes/struktur.routes')(app);
require('./app/routes/vm.routes')(app);
require('./app/routes/peta.routes')(app);
require('./app/routes/saran.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});