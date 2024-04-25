# Election Live Tracker 

This Node.js server application provides real-time location tracking for polling parties. Polling parties use the index.html interface to select their destination polling station, and their locations are automatically sent every minute. The internal team can view the dashboard.html for tracking purposes.

## Features

- Polling parties select their destination once; thereafter, tracking is automatic.
- Real-time updating of the dashboard with polling party locations.
- Uses Leaflet map for visualization.
- MongoDB database for storing location data.

# Election Team Tracker

Election Team Tracker is a simple web application designed to streamline the mustering process during elections. Polling parties can select their polling stations and share their GPS location in real-time. The Election Team can then track the process of mustering via an interactive dashboard.

![MusteringTracker](https://i.imgur.com/4vSeaHZ.png)


## Usage

- **Polling Station Selection**: Polling parties can easily select their assigned polling stations from a dropdown menu.
  
![Polling Station Selection](https://i.imgur.com/wMnjfw4.png)

- **Real-time GPS Sharing**: Polling parties can share their GPS location in real-time with the Election Team, ensuring transparency and efficiency in the mustering process.

![Real-time GPS Sharing](https://i.imgur.com/imD4Yv2.png)

## Usage

1. Select your polling station from the dropdown menu.
2. Click on the "Start Tracking" button to begin sharing your GPS location.
3. The Election Team can view live GPS locations and track the mustering process in real-time via the dashboard.

## Technologies Used

- **Node.js Server**: The backend server is built with Node.js, providing a robust and scalable foundation for the application.
- **MongoDB**: MongoDB is used as the database to store polling station and GPS location data, ensuring data integrity and easy scalability.

## Installation

1. **Node.js**: Ensure Node.js is installed on your system.
2. **Mongoose**: Run `npm install mongoose` (MongoDB object modeling for Node.js)
3. **Leaflet**: Run `npm install leaflet` (Open-source JavaScript library for mobile-friendly interactive maps)

## Hosting

The application is hosted on [onrender.com](https://onrender.com/). Vercel wasn't preferred due to its serverless function-centric approach, while MusteringTracker utilizes a simple Node.js server setup with MongoDB.

