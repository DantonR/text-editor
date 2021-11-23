console.log(
  "%cThis will be formatted with blue text",
  "color: white; font-size: 16px; background: green; padding: 16px; font-family: 'Roboto';"
);
var storageData = JSON.parse(localStorage.getItem("data"));
var save = document.getElementById("save");
var email = document.getElementById("email");

var editor = new EditorJS({
  data: storageData,
  // Other configuration properties
  tools: {
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
          byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
        },
      },
    },

    header: {
      class: Header,
      shortcut: "CTRL+SHIFT+H",
      config: {
        placeholder: "Enter a header",
        levels: [1, 2, 3, 4],
        defaultLevel: 3,
      },
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
  },
  placeholder: "Article Content Here",
  /**
   * onReady callback
   */
  onReady: () => {},
  onChange: () => {},
});

var data = "";
function logData() {
  editor.isReady
    .then(() => {
      editor
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          localStorage.setItem("data", JSON.stringify(outputData));
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
