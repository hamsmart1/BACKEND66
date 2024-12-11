const express = require('express')
const app = express ()

let fs = require('fs/promises')

async function createRobotFile() {
   const head =await fs.readFile('head.txt','utf8')
   const body =await fs.readFile('body.txt','utf8')
   const leg  =await fs.readFile('leg.txt','utf8')
   const feet =await fs.readFile('feet.txt','utf8')

   const text = head + '\n' + body + '\n' + leg + '\n' + feet + '\n'
   await fs.writeFile('robot.txt',text,'utf8') 
}
//callfunction
createRobotFile()

//fs.readFile('head.txt','utf8',(err,data)=>{
    //var text = data + '\n';
    //fs.readFile('body.txt','utf8',(err,data)=>{
        //text +=data + '\n'
        //fs.readFile('leg.txt','utf8',(err,data)=>{
            //text +=data + '\n'
            //fs.readFile('feet.txt','utf8',(err,data)=>{
                //text +=data
                //fs.writeFile('robot.txt',text,'utf8',(err)=>{
                    //if(err) console.error("cannot write file")
                       // else console.log("write file robot.txt complete")
        
        //})
    //})
//})
//})
//})
    //var text = ""
    //if (!err){
    //    text += data;
    //    console.log(data)
    //}
    //else console.error("Error = ",err.massage)
//})



app.listen(3000,() => {
    console.log("Server started on port 3000")
})