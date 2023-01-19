import Link from 'next/link';
import Head from 'next/head';
import Layout from "../components/layout";
export default function About() {
  return (
    
<>
    <Head>
        <title>About Page</title>
    </Head>
      <h1>About</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

    </>
  );
}