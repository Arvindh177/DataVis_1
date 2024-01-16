    const express = require('express');
    const mongoose  = require('mongoose');
    const cors = require('cors');
    const apiRoutes = require('./routes/api');
    require('dotenv').config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    app.use('/api',apiRoutes);

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

//60T0G5m49GTeZCPc