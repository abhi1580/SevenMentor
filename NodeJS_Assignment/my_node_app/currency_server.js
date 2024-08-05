// Import built-in modules
const http = require("http");
const url = require("url");

// Import user-defined module
const {
  convertoUsd,
  convertoJpy,
  converttoYuan,
  converttoAusDollar,
  convertoRinggit,
  convertoFranc,
  convertoEuro,
  convertoShilling
} = require("./currency_converter");

// Create the HTTP server
const server = http.createServer(function (req, res) {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Parse the query parameters from the request URL
  const q = url.parse(req.url, true).query;
  const inrValue = q.inr; // Get the INR value from the query parameter

  // Perform currency conversions using the user-defined module functions
  const usd = convertoUsd(inrValue);
  const jpy = convertoJpy(inrValue);
  const yuan = converttoYuan(inrValue);
  const ausDollar = converttoAusDollar(inrValue);
  const ringgit = convertoRinggit(inrValue);
  const franc = convertoFranc(inrValue);
  const euro = convertoEuro(inrValue);
  const shilling = convertoShilling(inrValue);

  // Generate HTML response with INR at the top and other conversions below
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Currency Converter</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
                max-width: 500px;
                width: 100%;
                text-align: center;
            }
            h1 {
                color: #333;
                margin-bottom: 20px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            table, th, td {
                border: 1px solid #ddd;
            }
            th, td {
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
            footer {
                margin-top: 20px;
                font-size: 14px;
                color: #aaa;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Currency Converter</h1>
            <h2>₹${inrValue} equals:</h2>
            <table>
                <tr>
                    <th>Currency</th>
                    <th>Converted Amount</th>
                </tr>
                <tr>
                    <td>USD ($)</td>
                    <td>$ ${usd}</td>
                </tr>
                <tr>
                    <td>JPY (¥)</td>
                    <td>¥ ${jpy}</td>
                </tr>
                <tr>
                    <td>Yuan (¥)</td>
                    <td>¥ ${yuan}</td>
                </tr>
                <tr>
                    <td>Australian Dollar (A$)</td>
                    <td>A$ ${ausDollar}</td>
                </tr>
                <tr>
                    <td>Ringgit (RM)</td>
                    <td>RM ${ringgit}</td>
                </tr>
                <tr>
                    <td>Franc (CHF)</td>
                    <td>CHF ${franc}</td>
                </tr>
                <tr>
                    <td>Euro (€)</td>
                    <td>€ ${euro}</td>
                </tr>
                <tr>
                    <td>Shilling (KSh)</td>
                    <td>KSh ${shilling}</td>
                </tr>
            </table>
        </div>
    </body>
    </html>
  `);
  res.end();
});

// Configure the HTTP server to listen on a specified port
server.listen(4200, () => {
  console.log("Currency server started on port 4200");
});
