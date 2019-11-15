

const csv = require('csv-parser');
const fs = require('fs');
const rgv =require('yargs').argv;

const filepath = "datos.csv"
const results = [];



fs.createReadStream(filepath)

    .on('error', () => {

        // handle error
    })
    .pipe(csv())
    //.pipe(fs.createWriteStream('./jola.json'))
    .on('data', (row) => {
        results.push(row)
        //console.log(row)
        //fs.createWriteStream(row)
    })

    .on('end', () => {
        // handle end of CSV
        //console.log(results)

        if (rgv.usuario ==='mostrar'){
            //console.log(results);
            let res=results[4];
            console.log(res);
         
            let resul= results.find(Country_Name => Country_Name=='Aruba');
            //console.log(resul)
            console.log(results);
        }else{
            console.log("codigo no valido");
            
        

        }
    });
