var editor = new EditorJS({
  // Other configuration properties
  tools: {
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

function createEditor() {}

function log() {
  data.forEach((element) => {
    console.log(element);
  });
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
