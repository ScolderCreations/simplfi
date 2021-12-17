const fs = require("fs");

fs.writeFileSync("../index.bat", "\
                 node index.js\n\
                 %1%\n\
                 process.exit()\n\
                 cd out/\n\
                 copy output.js %2%\
                 ")