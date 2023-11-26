const fs = require('fs');
const replaceThis = "ali"
const replaceWith = "haris"
const preview = true
try {
   fs.readdir(".", (err, data)=>{

         
         for(let index = 0; index < data.length; index++){
             const item = data[index];
             let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
             if (!preview) {

                fs.rename("/data" + item, newFile, ()=>{
                    console.log("rename success")
                })
             }
             else{
                if("/data" + item !== newFile) console.log("/data" + item + "will be renamed to" + newFile )
             }
           
         }
         
  })
}catch (err) {
  console.error(err);
}