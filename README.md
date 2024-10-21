# What Books Have I Read

This app helps you keep track of the books you have read and allows you to rate them out of 5.

## User Journeys

### 1. Viewing the List of Books

1. Open the app to see the homepage.
2. The app displays a list of books you have read.
   - Each book in the list shows the title, the author, and your rating out of 5 stars.
3. Books are displayed in order, with the most recently added at the top.
4. The design is colorful and user-friendly, enhancing the visual appeal.

### 2. Adding a New Book

1. Click on the "Add Book" link in the navigation bar.
2. You are taken to the "Add a New Book" page.
3. Fill in the "Title" and "Author" fields with the book's information.
4. Select a rating out of 5 using the provided interface.
5. Click the "Add Book" button to submit.
6. The app saves the new book along with your rating to your list and navigates back to the homepage.
7. The newly added book now appears at the top of the book list with the rating displayed.

## Features

- **Rate Your Books:** Ability to assign a rating out of 5 to each book you've read.
- **Colorful Design:** Enhanced visual design with vibrant colors for a more engaging experience.
- **Responsive Design:** Optimized for all screen sizes, ensuring a seamless experience on desktop and mobile devices.
- **Loading States:** Visual feedback is provided during data fetching and form submission to enhance user experience.
- **Prevent Double Submissions:** The "Add Book" button is disabled while the form submission is in progress to prevent multiple submissions.
- **User-Friendly Interface:** Clean and intuitive design for easy navigation and interaction.
- **Data Persistence:** Uses Supabase as a backend service with Drizzle ORM to store and retrieve books securely.
