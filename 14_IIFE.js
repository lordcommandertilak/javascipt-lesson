// Immediately Invoked Function  Expression (IIFE)
// IIFE are use as solution of Global polutions of defive variables. to remove the declaration
(function game(){
    // named IIFE
    console.log(`DB Connected`);
    
})();
// in IIFE it doesn't know when to stop the execution.
// Therefore, ending is to be included ";" semi-colomn
// () //1st parentesis for function // () 2nd parentesis for execution

( () => {
    console.log(`DB CONNECTED TWO`);
    
})();

( (name) => {
    console.log(`DB CONNECTED Three ${name}`);
    
})('Luffy');