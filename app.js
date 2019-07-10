const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(3100, function() {
  console.log("start! express server on 3100");
});

//static파일들이 public폴더 아래 있으니 잘 로드해주세요-!
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  // res.send("<h1>hihgggiasfㅁfㅁ</h1>hi!!");
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/main", function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.post("/email_post", function(req, res) {
  console.log("req.body.email : ", req.body.email);
  // res.send(`${req.body.email}`);
  res.render('email.ejs', {'email' : req.body.email});
});
