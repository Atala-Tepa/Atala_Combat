// JS FR
const app = require("./app");
const PORT = require("./configs/port.config");
// JS
app.listen(PORT, () => console.log(`Server run on ${PORT} port`));