import React, { useState } from "react";
import ".././App.css";

function MemePage() {
  const [selectedMeme, setSelectedMeme] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState(null);

  // Define your memeTemplates array with valid template IDs
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

  const generateMemeUrl = "http://localhost:5004/api/generateMeme";

  const handleGenerateMeme = async () => {
    if (selectedMeme) {
      const memeData = {
        template: selectedMeme,
        topText,
        bottomText,
      };

      try {
        const response = await fetch(generateMemeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(memeData),
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setGeneratedMeme(url);
        } else {
          console.error("Error generating meme:", response.statusText);
        }
      } catch (error) {
        console.error("Error generating meme:", error);
      }
    }
  };

  const handleImageClick = () => {
    if (generatedMeme) {
      const link = document.createElement("a");
      link.href = generatedMeme;
      link.download = "generated-meme.png";
      link.click();
    }
  };

  return (
    <div className="MemePage">
      <header className="App-header">
        <h1 className="app-title">Meme Generator</h1>
        <h3>
          Please wait for the meme to load. This may take a while. If it still
          doesn't load, please pick another Meme Template.
        </h3>
        <div className="meme-form">
          <div className="input-container">
            <select
              className="input"
              value={selectedMeme}
              onChange={(e) => setSelectedMeme(e.target.value)}
            >
              <option value="">Select a meme template</option>
              {memeTemplates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>

            <input
              className="input"
              type="text"
              placeholder="Top Text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Bottom Text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>
          <button
            className="button generate-button"
            onClick={handleGenerateMeme}
          >
            <h3>Generate Meme</h3>
          </button>
        </div>
        {generatedMeme && (
          <div className="generated-meme-card">
            <div className="meme-card">
              <h2>Click anywhere on the image to download !</h2>
              <div className="snake-border">
                <a onClick={handleImageClick} download="generated-meme.png">
                  <img
                    className="generated-meme-image"
                    src={generatedMeme}
                    alt="Generated Meme"
                  />
                </a>
              </div>
              <h2>Enjoy your meme !!!</h2>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default MemePage;
