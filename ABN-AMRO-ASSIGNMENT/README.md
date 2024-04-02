# ABN-AMRO-ASSIGNMENT

# Architecture

For this assignment, I use Vue.js as the frontend framework. Vue.js is widely used and has a gentle learning curve, making it ideal for rapid development. Its reactive data binding and component-based architecture facilitate the creation of interactive user interfaces. Additionally, Vue.js aligns with the preferences of ABN AMRO, making it a suitable choice for this assignment.

# UI Design

The UI design will focus on simplicity and usability. I will use responsive design principles to ensure that the application is mobile-friendly and accessible across different devices. The dashboard will feature horizontal lists of TV shows based on rating, with each TV show card displaying its title, rating, and genre. Clicking on a TV show card will navigate the user to a details page where additional information about the TV show will be displayed.

# Code Structure

The codebase will follow an component-based architecture to promote code reusability and maintainability. Each component will be responsible for a specific UI element or functionality, such as the dashboard, TV show card, show card details, page banner and rating filter.

# Additional Features

- Shows fetched show by default
- Search show on title
- Sorting TV shows based on rating (low to high rating or high to low rating).
- Clickable show title to redirect to another page with more details about the show
- Clickable button to reveal more details about the show

- I couldnt figure out how to filter the shows based on genre

## Project Setup

cd .\ABN-AMRO-ASSESMENT\
npm install

### Compile and Hot-Reload for Development

npm run dev

### Run Unit Tests with [Vitest]

- I have written tests for all the components to show that I can write tests. But I couldnt make it work unfortunately, I have tried to debug and solve the problem the whole weekend, but I couldnt fix it
