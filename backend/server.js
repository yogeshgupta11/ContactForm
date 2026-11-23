import express from "express";
import cors from "cors";
import sql from "mssql";
import "dotenv/config";

const app = express();
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,

  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
const poolPromise = sql.connect(dbConfig);

poolPromise
  .then(() => {
    console.log("Connected to SQL Server successfully!");
  })
  .catch((error) => {
    console.log("SQL Server connection failed:");
    console.log(error.message);
  });
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.send("backnd server is running!");
});

app.post("/contact", async (request, response) => {
  try {
    const name = request.body.NAME;
    const phonenumber = request.body.PHONENUMBER;
    const email = request.body.EMAIL;
    const subject = request.body.SUBJECT;
    const description = request.body.DESCRIPTION; 

    const pool = await poolPromise;
    const dbRequest = pool.request();

    dbRequest.input("NAME", sql.VarChar(100), name);
    dbRequest.input("PHONENUMBER", sql.VarChar(15), phonenumber);
    dbRequest.input("EMAIL", sql.VarChar(100), email);
    dbRequest.input("SUBJECT", sql.VarChar(150), subject);
    dbRequest.input("DESCRIPTION", sql.NVarChar(sql.MAX), description);

    const result = await dbRequest.query(`
      INSERT INTO dbo.contactForm
      (NAME, PHONENUMBER, EMAIL, SUBJECT, DESCRIPTION)
      VALUES
      (@NAME, @PHONENUMBER, @EMAIL, @SUBJECT, @DESCRIPTION)
    `);

    response.status(201).json({
      message: "Contact saved successfully!",
    });
  } catch (error) {
    console.log(error.message);

    response.status(500).json({
      message: "Failed to save contact!", 
    });
  }
});

app.get("/contact", (request, response) => {});
app.put("/contact/:id", (request, response) => {});
app.delete("/contact/:id", (request, response) => {});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
