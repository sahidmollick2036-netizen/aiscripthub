async function generateScript(type) {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("output");

    output.innerHTML = "Generating... ⏳";

    let prompt = "";

    if (type === "reels") {
        prompt = `Write a viral Instagram reel script about: ${input}. Short, emotional and catchy.`;
    }

    if (type === "shorts") {
        prompt = `Write a YouTube shorts script with a strong hook about: ${input}. Max 120 words.`;
    }

    if (type === "story") {
        prompt = `Write a short engaging story about: ${input}. Keep it interesting and simple.`;
    }

    try {
        const response = await fetch("https://text.pollinations.ai/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt })
        });

        const text = await response.text();
        output.innerHTML = text.replace(/\n/g, "<br>");

    } catch (err) {
        output.innerHTML = "Error generating script 😢 Try again.";
    }
}
