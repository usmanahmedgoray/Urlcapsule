const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const URL = require('../Models/URL');


// Route 01 : Method Post => localhost:8001/api/url.

// Create a Short Key and save it in the Database 
router.post('/url', async (req, res) => {
    try {
        const {url} = req.body;
        const shortUrl = shortid(url)
        const URLSave = await URL.create({
            RedirectUrl: url,
            Shortid: shortUrl,
        })
        res.json(URLSave)
    } catch (error) {
        res.status(500).json({ msg: error });
    }


});

// Route 02 : Method Get => localhost:8001/api/:shortid.

// Find by shortid and update it with timeStamp
router.get('/url/:shortid', async (req, res) => {
    try {
        const shortid = req.params.shortid;
        const redirect = await URL.findOneAndUpdate({ Shortid: shortid }, { $push: { visitHistory: [{ timeStamp: Date.now() }] } })
        res.redirect(redirect.RedirectUrl)
    } catch (error) {
        res.status(500).json({ msg: error });
    }

})

// Route 03 : Method Get => localhost:8001/api/analytics/:shortid.

// show analytics which is stores in Database in redirect time

router.get('/url/analytics/:shortid', async (req, res) => {
    try {
        const shortid = req.params.shortid;
        const redirect = await URL.findOne({ Shortid: shortid })
        res.json(redirect)
    } catch (error) {
        res.status(500).json({ msg: error });
    }

})

module.exports = router;