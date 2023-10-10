const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define memeTemplates array with valid template IDs
const memeTemplates = [
  { id: "aag", name: "Distracted Boyfriend" },
  { id: "bad", name: "Bad Luck Brian" },
  { id: "boromir", name: "One Does Not Simply" },
  { id: "buzz", name: "Buzz Lightyear Everywhere" },
  { id: "drake", name: "Drake Hotline Bling" },
  { id: "woman-yelling-cat", name: "Woman Yelling at a Cat" },
  { id: "two-buttons", name: "Two Buttons" },
  { id: "change-my-mind", name: "Change My Mind" },
  { id: "expanding-brain", name: "Expanding Brain" },
  { id: "is-this-a-pigeon", name: "Is This a Pigeon?" },
  { id: "spongebob-imagination", name: "SpongeBob Imagination" },
  { id: "first-world-problems", name: "First World Problems" },
  { id: "pikachu-surprised", name: "Pikachu Surprised" },
  { id: "mocking-spongebob", name: "Mocking SpongeBob" },
  { id: "roll-safe", name: "Roll Safe" },
  { id: "success", name: "Success Kid" },
  { id: "tenguy", name: "10 Guy" },
  { id: "toohigh", name: "The Rent Is Too Damn High" },
  { id: "touch", name: "Principal Skinner" },
  { id: "tried", name: "At Least You Tried" },
  { id: "trump", name: "Donald Trump" },
  { id: "ugandanknuck", name: "Ugandan Knuckles" },
  { id: "vince", name: "Vince McMahon Reaction" },
  { id: "wallet", name: "Patrick Star's Wallet" },
  { id: "waygd", name: "What Are Ya Gonna Do?" },
  { id: "wddth", name: "We Don't Do That Here" },
  { id: "whatyear", name: "What Year Is It?" },
  { id: "winter", name: "Winter is coming" },
  { id: "wkh", name: "Who Killed Hannibal" },
  { id: "woman-cat", name: "Woman Yelling at a Cat" },
  { id: "wonka", name: "Condescending Wonka" },
  { id: "worst", name: "The Worst Day Of Your Life So Far" },
  { id: "xy", name: "X all the Y" },
  { id: "yallgot", name: "Y'all Got Any More of Them" },
  { id: "yodawg", name: "Xzibit Yo Dawg" },
  { id: "yuno", name: "Y U NO Guy" },
  { id: "zero-wing", name: "All Your Base Are Belong to Us" },
  // Add more meme templates here
];

app.post("/api/generateMeme", async (req, res) => {
  const { template, topText, bottomText } = req.body;

  // Check if the provided meme template is valid
  if (!memeTemplates.some((item) => item.id === template)) {
    return res.status(400).json({ error: "Invalid meme template." });
  }

  try {
    const response = await axios.get(
      `https://api.memegen.link/images/${template}/${encodeURIComponent(
        topText
      )}/${encodeURIComponent(bottomText)}.png`,
      { responseType: "arraybuffer" }
    );

    res.set("Content-Type", "image/png");
    res.set("Content-Disposition", 'attachment; filename="generated-meme.png"');
    res.send(response.data);
  } catch (error) {
    console.error("Error generating meme:", error);
    res
      .status(500)
      .json({ error: "An error occurred while generating the meme." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
