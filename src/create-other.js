const fs = require("fs");

fs.writeFileSync("../index.sh", "\
                 node index.js && \
                 $1 \n\
                 && process.exit()\n\
                 cd out/\n\
                 cp output.js $2\
                 ")