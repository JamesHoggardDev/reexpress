const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ 
        "users": [
            {
                "name": "Vikrum",
                "num_comms": "015",
                "comment": "I agree.",
                "objectID": "98",
            },
            {
                "name": "Aaron",
                "num_comms": "051",
                "comment": "I would definitely recommend",
                "objectID": "76",
            },
            {
                "name": "Christina",
                "num_comms": "281",
                "comment": "Page 309 of the instructions covers the procedure for VoIP usage. ",
                "objectID": "66",
            },
            {
                "name": "Sarah",
                "num_comms": "101",
                "comment": "They offer up to 1-Year of Ink In-box",
                "objectID": "81",
            },
            {
                "name": "Rhonda",
                "num_comms": "123",
                "comment": "It works with my iMac, iPad and iPhone.",
                "objectID": "08",
            },
            {
                "name": "Danny",
                "num_comms": "044",
                "comment": "I don't like the setup",
                "objectID": "87",
            },
            {
                "name": "Cecilia",
                "num_comms": "143",
                "comment": "It's great to have",
                "objectID": "116",
            },
            {
                "name": "Danny",
                "num_comms": "046",
                "comment": "I like the setup and design",
                "objectID": "28",
            },
            {
                "name": "Jonas",
                "num_comms": "120",
                "comment": "This is just what I needed.",
                "objectID": "106",
            },
        ],
});
})

app.listen(5000, () => {console.log("server listening on port 5000") })



