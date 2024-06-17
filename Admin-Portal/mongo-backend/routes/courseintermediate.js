const express = require('express');
const multer = require('multer');
const IntermediateCourse = require('../models/CourseInt'); // Update model import

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/add-courses-intermediate', upload.single('intcImage'), async (req, res) => {
    const { 
        intcTitle, 
        intcfees, 
        intcinstructor, 
        intcinstructordomain, 
        intcwhatlearn, 
        intcwhofor, 
        intcsyllabus 
    } = req.body;

    let intcImage = null;

    if (req.file) {
        intcImage = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    const newCourse = new IntermediateCourse({
        intcTitle,
        intcfees,
        intcinstructor,
        intcinstructordomain,
        intcwhatlearn,
        intcwhofor,
        intcsyllabus,
        intcImage
    });

    try {
        await newCourse.save();
        res.status(200).send('Intermediate course saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving intermediate course');
    }
});

module.exports = router;
