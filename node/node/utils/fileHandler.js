const fs = require('fs');
const {v4 : uuid} = require('uuid');
const extensionesPermitidas = ["png", "jpg", "jpeg"];

const saveFile = (file, allowE, destFolder = `./public/images`) => {
    try{
    const [type, extension] = file.mimetype.split("/");
    if(!allowE.includes(extension)) throw "Formato incorrecto";
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${uid}.${extension}`;
    fs.createReadStream(file.path).pipe(fs.createWriteStream(fileNameOut));
    fs.unlink(file.path, (err) => console.log(err));
    return fileName;
    } catch(e){
        fs.unlink(file.path, (err) => console.log(err));
        console.log(e);
    }
}

const imgFile = (file) => saveFile(file, extensionesPermitidas);

module.exports = {imgFile}