function test (params){
   // document.getElementById("info").innerText = "Bangladesh";
   setText("info", "Bangladesh");
   const sum = toNumber("input1");
   console.log(sum)

}

function test2 (params){
    setText("info", "Bangladesh")
}

function test3 (params){
    setText("info", "Bangladesh")
}

function setText(id,text){
    document.getElementById(id).innerText = text;
}

function toNumber(id){
    const result = document.getElementById(id).value;
    return parseInt(result);
}

functionhandleClick()
{
    console.log(hello);
}