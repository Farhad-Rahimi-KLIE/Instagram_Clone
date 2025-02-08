const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename : function(req, file, cb) {
        const Unique = Date.now();
        cb(null, Unique + file.originalname);
    },
})

const upload = multer({storage : storage});

module.exports = upload;