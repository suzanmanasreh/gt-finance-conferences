import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

export async function getServerSideProps() {
  const url = "https://docs.google.com/spreadsheets/d/";
  const ssid = "1bnDnFobjyvRSZhDDTZCIDdRRaay-f5Z9g3Sal8YqgEo";
  const query1 = `/gviz/tq?`;
  const endpoint1 = `${url}${ssid}${query1}`;
  //console.log(endpoint1)
  const res = await fetch(endpoint1, {
    method: "get",
  });
  const raw = await res.text();
  const data = raw.slice(47, -2);
  const json = JSON.parse(data);
  const rows = json.table.rows;
  const cols = json.table.cols;
  const conferences = [];
  rows.forEach((row, i_row) => {
    const conference = {};
    cols.forEach((col, i) => {
      conference[col.label.toLowerCase()] = row.c[i].f
        ? row.c[i].f
        : row.c[i].v;
      conference.id = i_row + 1;
      conference.name = conference.conference;
      conference.submission_deadline = conference.submission;
      conference.topics = "N/A";
      conference.submission_fee = "0";
    });
    conferences.push(conference);
  });
  return {
    props: { conferences },
  };
}

export default function Home({ conferences }) {
  console.log(conferences);
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
