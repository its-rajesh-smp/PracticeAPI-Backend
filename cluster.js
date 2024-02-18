import app from "./index.js";
import dotEnv from "dotenv";

// Configure .env
dotEnv.config();

const port = process.env.PORT || 8001;

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
