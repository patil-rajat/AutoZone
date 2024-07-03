const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const mysql = require('mysql');

// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.json());
// app.set(express.static(path.join(__dirname, 'public')));
// app.use("/stylesheet", express.static(path.join(__dirname, "stylesheet")));
// app.use("/script", express.static(path.join(__dirname, "src", "script")));


// DB
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Abcd@1234',
//   database: 'cars',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the database');
// });

const homeLink = "/";
const topPicksLink = "/toppicks";
const buyLink = "/buy";
const sellLink = "/sell";

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "public", "index.html");
    // res.sendFile(indexPath);
    res.render("index.ejs", {
      homeLink,
      topPicksLink,
      buyLink,
      sellLink
  });
  console.log('GET /home');
});

// app.get("/enquiry.html", (req, res) => {
//     const enquiryPath = path.join(__dirname, "public", "enquiry.html");
//     // res.sendFile(enquiryPath);
//     res.render("toppicks.ejs", {
//       homeLink,
//       topPicksLink,
//       buyLink,
//       sellLink
//   });
//   console.log('GET /toppicks');
// }); 

app.get("/toppicks", (req, res) => {  
  res.render("toppicks.ejs", {
      homeLink,
      topPicksLink,
      buyLink,
      sellLink
  });
  console.log('GET /toppicks');
}); 

app.get("/buy.html", (req, res) => {
    const buyPath = path.join(__dirname, "public", "buy.html");
    // res.sendFile(buyPath); 
    res.render("buy.ejs", {
      homeLink,
      topPicksLink,
      buyLink,
      sellLink
  });
  console.log('GET /buy');
}); 

app.get("/sell.html", (req, res) => {
    const sellPath = path.join(__dirname, "public", "sell.html");
    // res.sendFile(sellPath);
    res.render("sell.ejs", {
      homeLink,
      topPicksLink,
      buyLink,
      sellLink
  });
  console.log('GET /sell');
}); 


app.post("/sell", (req, res) => {
    const { fN, lN, mail, mobile, Manufacturer, model, year } = req.body;
    const sql = 'INSERT INTO user_details(First_Name, Last_name, email, phone, flag, car_company, car_model, purchase_year) VALUES (?, ?, ?, ?, "S", ?, ?, ?)';
    connection.query(sql, [fN, lN, mail, mobile, Manufacturer, model, year], (err, result) => {
        if (err) {
            console.log("Error:", err);
            return res.status(500).send('Error submitting data.');
        }
        console.log('Data inserted successfully.');
        //connection.end((err) => {
           // if (err) {
             // console.error('Error closing the database connection: ' + err.message);
            //} else {
              //console.log('Database connection closed.');
           // }
          //});
        //res.redirect('/success'); // Redirect to a success page
   });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

