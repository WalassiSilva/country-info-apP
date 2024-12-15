const express = require("express");
const app = express();

const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/countries", async (req, res) => {
  try {
    const response = await fetch(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/countries/:countryCode", async (req, res) => {
  const countryCode = req.params.countryCode;

  try {
    // Obter informações sobre o país
    const countryInfoResponse = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    if (!countryInfoResponse.ok) {
      throw new Error(`Country not found: ${countryCode}`);
    }
    const countryInfo = await countryInfoResponse.json();

    // Obter lista de países que compartilham uma fronteira
    const borderCountries = countryInfo.borders;

    // Obter dados históricos de população
    const populationDataResponse = await fetch(
      `https://countriesnow.space/api/v0.1/countries/population?country=${countryCode}`
    );
    if (!populationDataResponse.ok) {
      throw new Error(`Population data not found for country: ${countryCode}`);
    }
    const populationData = await populationDataResponse.json();

    // Obter URL da bandeira do país
    const flagUrlResponse = await fetch(
      `https://countriesnow.space/api/v0.1/countries/flag/images?country=${countryCode}`
    );
    if (!flagUrlResponse.ok) {
      throw new Error(`Flag URL not found for country: ${countryCode}`);
    }

    const flagUrl = await flagUrlResponse.json();

    // Retornar as informações
    res.json({
      countryInfo,
      flagUrl: flagUrl.data,
      borderCountries,
      populationData: populationData.data,
    });
  } catch (error) {
    console.error(error);
    if (error.message.includes("Country not found")) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Error fetching data" });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
