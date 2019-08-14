// code: https://github.com/firedevelop/id0000516-Google-SpreadSheet-Scripts.git
// video: https://youtu.be/EwxoVb9LgFY
// Google SpreadSheet: https://docs.google.com/spreadsheets/d/1AflG3VgCFdqz1dRbP0JwGBrc5xXL9kwRBk13yEpekTM/edit#gid=1671517193

var sheetName = "Products"; 
var ss = SpreadsheetApp.getActive();
var sheet = ss.getSheetByName(sheetName);

function onOpen(){
  SpreadsheetApp.getUi() 
  .createMenu('COMPANY')
  .addItem('Products Cleaner Data', 'findAndDelete')
  .addToUi();
}

function findAndDelete() {
  var findArray = ["CD","MP3","TODOS"];
  var rowsDelete = [];
  var data = sheet.getRange(2, 5, sheet.getLastRow()-1 ,1).getValues();

  for(var i=0; i<data.length; i++) {
    var cell = data[i][0].toUpperCase(); 
    var cellArray = cell.split(" / ");  
    Logger.log(cellArray);

    for (var j=0; j<cellArray.length; j++) {
      var value = cellArray[j];

      if(findArray.indexOf(value) != -1) {
        Logger.log(value);
        rowsDelete.unshift(2 + i);
        break;
      }
    }
  }

  for(i=0; i<rowsDelete.length ; i++) {
    var position = sheet.getRange(rowsDelete[i], 1, 1, 7);
    position.deleteCells(SpreadsheetApp.Dimension.ROWS);
  }   
}