//multer is used to handle multipart/form-data, which is primarily used for uploading files.
import multer from 'multer';

const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null, file.originalname); //store the file with its original name
    }
})
const upload = multer({ storage });
export default upload;