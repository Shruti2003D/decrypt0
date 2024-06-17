const express = require('express');
const multer = require('multer');
const ExpertCourse = require('../models/CourseExp'); 

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/add-courses-expert', upload.single('expcImage'), async (req, res) => {
    const { 
        expcTitle, 
        expcfees, 
        expcinstructor, 
        expcinstructordomain, 
        expcwhatlearn, 
        expcwhofor, 
        expcsyllabus 
    } = req.body;

    let expcImage = null;

    if (req.file) {
        expcImage = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    const newCourse = new ExpertCourse({
        expcTitle,
        expcfees,
        expcinstructor,
        expcinstructordomain,
        expcwhatlearn,
        expcwhofor,
        expcsyllabus,
        expcImage
    });

    try {
        await newCourse.save();
        res.status(200).send('Expert course saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving expert course');
    }
});

module.exports = router;
