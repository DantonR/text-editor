var storageData = JSON.parse(localStorage.getItem("data"));

var editor = new EditorJS({
  data: storageData,
  // Other configuration properties
  tools: {
    // image: {
    //   class: ImageTool,
    //   config: {
    //     endpoints: {
    //       byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
    //       byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
    //     },
    //   },
    // },

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
