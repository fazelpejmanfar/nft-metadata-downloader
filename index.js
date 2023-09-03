
const axios = require('axios');
const fs = require('fs');
const { BASE_URL, START, END, BATCH_SIZE, DELAY } = require('./config')


async function fetchDataAndWriteToFile(start, end) {
  const data = [];

  for (let i = start; i <= end; i += BATCH_SIZE) {
    const batchStart = i;
    const batchEnd = Math.min(i + BATCH_SIZE - 1, end);
    const urls = [];

    for (let j = batchStart; j <= batchEnd; j++) {
      const singlemetadata = await axios.get(`${BASE_URL}${j}.json`).then(response => response.data);
      urls.push(singlemetadata);
      fs.writeFileSync(`metadata/${j}.json`, JSON.stringify(singlemetadata, null, 2));
      console.log(`${j}.json Done`)
    }

    try {
      const responses = await Promise.all(urls);
      data.push(...responses);
      // Wait for the delay
      await new Promise(resolve => setTimeout(resolve, DELAY));
    } catch (error) {
      console.error(`Error fetching data from batch ${batchStart} - ${batchEnd}:`, error);
    }
  }

  try {
    // Write data to JSON file
    fs.writeFileSync('full_metadata.json', JSON.stringify(data, null, 2));
    console.log('All Metadatas written to full_metadata.json file.');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
}

fetchDataAndWriteToFile(START, END);