const mongoose = require('mongoose');

// MongoDB connection URI
const MONGODB_URI = '';//appropriate mongodb link may be shared with creds, used mongodb atlas.

// Define a schema for PS data
const psSchema = new mongoose.Schema({
  PSnum: String,
  Psname: String,
  PS_location: String,
  current_location:String
});

// Create a Mongoose model from the schema
const PS = mongoose.model('PSlocations', psSchema);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Extract data from HTML dropdown
    const dropdownOptions = [
      { PSnum: 1, Psname: 'GOVERNMENT LOWER PRIMARY SCHOOL,HARAVE (Kallahalli)', PS_location: '12.4159494313,76.241141158', current_location: '12.4159494313,76.241141158'},
      { PSnum: 2, Psname: 'Govt Higher Primary school Ramenahalli', PS_location: '12.4100297725,76.2292499091', current_location: '12.4100297725,76.2292499091'},
      { PSnum: 3, Psname: 'Govt Higher Primary School (East wing) Harave', PS_location: '12.4106251498,76.2545397765', current_location: '12.4106251498,76.2545397765'},
      { PSnum: 4, Psname: 'Govt Higher Primary Schol (West Division) Harave', PS_location: '12.4105690999,76.2544518903', current_location: '12.4105690999,76.2544518903'},
      { PSnum: 5, Psname: 'Govt Higher Primary School(right side) Maruru', PS_location: '12.3893599999,76.2696899996', current_location: '12.3893599999,76.2696899996'},
    ];
    // There are more options, removed to show an example.

    // Populate collections
    Promise.all(
      dropdownOptions.map(option => {
        const ps = new PS(option);
        return ps.save();
      })
    )
    .then(() => {
      console.log('Collections populated successfully.');
      mongoose.disconnect(); // Close the connection
    })
    .catch((err) => {
      console.error('Error populating collections:', err);
      mongoose.disconnect(); // Close the connection
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
