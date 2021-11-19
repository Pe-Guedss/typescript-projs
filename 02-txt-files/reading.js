var fs = require('fs'), readline = require('readline');
async function processLineByLine() {
    const fileStream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        //   console.log(`Line from file: ${line}; \n number of ';': ${(line.split(";").length - 1)}`);
        var fields = line.split(";");
        if (fields.length - 1 != 20) {
            console.log("Erro ao abrir o arquivo!\nNão há campos o suficiente.");
            break;
        }
        else {
            if (fields[19].replace(" ", "") == 'P') {
                console.log(`Este é um arquivo ${fields[19].replace(" ", "")}`);
            }
            else if (fields[19].replace(" ", "") == 'M') {
                console.log(`\tEste é um arquivo ${fields[19].replace(" ", "")}`);
            }
            else if (fields[19].replace(" ", "") == 'I') {
                console.log(`\t\tEste é um arquivo ${fields[19].replace(" ", "")}`);
            }
            else {
                console.log(`\t\t\tEste é um arquivo ${fields[19].replace(" ", "")}`);
            }
        }
    }
}
processLineByLine();
