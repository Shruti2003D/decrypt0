const express = require('express');
const multer = require('multer');
const Career = require('../models/Career');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/add-career', upload.single('jobImage'), async (req, res) => {
    const { jobTitle, company, location, jobDescription, responsibilities, qualifications, howToApply, contactEmail, applicationDeadline } = req.body;
    let jobImage = null;

    if (req.file) {
        jobImage = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    const newCareer = new Career({
        jobTitle,
        company,
        location,
        jobDescription,
        responsibilities,
        qualifications,
        howToApply,
        contactEmail,
        applicationDeadline,
        jobImage
    });

    try {
        await newCareer.save();
        // console.log('Career opportunity saved:', savedCareer);
        res.status(200).send('Career opportunity saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving career opportunity');
    }
});

module.exports = router;
