# Instagram Clone

This is an Instagram clone built with Next.js, Redux Toolkit for the frontend, and Express.js with MongoDB for the backend. The application includes features such as user authentication, post creation, liking and commenting on posts, user profiles, and saving posts.

## Features

- **User Authentication**: Register, login, and authentication using JWT and Bcrypt.js.
- **Create Posts**: Users can create and share posts with images and captions.
- **Like Posts**: Users can like and unlike posts.
- **Comment on Posts**: Users can add comments to posts.
- **Profile Management**: Users can view and edit their profiles.
- **Save Posts**: Users can save posts for future reference.
- **Responsive Design**: Optimized for both mobile and desktop screens.

## Tech Stack

### Frontend

- **Next.js**: A React framework for building the user interface.
- **Redux Toolkit**: For state management.
- **Tailwind CSS**: For styling.

### Backend

- **Express.js**: A web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing user data, posts, and comments.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **Bcrypt.js**: For password hashing.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Farhad-Rahimi-KLIE/Instagram_Clone.git
cd Instagram_Clone
```

### 2. Install Frontend Dependencies

Navigate to the `frontend` directory and install the required dependencies:

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

Navigate to the `backend` directory and install the required dependencies:

```bash
cd backend
npm install
```

### 4. Set up Environment Variables

Create a `.env` file in both the `frontend` and `backend` directories with the following variables:

- `MONGODB_URI`: MongoDB connection URI.
- `JWT_SECRET`: Secret key for JWT.
- `PORT`: Backend server port.

### 5. Run the Application

- **Frontend**: Run the following command in the `frontend` directory:

```bash
npm run dev
```

- **Backend**: Run the following command in the `backend` directory:

```bash
npm start
```

The application will now be available at `http://localhost:3000`.

## Usage

1. **Sign Up**: Register a new user by providing an email and password.
2. **Login**: Log in to your account using your credentials.
3. **Create Post**: Share photos and captions.
4. **Like and Comment**: Interact with posts by liking and commenting.
5. **Profile**: View and edit your profile information.
6. **Save Posts**: Save your favorite posts for later viewing.

## Contributing

Feel free to fork the repository, make improvements, or report issues. Pull requests are welcome!

## License

This project is licensed under the MIT License.
```

You can update it with specific details as you go along.