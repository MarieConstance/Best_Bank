
const User= require("../modele/utilisateur")

const multer = require('multer');
const MIME_TYPES = {
    'images/jpg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    
};

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, 'uploads')
    },
    filename: (req, file, callback)=>{
        const name = file.originalname.replaceAll(' ', '_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension)
    }
});

module.exports = multer({storage}).single('image');

// const multer  = require('multer')




// const upload= multer({storage:multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//       },
//       filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now()
//         cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.mimetype.split('/')[1])
//       }


// })




// })

