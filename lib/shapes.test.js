const {Circle,Square,Triangle}=require("./shapes")

describe('Circle shape',()=>{
    it('Done when it could shape a circle',()=>{
        const shape=new Circle();
        let color=('blue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100" width="100" fill="${color}"></circle>`);
    });
});

describe('Square shape',()=>{
    it('Done when it could shape a Square',()=>{
        const shape =new Square();
        let color=('yellow');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="200" fill="${color}"></rect>`);

    });
});

describe('Triangle shape',()=>{
    it('Done when it could shape a triangle',()=>{
        const shape=new Triangle();
        let color=('red');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${color}"></polygon>`)
    })
})