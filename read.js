console.log(
  "%cThis will be formatted with blue text",
  "color: white; font-size: 16px; background: black; padding: 16px;"
);

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.blocks.forEach((element) => {
      console.log(processText(element));
    });
  });

function processHeader(el) {
  var retVal = "";

  retVal += `<h${el.data.level}>`;
  retVal += el.data.text;
  retVal += `</h${el.data.level}>`;

  return retVal;
}

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
    default:
      return "null";
  }
};
