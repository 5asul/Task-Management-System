const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const app = express();
const corsOptions = { origin: `${baseURL}`, optionsSuccessStatus: 200 };
// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next()
})

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
