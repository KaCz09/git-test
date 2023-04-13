function testJS() {
    let textarea = document.getElementsByTagName('textarea');

    function test() {
        let a = 1;
        let aaa = 111;
    }

    function newFunction() {
        let b = 2;
    }

    function color() {
        textarea[2].style.backgroundColor = 'rgb(50,255,50)';
    }

    function addText() {
        textarea[2].value = "Fragment tekstu";
    }

    addText();
    color();
}

testJS();