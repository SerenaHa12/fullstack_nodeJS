var content = document.querySelector(".content");
var title = document.querySelector(".title");

var newBtn = document.querySelector(".new");
var pdfBtn = document.querySelector(".pdf");
var txtBtn = document.querySelector(".txt");

var boldBtn = document.querySelector(".bold");
var underlineBtn = document.querySelector(".underline");
var italicBtn = document.querySelector(".italic");
var colorBtn = document.querySelector(".color");

var wordCount = document.querySelector("#word-count");
var charCount = document.querySelector("#char-count");

// file function
newBtn.addEventListener("click", function () {
  content.innerHTML = "";
  updateCount();
});

pdfBtn.addEventListener("click", function () {
  html2pdf().from(content).save(title.value);
});

txtBtn.addEventListener("click", function () {
  var link = document.createElement("a");
  var blob = new Blob([content.innerText]);
  var url = URL.createObjectURL(blob);
  link.href = url;
  link.download = title.value + ".txt";
  link.click();
});

// text function
boldBtn.addEventListener("click", function () {
  document.execCommand("bold");
  updateCount();
});

underlineBtn.addEventListener("click", function () {
  document.execCommand("underline");
  updateCount();
});

italicBtn.addEventListener("click", function () {
  document.execCommand("italic");
  updateCount();
});

colorBtn.addEventListener("input", function () {
  document.execCommand("foreColor", false, colorBtn.value);
  updateCount();
});

// Word and character count function
function updateCount() {
  var text = content.textContent;
  var words = text.split(/\s+/).filter(Boolean);
  var numWords = words.length;
  var numChars = text.length;
  wordCount.textContent = numWords;
  charCount.textContent = numChars;
}
content.addEventListener("input", updateCount);
updateCount();
