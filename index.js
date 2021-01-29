require("dotenv").config();
const server = require("./api/server");

const PORT = process.env.PORT || "4400";

server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT}`);
});