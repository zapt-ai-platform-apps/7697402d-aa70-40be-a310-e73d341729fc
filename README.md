# What Books Have I Read

This app allows you to keep track of the books you have read and rate them out of 5 stars. It provides an intuitive interface to manage your reading list and reflect on your favorite books.

## User Journeys

### 1. Viewing Your Reading List

1. **Open the App**: Navigate to the home page of the app.
2. **See Your Books**: The app displays a list of all the books you have added.
   - Each book entry shows:
     - **Title**: The name of the book.
     - **Author**: Who wrote the book.
     - **Rating**: Your personal rating out of 5 stars.
3. **Browse the List**: Scroll through your list to review the books you've read.
4. **Visual Feedback**: Enjoy the colorful and user-friendly design that enhances your browsing experience.

### 2. Adding a New Book to Your List

1. **Access the Add Book Page**: Click on the "Add Book" link in the navigation bar at the top.
2. **Fill in Book Details**:
   - **Title**: Enter the title of the book in the text field.
   - **Author**: Enter the author's name.
   - **Rating**: Select a rating from 1 to 5 stars using the dropdown menu.
3. **Submit the Book**:
   - Click the "Add Book" button to submit your entry.
   - The button will be disabled once clicked to prevent multiple submissions.
4. **Confirmation**:
   - The app displays a loading state while saving your book.
   - After the book is successfully added, you are redirected to the home page.
5. **Verify the Addition**:
   - Your newly added book appears at the top of your reading list.

## Features

- **Add Books Easily**: Simple form to add new books with title, author, and rating.
- **Rate Your Books**: Assign a personal rating to each book.
- **View Your Collection**: See all your added books in one place.
- **Responsive Design**: Optimized for all devices from desktops to mobile phones.
- **User-Friendly Interface**: Attractive design with intuitive navigation.
- **Data Persistence**: Your data is securely stored using Supabase and Drizzle ORM.
- **Prevent Duplicate Submissions**: The app ensures you cannot accidentally add the same book multiple times by disabling the submit button during processing.
- **Loading Indicators**: Visual cues indicate when actions are being processed.

Enjoy keeping track of your reading journey with "What Books Have I Read"!