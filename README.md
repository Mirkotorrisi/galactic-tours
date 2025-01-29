# Galactic Tours

Galactic Tours is a web application that allows users to book interstellar travel packages. The application is built with Next.js

## SSR - Showcase

The server-side rendered (SSR) pages are responsible for displaying detailed travel information and the list of available travels. By leveraging SSR, these pages ensure that the travel data is fetched and rendered on the server before being sent to the client, resulting in faster load times and improved SEO.

## Endpoints

The application exposes the following pages:

- **index**: The home page of the application.
- **showcase/{slug}**: Displays the travel details for a specific travel package identified by the `{slug}` parameter.
- **booking/**: The page that hosts the purchase flow.

## Client-Side - Booking

The client-side portion of the application manages the booking process and collects user data. It utilizes Redux Toolkit to handle the purchase funnel and share data across components efficiently.

## Redux Structure

The Redux store is structured using a single slice called `bookingSlice`. This slice is responsible for managing the following pieces of state:

- **Passengers Data**: Information about the passengers, such as names, ages, and special requirements.
- **Destination Data**: Details about the travel destination, including planet name, distance, and travel duration.
- **Spaceship Data**: Information about the spaceship, such as model, capacity, and amenities.
- **Add Ons Data**: Additional services or products that can be added to the travel package, like meals, extra luggage, or insurance.
- **Travel Date**: The selected date for the travel.

The `bookingSlice` ensures that all these pieces of state are managed efficiently and can be accessed or updated by various components throughout the application.

## Typings

### Shared Data Structures

The following data structures are shared across the web application:

- **Destination**: Represents the travel destination with properties such as `planetName`, `distance`, and `travelDuration`.
- **Spaceship**: Contains information about the spaceship, including `model`, `capacity`, and `amenities`.
- **AddOn**: Details additional services or products that can be added to the travel package.
- **Passenger**: Holds information about the passengers, including `name`, `age`, and `dateOfBirth`.
- **Step**: Represents the current step in the booking process, helping to manage the flow of the purchase funnel.

These data structures are essential for maintaining consistency and ensuring that all components have access to the necessary information throughout the application.

## Mock Data

Mock data is used during development to simulate API responses. This is achieved by creating mock JSON files and using them in place of actual API calls. This allows for testing and development without the need for a live backend.

## Launching the Application

To launch the application, follow these steps:

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the application**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.
