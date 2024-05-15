const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", async (_, res) => {
  res.send(
    `Welcome to assigment's api!!\nTo use this API please refear to the route: /hottracks`
  );
});

app.get("/hottracks", async (req, res) => {
  try {
    const response = await fetch(
      "https://openwhyd.org/hot/electro?format=json"
    );

    if (!response.ok) {
      throw new Error(`Https Request error status: ${response.status}`);
    }
    const { tracks } = await response.json();
    res.json(tracks);
  } catch (error) {
    console.log(`fetch error: ${error}`);
    res.status(500).send(`Internal server error`);
  }
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
