import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const port = 4040;

const data = [
  {
    email: "jim@gmail.com",
    number: "221122",
  },
  {
    email: "jam@gmail.com",
    number: "830347",
  },
  {
    email: "john@gmail.com",
    number: "221122",
  },
  {
    email: "jams@gmail.com",
    number: "349425",
  },
  {
    email: "jams@gmail.com",
    number: "141424",
  },
  {
    email: "jill@gmail.com",
    number: "822287",
  },
  {
    email: "jill@gmail.com",
    number: "822286",
  },
];

app.use(cors());

// express middleware for adding latency
app.use((req, res, next) => {
  setTimeout(next, 5000);
});

app.get("/search", (req: Request, res: Response) => {
  console.log(req.query);

  const { email, number } = req.query;

  let found = data.filter((item) => {
    if (email && number) {
      if (email === item.email && number === item.number) {
        return item;
      }
    } else if (email) {
      if (email === item.email) {
        return item;
      }
    }
  });

  res.send(found);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} 🚀`);
});
