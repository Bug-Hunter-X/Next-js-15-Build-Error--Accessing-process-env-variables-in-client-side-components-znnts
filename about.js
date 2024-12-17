```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the app is deployed to Vercel or Netlify 
  const myVar = process.env.MY_VARIABLE;
  console.log(myVar); // this may cause error during build process
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>My variable value is: {myVar}</p> 
    </div>
  );
}
```