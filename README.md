# BreathFlow - Guided Breathing App

BreathFlow is a web application that provides guided breathing exercises to help users improve their wellbeing, reduce stress, and enhance focus.

## Features

- Six different breathing techniques for various needs
- Interactive breathing animation with visual guidance
- Information about the benefits and science of breathwork
- Responsive design for all devices

## Deployment to GitHub Pages

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps to Deploy

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/breathflow.git
   cd breathflow
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   # or
   yarn
   \`\`\`

3. Build the project:
   \`\`\`
   npm run build
   # or
   yarn build
   \`\`\`

4. The build output will be in the `out` directory. You can deploy this to GitHub Pages.

5. If you're using GitHub Actions, you can add a workflow file to automate deployment:

   Create a file `.github/workflows/deploy.yml` with the following content:

   \`\`\`yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: out
             branch: gh-pages
   \`\`\`

6. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Navigate to "Pages"
   - Select the `gh-pages` branch as the source
   - Save the changes

7. Your site should now be live at `https://yourusername.github.io/your-repo-name/`

## Local Development

To run the project locally:

\`\`\`
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lucide React Icons
\`\`\`

Let's also create a GitHub Actions workflow file for automated deployment:
