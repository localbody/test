// var page = require('webpage').create(), system = require('system'), fs = require('fs')
// ;
// var url = 'http://10.186.4.50:3000/d-solo/FrLgM0cVk/site-settings?orgId=1&refresh=5s&theme=light&panelId=34';
// url = 'http://energy13.mogilev.energo.net//teplo/scheme/main.php';

// page.open(url, function (status) {
//     // Проверяем, была ли страница успешно загружена
//     if(status !== 'success') {
//         console.log('Network error');
//     } else {
//         console.log('Success');
//         console.log(system.args[1]);
//         // Ждем 60 секунд, прежде чем сохранить страницу
//         var output = system.args[1];
        
//         console.log(output);

//         window.setTimeout(function () {
//           page.render(output, {format: 'pdf'});
//           console.log('exit');

//           phantom.exit(0);
//         }, 0)

//         console.log('Finish');

//     }
// });

var page = new WebPage()
var fs = require('fs');

page.onLoadFinished = function() {
  console.log("page load finished");
  page.render('export.png');
  fs.write('1.html', page.content, 'w');
  phantom.exit();
};

page.open("http://10.186.4.50:3000/d-solo/FrLgM0cVk/site-settings?orgId=1&refresh=5s&theme=light&panelId=34", function() {
  page.evaluate(function() {
  });
});