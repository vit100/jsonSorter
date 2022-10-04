var fs = require('fs');
var path = require('path')
var s = require('json-keys-sort');

var arg1 = process.argv[2];
if(!arg1){
    console.info('----------------- Error: missed required arg: json file to sort-------------');
    process.exit(1);
}

var arg2 = process.argv[3];
if(!arg2){
    arg2 = path.parse(arg1).name+'_sorted'+".json";
}

var data = fs.readFileSync(`${path.join(__dirname,arg1)}`,{encoding: "utf-8"});
console.log(data);

let result={};
try {
    result = s.sort(JSON.parse(data));
   
} catch (error) {
   console.error('Can not parse source file.\n',error);
   process.exit(2); 
}

fs.writeFileSync(`${path.join(__dirname,arg2)}`, JSON.stringify(result,null,2));