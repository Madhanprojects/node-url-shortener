const { nanoid } = require("nanoid");
const URL = require("../models/url.js");
async function GetTheWeb(req, res) {
    try {
        const surl = req.params.surl;   // get shortId from URL

        const data = await URL.findOne({ shortId: surl });

        if (!data) {
            return res.status(404).send("URL not found");
        }

        // Redirect to original URL
        res.redirect(data.originalUrl);

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}
async function generateNewUrl(req, res) {

    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: "No URL is entered" });
    }

    const id = nanoid(8);

    await URL.create({
    shortId: id,
    originalUrl: body.url,
});

    return res.json({ id });
}

module.exports = {
    generateNewUrl,
    GetTheWeb,
};