function fetchAPI(){

var url = 'http://rolz.org/api/?'
    + '6v6'
    + '.json'
var response = UrlFetchApp.fetch(url);
  Logger.log(response);
  
  var json = response.getContentText();
var data = JSON.parse(json);
  var equ = " ="
Logger.log(data.result + equ + data.details);

  }
