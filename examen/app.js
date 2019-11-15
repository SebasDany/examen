

const csv = require('csv-parser');
const fs = require('fs');
const rgv =require('yargs').argv;

const filepath = "pro.csv"
const results = [];

fs.createReadStream(filepath)

    .on('error', () => {

        // handle error
    })
    .pipe(csv())
    //.pipe(fs.createWriteStream('./jola.json'))
    .on('data', (row) => {
        //console.log(row);
        results.push(row)
        //fs.createWriteStream(row)
    })

    .on('end', () => {
        // handle end of CSV
        //console.log(results)

        if (rgv.usuario ==='publicar'){
            let cout='Country Name';
            //console.log(results[0]);
            let res=results[0];
            console.log(res==cout);
            
            let resul= results.find(Country_Name => Country_Name=='Aruba');
            console.log(resul);

        }else{
            console.log("usuario no valido");
            
        

        }
    });

   
