var spreadsheet = SpreadsheetApp.openById("PASTE_SPREADSHEET_ID_HERE");
var sheet = spreadsheet.getSheets()[0];
var value = sheet.getDataRange().getValues();

var output = [];

function doGet() {
  for (let i = 0; i < value.length; i++) {
    var row = {};
    row["comment"] = value[i][0];
    output.push(row);
  }
  return ContentService.createTextOutput(
    JSON.stringify({ data: output })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var jsonData = JSON.parse(e.postData.contents);
  var comment = jsonData.comment;
  sheet.appendRow([comment]);
  return ContentService.createTextOutput("Comment added");
}
