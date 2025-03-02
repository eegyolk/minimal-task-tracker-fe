This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Minimal Task Tracker Front-end

## Description

The Minimal Task Tracker Front-end app helps users manage their tasks by providing a simple interface to add, search, and categorize tasks based on their status. Tasks can be sorted by different categories such as "Pending", "In Progress", "Completed", and "Incomplete". The app allows users to add new tasks, search tasks by keyword, and update their task statuses.

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

   or if you are using yarn:

   ```bash
   yarn install
   ```

2. Set up the environment variables:

   - Create a `.env.local` file in the root of the project.
   - Add the following line to the `.env.local` file:

   ```bash
   MINIMAL_TASK_TRACKER_API_URL=http://localhost:3000/api
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open the app in your browser:
   - Navigate to `http://localhost:3001` to view the app.

## Functionality

- **Dashboard**: Displays an overview of the app. (under construction)
- **Tasks**: Manage tasks by adding new tasks, searching tasks, and categorizing them based on their status (Pending, In Progress, Completed, Incomplete).
- **Search Tasks**: Search tasks by title or description.
- **Add Task**: Add new tasks with details such as title, description, user, and status.
- **Update Task**: Update task status.
- **Account**: User account settings (under construction).

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Headless UI

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
