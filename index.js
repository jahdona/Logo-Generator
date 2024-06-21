const fs= require('fs');
const inquirer=require('inquirer');
const {circle,square,triangle}=require('./lib/shapes');

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

const question=[
    {
        type:"input",
        name:"text",
        message:"TEXT: Enter up to three characters"

    }
]
const init =()=>{
    inquirer
    .prompt(question);
}
init();