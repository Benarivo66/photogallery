const config = require ('../config/index');
const fs = require('fs');
const Photo = require('../model/photo');

async function createPhoto(req, res) {
    let result;
    try {
        if (req.file) {
            result = await config.cloudinary.uploader.upload(req.file.path);
            fs.unlinkSync(req.file.path);
        }
        const { name } = req.body;
        const obj = { name, createdAt: new Date(), imageUrl: result.url };
        const photo = await new Photo(obj).save();
        return res.status(201).json({ status: "Success", data: photo });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}


async function getPhoto(req, res) {
try {
    const photos = await Photo.find({});
    res.render('photos');
    return res.status(200).json({ status: "Success", data: photos});
} catch (error) {
    console.log('there is an error', error);
}
}

module.exports = {createPhoto, getPhoto} ;
