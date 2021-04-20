const express = require('express');
const cookieParser = require('cookie-parser');
const serialize = require('node-serialize');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.profile) {
    const test = Buffer.from(req.cookies.profile, 'base64').toString('ascii');
    const obj = serialize.unserialize(test);
    if (obj.username) {
      console.log(obj.username);
      return res.send('Hello User :D');
    }
  } else {
    res.cookie('profile', 'eyJ1c2VybmFtZSI6Im1hdGVvIiwgImNvdW50cnkiOiJDb2xvbWJpYSIsICJjaXR5IjogIlNhYmFuZXRhIn0=', {
      maxAge: 900000,
      httpOnly: true,
    });
    return res.send('Hello World');
  }
});

app.listen(4000, () => console.log('Listening on port 4000...'));
