function generateScript(type) {
    const topic = document.getElementById("topic").value.trim();
    const output = document.getElementById("output");

    if (!topic) {
        output.innerText = "Enter a topic first!";
        return;
    }

    let hooks = [];
    let endings = [];

    if (type === "reel") {
        hooks = [
            `Nobody talks about ${topic}, but they should.`,
            `This is why ${topic} is ruining your life.`,
            `I wish I knew this about ${topic} earlier.`,
            `The dark truth about ${topic}…`,
            `Stop scrolling if you care about ${topic}.`
        ];

        endings = [
            `Now you know the truth.`,
            `Save this before it's deleted.`,
            `Most people ignore this.`,
            `Follow for more real talk.`,
            `Try this today and thank me later.`
        ];
    }

    if (type === "shorts") {
        hooks = [
            `3 facts about ${topic} in 10 seconds`,
            `You won’t believe this about ${topic}`,
            `${topic} explained simply`,
            `The biggest mistake in ${topic}`,
            `${topic} but no one understands this`
        ];

        endings = [
            `Mind blown?`,
            `Now you know.`,
            `Share this.`,
            `That’s crazy right?`,
            `Comment your opinion.`
        ];
    }

    if (type === "story") {
        hooks = [
            `At 3AM something happened… related to ${topic}`,
            `I never believed in ${topic} until today`,
            `The last message about ${topic}…`,
            `Everyone ignored the warning about ${topic}`,
            `I shouldn’t have searched ${topic}`
        ];

        endings = [
            `And then everything went silent.`,
            `I still can't explain it.`,
            `Would you survive this?`,
            `This changed me forever.`,
            `I’m never doing that again.`
        ];
    }

    const hook = hooks[Math.floor(Math.random() * hooks.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    output.innerText = hook + "\n\n" + ending;
}
