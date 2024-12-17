```javascript
// pages/aboutSolution.js
import {getServerSideProps} from 'next';

export default function About({myVar}) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>My variable value is: {myVar}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const myVar = process.env.MY_VARIABLE;
  return {
    props: {
      myVar,
    },
  };
}
```