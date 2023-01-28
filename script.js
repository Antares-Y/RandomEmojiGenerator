const button = document.getElementById("btn");
const text = document.querySelector(".emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=25125fcaa5f332c4c579abc949813f75678ebeb6"
  );
  let data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

button.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  button.innerText = emoji[randomNum].emojiName;
  text.innerText = emoji[randomNum].emojiCode;
});
