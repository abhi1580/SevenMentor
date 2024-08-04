const http = require("http");
const url = require("url");
const calSimpleInterest = require("./simpleInterest");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const queryParam = url.parse(req.url, true).query;

  const interestAmount = calSimpleInterest(
    queryParam.p,
    queryParam.r,
    queryParam.t
  );

  // Generate HTML response with enhanced UI
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Interest Calculator</title>
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
            p {
                font-size: 18px;
                margin: 10px 0;
                color: #555;
            }
            .result {
                font-size: 22px;
                color: #007bff;
                font-weight: bold;
                margin-top: 20px;
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
            <h1>Simple Interest Calculator</h1>
            <p>Principal Amount: ₹${queryParam.p}</p>
            <p>Rate of Interest: ${queryParam.r}%</p>
            <p>Duration in Years: ${queryParam.t}</p>
            <p class="result">Interest Amount: ₹${interestAmount}</p>
        </div>
    </body>
    </html>
  `);

  res.end();
});

server.listen(4100, () => {
  console.log("Interest calculator server started on port number 4100");
});
