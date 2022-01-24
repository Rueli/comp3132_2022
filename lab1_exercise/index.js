const csv = require('csv-parsel');
const fs = require('fs');
const input = [];

fs.createReadStream("input_countries.csv")
.pipe(csv())
.on("data", (data) => inputs.push());

const headers =["country, year, population"];
const Canada = [];
const US = [];


inputs.foreach((input) => {
    if (input.country === "Canada")
Canada.push(`${input.country}, ${input.year}, ${input.population}`);

if (input.country === "United States")
US.push(`${input.country}, ${input.year}, ${input.population}`)
});

fs.writeFile("canada.txt", header.concat(Canada).join("\n"), (err) => {
    if (err) {
        console.log("Error writing to canada.txt file", err);
    } else {
        console.log(`saved as canada.txt`);
    } 
});

fs.writeFile("usa.txt", header.concat(Canada).join("\n"), (err) => {
    if (err) {
        console.log("Error writing usa.txt file", err);
    } else {
        console.log(`saved as usa.txt`);
    } 
}); 