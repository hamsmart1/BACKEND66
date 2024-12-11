const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + "/public/bmiCalculator.html");
});

app.post('/bmiCalculator', (req, res) => {
  var weight = Number(req.body.weight); // น้ำหนัก
  var height = Number(req.body.height); // ส่วนสูง

  const BMI = weight/Math.pow(height,2)

  var description =""

  if (BMI <= 18.5) {
    description = 'ผอมเกินไป';
  } else if (BMI < 23) {
    description = 'น้ำหนักปกติ';
  } else if (BMI < 25) {
    description = 'น้ำหนักเกิน';
  } else if (BMI < 30) {
    description = 'อ้วน';
  } else {
    description = 'อ้วนมาก';
  }

  res.send("คุณมีค่า BMI = " + BMI + " , คุณอยู่ในเกณฑ์ = " + description);
});



app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/bmiCalculator');
});
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
});

app.use((req,res,next) => {
  res.status(404).send("File not Found!!");
})