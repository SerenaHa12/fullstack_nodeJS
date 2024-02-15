function colorizeText() {
  const textElement = document.getElementById("myText");
  const text = textElement.innerText;

  // split word
  const words = text.split(" ");

  let currentWordIndex = 0;

  function changeColor() {
    // current word index
    const currentWord = words[currentWordIndex];

    let newText = "";
    for (let i = 0; i < words.length; i++) {
      if (i === currentWordIndex) {
        newText += `<span style="color: red;">${words[i]}</span>`;
      } else {
        newText += words[i];
      }
      newText += " ";
    }

    textElement.innerHTML = newText.trim();
    currentWordIndex++;

    // return loop
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
    }
  }

  // change time here
  setInterval(changeColor, 1000);
  //setInterval(changeColor, 500);
  //setInterval(changeColor, 4000);
}

window.onload = colorizeText;
