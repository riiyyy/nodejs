const express = require('express');
const app = express();
const PORT = 3000;

// Hardcoded database of users
/*const users = [
  { username: 'u1', password: 'p1' },
  { username: 'u2', password: 'p2' }
];

// Middleware function for authentication
function authenticate(req, res, next) {
  const { username, password } = req.headers;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(401).send('Username and password are required!');
  }

  // Check if user exists in the database
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).send('Invalid username or password!');
  }

  // If user is authenticated, attach user object to the request
  req.user = user;
  next();
}

// Public route
app.get('/', (req, res) => {
  res.send('Welcome to the public route!');
});


// Login route - Serve login.html
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/server.html');
  });
  
  // Protected route
app.get('/profile', authenticate, (req, res) => {
  const { username } = req.user;
  res.send(`Welcome ${username} to your profile!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const app = express();


// Simulated database for authentication
*/
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Middleware for logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(  `[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
  });
  next();
});

// Middleware for authentication
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.status(401).send('Unauthorized');
    return;
  }
  const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  const username = credentials[0];
  const password = credentials[1];
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    res.status(401).send('Unauthorized');
    return;
  }
  next();
};

// Routes
app.get('/profile', authenticate, (req, res) => {
  res.send('Profile Page');
});

app.get('/checkout', authenticate, (req, res) => {
  res.send('Checkout Page');
});

// Test
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
