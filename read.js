var article = "";
var save = document.getElementById("save");
var email = document.getElementById("email");
var storageData = JSON.parse(localStorage.getItem("data"));

localStorage.getItem("data");

var processText = (el) => {
  var retVal = "";

  switch (el.type) {
    case "header":
      retVal += `<h${el.data.level}>`;
      retVal += el.data.text;
      retVal += `</h${el.data.level}>`;

      return retVal;
    case "paragraph":
      retVal += `<p>`;
      retVal += el.data.text;
      retVal += `</p>`;

      return retVal;
    case "list":
      retVal += `<ul>`;
      el.data.items.forEach((item) => {
        retVal += `<li>${item}</li>`;
      });
      retVal += `</ul>`;

      return retVal;
    default:
      return "null";
  }
};

var setArticleVar = (data) => {
  data.forEach((element) => {
    article += processText(element);
  });

  article = article.replaceAll("\n", " ");

  document.querySelector(".modal-body").innerHTML = article;
};

setArticleVar(storageData.blocks);

function processHeader(el) {
  var retVal = "";

  retVal += `<h${el.data.level}>`;
  retVal += el.data.text;
  retVal += `</h${el.data.level}>`;

  return retVal;
}

var data = "";
function logData() {
  editor.isReady
    .then(() => {
      editor
        .save()
        .then((outputData) => {
          var title = outputData.blocks[0].data.text;
          console.log("Article data: ", outputData);
          localStorage.setItem(title, JSON.stringify(outputData));
          data = JSON.stringify(outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
      /** Do anything you need after editor initialization */
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  console.log(data);
}

function emailContent() {
  email.href = `mailto:dantonr@bdt.co.nz?body=${data}`;
}

save.addEventListener("click", logData);
email.addEventListener("click", emailContent);
