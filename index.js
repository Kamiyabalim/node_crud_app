const express = require('express');
const app = express();
require('dotenv').config();
const employeeRoutes = require('./src/routes/employeeRoutes');
const connectDB = require('./src/config/db');

connectDB();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('', employeeRoutes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));