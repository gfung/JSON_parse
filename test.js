//js troubleshooting
var test_json = {
  "nest1": {
    "nest2\_1":"end of nest2",
    "nest2\_2":{
      "nest3\_1": "end nest of 3"
    }
  },
  "no\_nest": "end of no nest",
  "array": [{'arraytest': "i am a string inside an object inside an array"},"test string in array"]
}

/**
* JSON Reference
*
* Object.keys(json) returns an array of unnested keys
*
*/

//recursive function
function json_parsing(json_file) {
  //loop the first level of keys and check if their value is an object type
  for (var i=0; i < Object.keys(json_file).length; i++){
    if(typeof json_file[Object.keys(json_file)[i]] == "object"){
      //we are here if this key's value is an object (array or json notation object)
      //set next nest key
      var nextlevel = json_file[Object.keys(json_file)[i]];
      //recursively call self to keep going down the layers
      json_parsing(nextlevel);
    } else{
      //we are not an object
      //console.log out
      var key = Object.keys(json_file)[i];
      var value = json_file[Object.keys(json_file)[i]];
      console.log("key/pair ===============================")
      console.log("{ \""+key+"\" : \""+value+"\" }")
    }
  }
}

json_parsing(test_json);

