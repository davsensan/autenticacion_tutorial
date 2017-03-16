import fs from 'fs';

driver.takeScreenshot().then(function(data){
           var base64Data = data.replace(/^data:image\/png;base64,/,"")
           fs.writeFile("screenshot_selenium/click_english.png", base64Data, 'base64', function(err) {
                if(err) console.log(err);
           });
        });