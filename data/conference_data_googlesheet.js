export async function conference_googlesheet() {
    const url = 'https://docs.google.com/spreadsheets/d/';
    const ssid = '1bnDnFobjyvRSZhDDTZCIDdRRaay-f5Z9g3Sal8YqgEo';
    const query1 = `/gviz/tq?`;
    const endpoint1 = `${url}${ssid}${query1}`;
    //console.log(endpoint1)
    const res = await fetch(endpoint1, {
      method: 'get',
    })
    const raw = await res.text()
    const data = raw.slice(47, -2);
    const json = JSON.parse(data);
    const rows = json.table.rows
    const cols = json.table.cols
    const conferences = []
    rows.forEach((row, i_row) => {
        const conference = {}
        cols.forEach((col, i) => {
          conference[col.label.toLowerCase()] = row.c[i].f ? row.c[i].f : row.c[i].v
          conference.id = i_row+1
          conference.name = conference.conference;
          conference.submission_deadline = conference.submission
          conference.topics = "N/A"
          conference.submission_fee = "N/A"
        })
        conferences.push(conference)
    });
    console.log(conferences)
    return conferences;
  }