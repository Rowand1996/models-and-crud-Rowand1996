const express = require("express");
const logger = require("./middleware/logger");
const { syncModels } = require("./models/models");
const ItemsRouter = require("./routes/items");
const StoresRouter = require("./routes/stores");


const port = process.env.PORT;

const app = express();


app.use(express.json());
app.use(logger);

app.use("/stores", StoresRouter);
app.use("/items", ItemsRouter);


app.get("/", (req, res) => {
  res.json({
    hello: "world!!",
  });
});


syncModels().then((_) => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});



