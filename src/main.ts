import { PORT } from "./constants";
import express from "express";
import bodyParser from "body-parser";
import { NoteModule } from "./modules";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize the note module
new NoteModule(app);

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
