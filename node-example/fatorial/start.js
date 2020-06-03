//Modo Padra Node Module
// (function (exports, require, module, __filename, __dirname){
    
//     const fatorial = (num) => {
//         if(num === 0){
//             return 1;
//         }

//         return num * fatorial (num - 1);
//     }

//     exports.fatorial = fatorial;

// });

const fatorial = (num) => {
            if(num === 0){
                return 1;
            }
    
            return num * fatorial (num - 1);
        }
    
//exports.fatorial = fatorial;
module.exports = fatorial;

/*
module.exports = {
    fatorial,
    //funcao: funcao_2
}
*/




    