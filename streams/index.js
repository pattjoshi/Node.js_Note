// streams

// what is streams in node.js?
// streams are a way to handle data as it is being received.
// streams are objects that can be used to read and write data from a source to a destination in continuous fashion. in Node.js, there are four streams:

// streaming means listening to music or watching a video in 'real time', instade of downloading the entire file and then playing it.

// type of streams:
// readable streams - we can read data from a stream
// writable streams - we can write data to a stream
// duplex streams - we can read and write data to a stream
// transform streams - A type of duplex stream which the output is computed based on the input.

// Each type of stream is an EventEmitter.
// Instance and throws severalevents at diffetent instance of times.
// For example, some of the commonly used events are:

// data - when data is available to read
// end - when the is no more data to read
// error - when there is an error reading or writing data
// finish - when all the data has been flushed to the underlying system.

/************************************************************************************/
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunk) => {
    res.write(chunk);
  });
  rstream.on("end", () => {
    res.end();
  });
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
