const fs= require('fs');
const inquirer=require('inquirer');
const {Circle,Square,Triangle}=require('./lib/shapes.js');

class Logo{
    constructor(){
        this.textElement='';
        this.shapeElement='';
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement=shape.render();
    }
}
//Define a series of questions stored in array to be used by the inquirer library 
const question=[
   
    {
        type:"input",
        name:"text",
        message:"TEXT: Enter up to three characters"

    },
    {
        type:"input",
        name:'color',
        message:'TEXT COLOR: Enter a color key word (Or an hexadecimal color code)'
    },
    {
        type:"input",
        name:"shape-color",
        message:"SHAPE COLOR:Enter a color key word or an Hexadecimal color code"
    },
    {   type:"list",
         name:"shape",
         message: "Choose which Pixel Image you would like?",
         choices:["Circle", "Square", "Triangle"]

    },
   
];
//Function to write data to file
const writeToFile=(fileName,data)=>{
    console.log(`Writing [${data}] to file [${fileName}]`)
    fs.writeFile(fileName,data,(error)=>{
        if(error){
            return console.log(err);
        }
        console.log("A logo.svg is generated successfully")
    })
}
async function  init(){
    let svgString="";
    let svgFile="logo.svg";
    const answers=await inquirer.prompt(question);
    let userText="";
    if(answers.text.length>0&&answers.text.length<4){
        userText=answers.text;
    }
    else{
        console.log("Invalid Logo Name! Please provide 1-3 characters ")
    }
    let fontColor=answers['color'];
    console.log(`Font color selected ${fontColor}`)
    let shapeColor =answers['shape-color'];
    console.log(`Selected Shape color ${shapeColor} `);
    let shapeStyle=answers['shape']
let userShape;
switch(shapeStyle){
    case "Circle":
        userShape=new Circle();
        break;
    case "Square":
        userShape= new Square();
        break;
    default:
        userShape=new Triangle()
        break;
}
userShape.setColor(shapeColor);
let log=new Logo();
    log.setTextElement(userText,fontColor);
    log.setShapeElement(userShape);
    svgString=log.render();
    writeToFile(svgFile,svgString);
}
init();