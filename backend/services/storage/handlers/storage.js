const fs = require('fs');
const strings = require('../../../pkg/strings');


const storeRecipeFile = async (req, res) => {
    console.log(req.files);

    let allowedTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/gif'
    ];

    if (!allowedTypes.includes(req.files.document.mimetype)) {
        return res.status(400).send('Bad Requst!: Bad Type');
    }

    let allowedSize = 1 * 1024 * 1024;

    if (allowedSize <= req.files.document.size) {
        return res.status(400).send('Bad Request!: File too large!');
    }

    //check if user directory exusts if not create
    let recipeDir = `${__dirname}/../uploads/recipes`;
    if (!fs.existsSync(recipeDir)) {
        fs.mkdirSync(recipeDir);
    }

    let fileName = `${strings.makeID(8)}_${req.files.document.name.replace(/ /g, '_')}`
    let filePath = `${recipeDir}/${fileName}`;

    try {
        await req.files.document.mv(filePath);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }

    res.status(200).send(fileName);
};

const storeProfileFile = async (req, res) => {
    console.log(req.files);

    let allowedTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/gif'
    ];

    if (!allowedTypes.includes(req.files.document.mimetype)) {
        return res.status(400).send('Bad Requst!: Bad Type');
    }

    let allowedSize = 1 * 1024 * 1024;

    if (allowedSize <= req.files.document.size) {
        return res.status(400).send('Bad Request!: File too large!');
    }

    //check if user directory exusts if not create
    let avatarDir = `${__dirname}/../uploads/avatars`;
    if (!fs.existsSync(avatarDir)) {
        fs.mkdirSync(avatarDir);
    }

    let fileName = `${strings.makeID(8)}_${req.files.document.name.replace(/ /g, '_')}`
    let filePath = `${avatarDir}/${fileName}`;

    try {
        await req.files.document.mv(filePath);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }

    res.status(200).send(fileName);
};



const getRecipeFile = (req, res) => {
    let recipeDir = `${__dirname}/../uploads/recipes`
    let fileName = req.params.fid;
    let filePath = `${recipeDir}/${fileName}`;
    
    if (!fs.existsSync(filePath)) {
        res.status(404).send('File Not Found');
    }
    res.download(filePath);
};

const getProfileFile = (req, res) => {
    let avatarDir = `${__dirname}/../uploads/avatars`
    let fileName = req.params.fid;
    let filePath = `${avatarDir}/${fileName}`;
    
    if (!fs.existsSync(filePath)) {
        res.status(404).send('File Not Found');
    }
    res.download(filePath);
};

module.exports = {
    storeRecipeFile,
    getRecipeFile,
    getProfileFile,
    storeProfileFile
};