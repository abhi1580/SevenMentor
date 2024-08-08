const http = require("http");
const url = require("url");
const events = require("events");
//importing user defined module
const calculateSimpleInterest = require("../modules/simple_interest_calci");

//craete http server

const server = http
    .createServer((req, res) => {
        if (req.url != "/favicon.ico") {
            res.writeHead(200, { "content-type": "text/html" });
            //create event emitter object
            const e = new events.EventEmitter();
            let interestAmount = 0;

            //create event handler function with event parameters
            const interestCalciHandler = (p, n, r) => {
                //calling business logic method inside the event hnadler function 
                interestAmount = calculateSimpleInterest(p, n, r);
            };
            //binding event listener with event
            e.on("simpleInterest", interestCalciHandler)

            //reading query parameters from request
            const q=url.parse(req.url,true).query

            //trigger the event with query parameters by passing query params to event params
            e.emit("simpleInterest",q.p,q.n,q.r)

            //write http response to client
            res.write(`<h2>Principal Amount = &#8377; ${q.p}</h2>`)
            res.write(`<h2>Duraion in years = ${q.n}</h2>`)
            res.write(`<h2>Rate of Interest  = ${q.r}%</h2>`)
            res.write(`<hr>`)
            res.write(`Interest Amount = &#8377; ${interestAmount}`)
            return res.end()
        }
    })
    .listen(4000, () => {
        console.log("Event listener server started on port no 5000");
    });
