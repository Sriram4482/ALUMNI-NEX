// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let users = []; // In-memory user storage (for demo purposes)

// Sign Up Route
app.post('/api/register', (req, res) => {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    // Create user
    const newUser = { username, email, password: hashedPassword, role };
    users.push(newUser);
    
    res.status(201).json({ message: 'User registered successfully' });
});

// Sign In Route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Check password
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).json({ token: null, error: 'Invalid password' });
    }

    // Create a token
    const token = jwt.sign({ id: user.email, role: user.role }, 'your_jwt_secret', {
        expiresIn: 86400 // 24 hours
    });

    res.status(200).json({ token, role: user.role });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
