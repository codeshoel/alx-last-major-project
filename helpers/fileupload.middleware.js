const multer = require('multer')
const fs = require('fs')
const path = require('path')


// const fileStorage = () => {
//     // Set up Multer to store uploaded files in a specific folder
//     return multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, 'uploads/');
//         },
//         filename: (req, file, cb) => {
//             cb(null, Date.now()+'-'+file.originalname);
//         }
//     });
// }

// module.exports=fileStorage;


module.exports = {
    fileStorage: () => {
        // Set up Multer to store uploaded files in a specific folder
        return multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads/');
            },
            filename: (req, file, cb) => {
                cb(null, Date.now()+'-'+file.originalname);
            }
        });
    },
    // deleteEffectedFile: async (fileNames, dirPath) => {
    //     try{
    //         const files = fs.readdir(dirPath)
    //         const deleteFiles = files.map(file => {
    //             for(i in fileNames){
    //                 if(fileNames[i] == file){
    //                     fs.unlink(path.join(dirPath, file))
    //                 }
    //             }
    //         });
    //         await Promise.all(deleteFiles);
    //     }catch(error){
    //         console.log(error)
    //     }
    // },
}



