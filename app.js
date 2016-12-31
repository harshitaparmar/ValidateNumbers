var fs = require('fs');
//include all files of directory
console.log("Validate mobile numbers : ");
var phoneno = /^\+?(91)?[ ]?([9,8,7]{1})\)?([0-9]{9})$/;
fs.readdirSync('./Dummyfiles').forEach(function(file){
	// check if the file is txt or not
	if(file.indexOf('.txt'))
    fs.readFileSync('./Dummyfiles/' + file).toString().split(/\r?\n/).forEach(function(line){
        if(line.match(phoneno))
          {
            line=line.toString();
            line=line.replace('+91','');
            console.log(line);
          }
    });
   
});// end for each