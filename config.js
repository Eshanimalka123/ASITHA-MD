const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bIEWmIgZ#gdjDA5p0HPb7jgQOFBKi6d-ZNZ51K_7g3A1RrsEQZhc",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
