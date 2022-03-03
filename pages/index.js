import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
const { google } = require("googleapis");
import Button from "../components/Button";

export async function getServerSideProps() {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const range = `Sheet1!A1:F`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  //console.log(response.data.values)

  const keys = response.data.values[0];

  const rows = response.data.values.slice(1);

  const conferences = [];

  rows.forEach((row, i_row) => {
    const conference = {};
    row.forEach((entry, i) => {
      conference[keys[i].toLowerCase()] = entry;
      conference.id = i_row + 1;
      conference.name = conference.conference;
      conference.submission_deadline = conference.submission;
      conference.topics = "General Finance";
      conference.submission_fee = "0";
    });
    conferences.push(conference);
  });

  //console.log(conferences)

  return {
    props: { conferences },
  };
}

export default function Home({ conferences }) {
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
        <div className="flex justify-between">
          <h1 className="text-black-950 text-2xl sm:text-3xl font-semibold mb-3">
            Conference Listings
          </h1>
          <div>
            <Button text="sort by" />
          </div>
        </div>
        {/* horizontal rule */}
        <div className="relative">
          <div className="w-full border-t-4 border-stone-800"></div>
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
