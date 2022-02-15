import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-white-20">
      <Head>
        <title>Finance Conferences</title>
        <meta
          name="description"
          content="A list of upcoming conferences in finance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">
        <h1 className="m-5">Conference Listings</h1>
      </main>

      <Footer />
    </div>
  );
}
