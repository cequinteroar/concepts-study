console.log("===============================================");
console.log("               Scope explanation               ");
console.log("===============================================");
var a = "This variable is a global variable (global scope)"; 
console.log("Global Scope: ", this);
console.log("var a - global: ", this.a);

//  Block scope
{
    console.log("**************************");
    console.log(" Local scope: Block Scope ");
    console.log("**************************");
    var a = "This is a, but local (block) scoped";
    console.log("Block scope: ", this);
    console.log("var a - global: ", this.a);
    console.log("var a - local: ", a);
}
