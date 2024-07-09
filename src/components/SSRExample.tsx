import React from 'react';

const SSRExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">8. Server-Side Rendering (SSR)</h2>
        <p>
          This is a placeholder for SSR examples. In a real Next.js application, 
          you would use special functions like getServerSideProps or getStaticProps 
          to fetch data on the server.
        </p>
        <pre className="bg-light p-3 rounded">
          {`
// Example of getServerSideProps in Next.js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }, // Will be passed to the page component as props
  }
}
          `}
        </pre>
        <p>
          Note: Actual SSR cannot be demonstrated in a client-side React app. 
          You would need to set up a Next.js project to fully implement SSR.
        </p>
      </div>
    </div>
  );
};

export default SSRExample;