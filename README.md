# What Books Have I Read

This app helps you keep track of the books you have read.

## User Journeys

### 1. Viewing the List of Books

1. Open the app to see the homepage.
2. The app displays a list of books you have read.
   - If you haven't added any books yet, it shows a message indicating that no books have been added.
3. Each book in the list shows the title and the author.

### 2. Adding a New Book

1. Click on the "Add Book" link in the navigation bar.
2. You are taken to the "Add a New Book" page.
3. Fill in the "Title" and "Author" fields with the book's information.
4. Click the "Add Book" button to submit.
5. The app saves the new book to your list and navigates back to the homepage.
6. The newly added book now appears at the top of the book list.

## Features

- **Responsive Design:** The app is optimized for all screen sizes, ensuring a seamless experience on desktop and mobile devices.
- **Loading States:** Visual feedback is provided during data fetching and form submission to enhance user experience.
- **Prevent Double Submissions:** The "Add Book" button is disabled while the form submission is in progress to prevent multiple submissions.
- **User-Friendly Interface:** Clean and intuitive design for easy navigation and interaction.
- **Data Persistence:** Uses Supabase as a backend service to store and retrieve books securely.
