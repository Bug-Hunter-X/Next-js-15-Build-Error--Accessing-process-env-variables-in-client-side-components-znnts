# Next.js 15 Build Error: Client-Side Access of process.env

This repository demonstrates a common build error encountered in Next.js 15 applications when deploying to platforms like Vercel or Netlify. The error arises from attempting to access environment variables (using `process.env`) within client-side components.

## Problem

Accessing `process.env` directly in client-side code is problematic because these variables are not available in the browser environment.  Build processes on platforms like Vercel or Netlify will likely fail, resulting in errors during the deployment.

## Solution

The solution involves moving the access of environment variables to the server-side (API routes or getServerSideProps). This ensures the variables are available during the build process but not exposed directly to the client-side.

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Attempt to deploy the original code to Vercel or Netlify to reproduce the error.
5. Then, refer to the solution provided in `aboutSolution.js` to fix the issue before deployment.