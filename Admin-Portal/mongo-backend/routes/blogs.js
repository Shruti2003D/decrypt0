
// module.exports = router;
const express = require('express');
const multer = require('multer');
const Blog = require('../models/Blog');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to add a new blog
router.post('/add-blog', upload.single('blogImage'), async (req, res) => {
    const { dateNumber, postTitle, author, category, blogadditional, postExcerpt } = req.body;
    let blogImage = null;

    if (req.file) {
        blogImage = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    }

    const newBlog = new Blog({
        dateNumber,
        postTitle,
        author,
        category,
        blogadditional,
        postExcerpt,
        blogImage
    });

    try {
        await newBlog.save();
        res.status(200).send('Blog saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving blog');
    }
});


module.exports = router;
