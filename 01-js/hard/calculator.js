/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result = 0;
  }
  add(to_add){
    this.result += to_add;
  }
  subtract(to_subtract){
    this.result -= to_subtract;
  }
  multiply(to_multiply){
    this.result *= to_multiply;
  }
  divide(to_divide){
    if(to_divide == 0) throw Error();
    this.result /= to_divide;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  prec(c){
    if(c == '^') return 3;
    else if(c == '/' || c == '*') return 2;
    else if(c == '+' || c == '-') return 1;
    else return -1;
  }
  calculate(exp){
    let newexp = exp.split('');
    let newexp = []
    let st = [];
    let postfix = [];
    let expr = /[^0-9+*-/()]+/g;
    newexp.forEach((element) => {
      if(expr.test(element)) throw new Error();
    })
    for(let i=0; i<newexp.length; i++){
      let c = newexp[i];
      if(/[0-9]+/.test(c)) postfix.push(c);
      else if(c == '(') st.push('(');
      else if(c == ')'){
        while(st[st.length - 1] != '('){
          postfix.push(st[st.length - 1]);
          st.pop();
        }
        st.pop();
      }
      else{
        if(this.prec(c) == -1) throw Error();
        while(st.length != 0 && this.prec(c) <= this.prec(st[st.length - 1])){
          postfix += st[st.length - 1];
          st.pop();
        }
        st.push(c);
      }
    }

    while(st.length != 0){
      postfix += st[st.length - 1];
      st.pop();
    }

    let solve_stack = [];
    for(let i=0; i<postfix.length; i++){
      if(/[0-9]/.test(postfix[i])){
        solve_stack.push(parseFloat(postfix[i]));
      }
      else{
        let op2 = solve_stack.pop();
        let op1 = solve_stack.pop();

        if(postfix[i] == '+') solve_stack.push(op1 + op2);
        else if(postfix[i] == '-') solve_stack.push(op1 - op2);
        else if(postfix[i] == '*') solve_stack.push(op1 * op2);
        else if(postfix[i] == '/') solve_stack.push(op1 / op2);
      }
    }

    console.log(solve_stack);
    console.log(solve_stack.length);

    return solve_stack[0];

  }
}

module.exports = Calculator;
