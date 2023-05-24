
const User= require("../modele/utilisateur")

const multer = require('multer');
const MIME_TYPES = {
    'images/jpg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, 'images')
    },
    filename: (req, file, callback)=>{
        const name = file.originalname.replaceAll(' ', '_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension)
    }
});

module.exports = multer({storage}).single('image');

// const multer  = require('multer')


<<<<<<< HEAD
const upload= multer({storage:multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.mimetype.split('/')[1])
      }
=======
// const upload= multer({storage:multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//       },
//       filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now()
//         cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.mimetype.split('/')[1])
//       }
>>>>>>> 72395873e15ba55358e59e69dd61dc50efeb84ab

// })

<<<<<<< HEAD
})
module.exports = multer({storage}).single("image")
=======
// })
>>>>>>> 72395873e15ba55358e59e69dd61dc50efeb84ab
