const express = require('express');
const route = require('./routes/parcels');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.use('/api/parcels', route);

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));