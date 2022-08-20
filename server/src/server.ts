import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
const PORT = 8080;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
	console.log(`Listening on http://localhost: ${PORT}`);
});

app.get;
