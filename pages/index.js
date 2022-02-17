import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { conferences } from "../data/conference_data";
import Card from "../components/Card.jsx";

{
  /* 
  TODO: import data from google sheets
  TODO: make add conference form
  */
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-white">
      <Head>
        <title>Finance Conferences</title>
        <meta
          name="description"
          content="A list of upcoming conferences in finance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container w-full sm:max-w-4xl sm:mx-auto p-5 sm:m-3">
        <h1 className="text-black-950 text-2xl sm:text-3xl font-semibold mb-3">
          Conference Listings
        </h1>
        {/* horizontal rule */}
        <div className="relative">
          <div className="w-full border-t-4 border-stone-700"></div>
        </div>

        <div className="pt-4 sm:grid sm:grid-cols-2 sm:gap-4">
          {conferences.map((conference) => {
            return (
              <div key={conference.id} className="pt-2 sm:pt-1">
                <Card conference={conference} />
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
