import express from "express";
import { google } from "googleapis";

const app = express();


// middleware to parse the body of the request to JSON format
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World");
  res.status(200).json({ message: "Hello World" });
});

app.get("/api/names", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1fpdpBadWH1U7QIz7TnQJssKhLls0XKFFr2BmMHMa8Ds"; // id of the spreadsheet
  let names = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: `Sheet1!A2:A40`, // range of the spreadsheet
  });
  names = names.data.values;
  names = names.flat(2);

  res.status(200).json({ names });
});

app.get("/sheets/all", async (req, res) => {
  // create google auth function
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json", // path to the secrets.json file that contains the credentials
    scopes: "https://www.googleapis.com/auth/spreadsheets", // scope of the credentials
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1fpdpBadWH1U7QIz7TnQJssKhLls0XKFFr2BmMHMa8Ds"; // id of the spreadsheet
  //   const testData = await googleSheets.spreadsheets.values.get({
  //     auth,
  //     spreadsheetId,
  //     range: "Sheet1!A1:B2", // range of the spreadsheet
  //     });
  //     console.log(testData);
  const weeks = [
    "Sheet1",
    "Sheet2",
    "Sheet3",
    "Sheet4",
    "Sheet5",
    "Sheet6",
    "Sheet7",
    "Sheet8",
    "Sheet9",
    "Sheet10",
    "Sheet11",
    "Sheet12",
    "Sheet13",
  ];
  const bigData = weeks.map(async (e, index) => {
    index = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: `${e}!A2:G40`, // range of the spreadsheet
    });
    return index.data.values;
  });
  const resolvedData = await Promise.all(bigData);

  const foramatedData = resolvedData.map((e) => {
    return e.map((row) => {
      return {
        studentName: row[0],
        assignment1: row[1],
        assignment2: row[2],
        bonus: row[3],
        blog: row[4],
        attendance: row[5],
        total: row[6],
      };
    });
  });
  res.status(200).json({ data: foramatedData });
});

app.get("/sheets/:week", async (req, res) => {
  const { week } = req.params;
  // create google auth function
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json", // path to the secrets.json file that contains the credentials
    scopes: "https://www.googleapis.com/auth/spreadsheets", // scope of the credentials
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1fpdpBadWH1U7QIz7TnQJssKhLls0XKFFr2BmMHMa8Ds"; // id of the spreadsheet
  const data = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: `Sheet${week}!A2:G40`, // range of the spreadsheet
  });
  const formattedData = data.data.values.map((row) => {
    return {
      studentName: row[0],
      assignment1: row[1],
      assignment2: row[2],
      bonus: row[3],
      blog: row[4],
      attendance: row[5],
      total: row[6],
    };
  });
  res.status(200).json({ data: formattedData });
});

app.get("/api/charts/all", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1fpdpBadWH1U7QIz7TnQJssKhLls0XKFFr2BmMHMa8Ds"; // id of the spreadsheet
  const weeks = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];
  const bigData = weeks.map(async (e, index) => {
    index = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: `Sheet${e}!G2:G40`, // range of the spreadsheet
    });
    return index.data.values;
  });
  let resolvedData = await Promise.all(bigData);
  let weeklyData = resolvedData.map((e) => {
    return e.map((row) => {
      return row[0];
    });
  });
  // create an array containing 39 arrays with 13 elements each
  let dataSet = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  for (let i = 0; i < 39; i++) {
    dataSet[i] = weeklyData.map((e) => {
      return e[i];
    });
  }
  res.status(200).json({ dataSet });
});

app.get("/api/charts/average", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "secrets.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1fpdpBadWH1U7QIz7TnQJssKhLls0XKFFr2BmMHMa8Ds"; // id of the spreadsheet
  const weeks = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];
  const bigData = weeks.map(async (e, index) => {
    index = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: `Sheet${e}!G2:G40`, // range of the spreadsheet
    });
    return index.data.values;
  });
  let resolvedData = await Promise.all(bigData);
  resolvedData = resolvedData.map((e) => {
    return e.flat(1);
  });
  let averageMarks = resolvedData.map((e) => {
    return (
      e.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
      }, 0) / e.length
    );
  });
  res.status(200).json({ averageMarks });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
