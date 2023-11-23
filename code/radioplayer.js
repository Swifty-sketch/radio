const radiopplayerEl = document.getElementById("radioplayer");

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

async function getApi() {
    const response = await fetch("https://api.sr.se/api/v2/channels/?format=json");
    const data = await response.json();

    console.log(data);

    data.channels.forEach((channel) => {
        const containerEl = document.createElement("div");
        const imgEl = document.createElement("img");
        const channelNameEl = document.createElement("div");
        const audiotagEl = document.createElement("div");
        const titleAudioEl = document.createElement("div");

        containerEl.style.backgroundColor = `#${channel.color}`;
        containerEl.style.display = "flex";
        containerEl.style.margin = "20px auto";
        containerEl.style.alignContent = "center";
        containerEl.style.width = "500px";
        imgEl.src = channel.image;
        imgEl.width = "150";
        imgEl.height = "150";

        channelNameEl.innerHTML = `<h1>${channel.name}</h1>`;
        channelNameEl.style.fontFamily = "sans-serif";
        audiotagEl.innerHTML = `<audio controls> <source src="${channel.liveaudio.url}" type="audio/mpeg"> </audio>`;
        titleAudioEl.style.marginLeft = "15px";


        radiopplayerEl.appendChild(containerEl);
        containerEl.appendChild(imgEl);
        containerEl.appendChild(titleAudioEl);
        titleAudioEl.appendChild(channelNameEl);
        titleAudioEl.appendChild(audiotagEl);

    });
}

getApi();