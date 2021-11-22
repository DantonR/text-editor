var editor = new EditorJS({
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
});

var saveState = document.getElementById("saveState");
saveState.addEventListener("click", function () {});

function log() {
  var codexEditor = document.querySelector(".codex-editor");

  console.log(codexEditor.innerHTML);
}

var data = [];

var test = document.getElementById("test");
test.addEventListener("click", function () {
  editor.isReady
    .then(() => {
      console.log("Editor.js is ready to work!");
      editor
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          data = outputData.blocks;
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
});
