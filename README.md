# Blog Pessoal Frontend

## Description

This repository contains the frontend part of the Blog project, built using Vite, TypeScript, React, and Axios. The Blog project is a web application that allows users to read and create blog posts. It connects to the backend hosted on Render using Axios for API calls.

## Technologies Used

- Vite
- TypeScript
- React
- Axios

## Features

- User authentication and login functionality
- View and read blog posts
- Create new blog posts
- Edit and delete existing blog posts
- Like and comment on blog posts
- Responsive design for mobile and desktop

## Setup and Installation

1. Clone the repository: `git clone https://github.com/eliseflaneuse/blog-pessoal`
2. Navigate to the project directory: `cd blog-pessoal`
3. Install dependencies: `npm install` + yarn
4. Create a `.env` file with the necessary environment variables (e.g., API base URL, authentication tokens).
5. Start the development server: `yarn run dev`

## How to Use

- Register or login using your credentials to access the blog.
- Browse existing blog posts, read their content, and leave comments.
- Create new blog posts with your own content.
- Edit or delete your own blog posts.
- Like and comment on posts from other users.

## Backend Connection

The frontend is connected to the backend hosted on Render using Axios for making API requests. The API base URL is specified in the `.env` file.
To acess the backend code go to `https://github.com/eliseflaneuse/blogpessoal`

## Folder Structure

- `src`: Contains the main source code files for the frontend.
  - `assets`: Images and Fonts.
  - `components`: Reusable UI components.
  - `contexts`: Authorization and Context Providers.
  - `pages`: Individual page components.
  - `services`: API service functions (e.g., Axios requests).
  - `models`: TypeScript interfaces and models.
- `public`: Contains the public assets (e.g., images).
- `dist`: Output directory for the build.

## Contributing

Contributions are welcome! Please follow the standard guidelines and conventions for making pull requests. Feel free to open an issue for bug reports or feature requests.

## License

This project is licensed under the [MIT License](link-to-license-file). You are free to use, modify, and distribute the code for both personal and commercial purposes.

## Contact

For any inquiries or support, please contact [eliseflaneuse@gmail.com](mailto:eliseflaneuse@gmail.com).
