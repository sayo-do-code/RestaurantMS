import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurantms",
});

con.connect(function (err) {
  if (err) {
    console.log("Error in connection");
  } else {
    console.log("Connected");
  }
});

app.get("/getRestaurant", (req, res) => {
  const sql = "SELECT * FROM restaurant";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Error: "Get restaurant error in sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.get("/get/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM restaurant where id =?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: "Get restaurant error in sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const sql = "UPDATE restaurant set location= ?, phone= ? WHERE id = ?";
  con.query(sql, [req.body.location, req.body.phone, id], (err, result) => {
    if (err) return res.json({ Error: "Update restaurant error in sql" });
    return res.json({ Status: "Success" });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users Where email = ? AND password= ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err)
      return res.json({ Status: "Error", Error: "Error in running query" });
    if (result.length > 0) {
      return res.json({ Status: "Success" });
    } else {
      return res.json({
        Status: "Error",
        Error: "Wrong Email or Password",
      });
    }
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO restaurant (`name`, `email`, `password`, `location`, `phone`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
    if (err) return res.json({ Error: "Error in hashing password" });
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.location,
      req.body.phone,
    ];
    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inside signup query" });
      return res.json({ Status: "Success" });
    });
  });
});

app.listen(8081, () => {
  console.log("Running");
});
