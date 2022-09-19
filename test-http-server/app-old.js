const http = require("http");
const server = http.createServer((req, res) => {
  /*

    // content-typ: text/plain
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("<h1>hello world</h1>");

    // content-type: json
    const person = {
      name: "nicolas",
      age: 25,
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(person));
*/

  // content-type: csv
  res.setHeader("Content-Disposition", "attachment; filename=list.csv");
  res.writeHead(200, { "Content-Type": "application/csv" });
  res.write("id, name\n");
  res.write("1, juan\n");
  res.write("2, maria\n");

  res.end();
});

const PORT = 8080;
// server.listen(PORT); 
console.log("server init in port: ", PORT);
