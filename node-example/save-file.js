const fs = require ('fs');

//Modulo fs - modulo para utilizar/editar arquivos

fs.writeFile(process.argv[2], process.argv[3], (error) =>{
    if(error) throw error;

    console.log(`${process.argv[2]} foi salvo com sucesso!`);
});