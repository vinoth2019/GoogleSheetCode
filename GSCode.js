 const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1fKFAZW18t9UxoCi8jp4IoatgA04PLs0_KRpDrIzBb9Y/edit?usp=sharing");
 //if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("Sheet1");
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.Name,data.Email,data.Message]);
  return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
}

function doGet(e){
  let data = e.parameter;
  var rows = sheet.getRange(2,1, sheet.getLastRow()-1,sheet.getLastColumn());
  var rdata = [];

  for(let i =0; i<rows.length; i++){

    var row = rows[i];
    var record = {};

    record['Name'] = row[0];
    record['Email'] = row[1];
    record['Message'] = row[2];

    data.push(record);
  } 
  var result = JSON.stringify(rdata);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}