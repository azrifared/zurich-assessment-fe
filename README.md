# Next.js with Redux Example

This repository contains an example application built with Next.js and Redux, demonstrating how to integrate Redux with a Next.js project for state management.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/azrifared/zurich-assessment-fe.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

### Running the Application

1. Create `.env.local` file in project root directory with following environment variables:

| Env Variable         | Required        | Value                    | Description
| -------------------- | --------------- | -------------------------|-------------------------------
| GOOGLE_CLIENT_ID     | _required_      | -                        | Used for Google SSO 
| GOOGLE_CLIENT_SECRET | _required_      | -                        | Used for Google SSO

2. Run `npm install` to fetch dependencies

To start the development server, run:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To build the application for production, run:

```
npm run build
```

This command creates an optimized production build in the `.next` directory.

### Running in Production Mode

To run the production build locally, run:

```
npm start
```

## Built With

- [Next.js](https://nextjs.org/) - The React framework for production.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
