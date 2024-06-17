const express = require('express');
const multer = require('multer');
const BeginnerCourse = require('../models/CourseBeg');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/add-courses-beginner', upload.single('begcImage'), async (req, res) => {
    const { 
        begcTitle, 
        begcfees, 
        begcinstructor, 
        begcinstructordomain, 
        begcwhatlearn, 
        begcwhofor, 
        begcsyllabus 
    } = req.body;

    let begcImage = null;

    if (req.file) {
        begcImage = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    const newCourse = new BeginnerCourse({
        begcTitle,
        begcfees,
        begcinstructor,
        begcinstructordomain,
        begcwhatlearn,
        begcwhofor,
        begcsyllabus,
        begcImage
    });

    try {
        await newCourse.save();
        res.status(200).send('Beginner course saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving beginner course');
    }
});

module.exports = router;
