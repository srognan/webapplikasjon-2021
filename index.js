import expect from "expect";

let solved = 0;
let solvedBonus = 0;
const toSolve = 17;
const toSolveBonus = 9;

try {
  (function Demo() {
    // Use let (or const) instead of var to make the function succeed.
    const myDemo = "This is a demo";

    // Don't make changes below this line

    expect(myDemo).toBe("This is a demo");

    solved++;
  })();

  /// let (or const) ///

   (function UseLetOrConst() {
  //   // Use let (or const) instead of var to make the function succeed.
     const x = 1;
    if (true) {
       let x = 2;
     }

  //   // Don't make changes below this line

     expect(x).toBe(1);

     solved++;
   })();

  /// Template strings ///

  
	(function UseTemplateStrings1() {
		const who = 'World';
		const addOne = x => x + 1;
		
		// Rewrite the line below to use template literals.
		const greeting = `Hello ${who}! ${addOne(2)} times.`;

		// Don't make changes below this line	
		
		expect(greeting).toBe('Hello World! 3 times.');
		
		solved++;
	})();
  

  /// functions default parameters ///

  
	(function UseDefaultParameters() {
    
		// Correct the syntax errors in the function.
		function hello(a = `World`, b = `React`) {
			return ('Hello ' + (a) + '!');
			return ('Hello ' + (b) + '!');
		}

		// Don't make changes below this line	

		expect(hello()).toBe('Hello World!');
		expect(hello('React')).toBe('Hello React!');
		
		solved++;
	})();
	

  /// Rest parameter ///

  
	(function UseRestParameter() {
		// Add just one rest parameter and use the number of elements in this parameter 
		// (What is the name of that property?) in the return statement to let the test pass.
		function foo(a, b, ...c) {
			return a + b + c.length;
		}

		// Don't make changes below this line	
		
    expect(foo(1, 2, '1st', '2nd', '3rd')).toBe(1 + 2 + 3);
    expect(foo(1, 2, '1st', '2nd', '3rd', '4th')).toBe(1 + 2 + 4);
		
		solved++;
	})();
	

  /// Spread operator ///

  
	(function UseSpreadOperator1() {
		function add(a, b, c) {
			return a + b + c;
		}

		let values = [1, 3, 6];
		
		// Use spread operator to let the test pass.
		let result = add(...values);

		// Don't make changes below this line	
		
		expect(result).toBe(10);
		
		solved++;
	})();
	

  
	(function UseSpreadOperator2() {
		const arr1 = [1, 2, 3];
		const value = 4;
		const arr2 = [5, 6];
		
		// Change after = to let the test pass. DO NOT use concat or loops, but use the spread operator.
		let result = [...arr1, 4, ...arr2];

		// Don't make changes below this line	
		
		expect(result).toEqual([1, 2, 3, 4, 5, 6]);
		
		solved++;
	})();
	

  /// Arrow functions ///

   (function UseArrow1() {
  //   // Rewrite double as arrow function and make the test pass.
		const double = x => x * 2;  {
			return 3;
		 };
		 
	  expect(double(3)).toBe(6);
   	expect(double.toString()).toContain("=>");

     solved++;

   })();

  
	(function UseArrow2() {
		// Correct the errors in the arrow function.
		let add = (x, y) =>  x + y;

		// Don't make changes below this line	
		
		expect(add(3, 5)).toBe(8);
		// expect(add.toString()).toContain('=>');
		
		solved++;
	})();
	

  /// Destructuring ///

 
	(function UseArrayDestructuring1() {
		const arr = [1, 2, 3, 4, 5, 6];
		
		// Use array destructuring to change the 3 statements below into 1 statement.
		// Tip: Spread operator might be needed too.
		let a = arr[0];
		let b = arr[2];
		let c = arr.slice(3); 

		const [id, id2, ... leftOvers] = arr;
		console.log(id, id2 , ...leftOvers);
		 

		// Don't make changes below this line	
		
		expect(a).toEqual(1);
		expect(b).toEqual(3);
		expect(c).toEqual([4, 5, 6]);
		
		solved++;
	})();
	

  
	(function UseArrayDestructuring2() {
		let a = 1;
		let b = 2;
		
		// Use array destructuring to change the 3 statements below into 1 statement.
		// You should not need a temporary variable anymore.
		let tmp = a;
		a = b;
		b = tmp; 
		
		console.log(a, b)

		// Don't make changes below this line	
		
		expect(a).toEqual(2);
		expect(b).toEqual(1);
		
		solved++;
	})();
	

  
	(function UseObjectDestructuring1() {
		let obj = {
			name: 'Oslo',
			age: 985,
			add: (x, y) => x + y
		}
		
		// Use object destructuring to change the 3 statements below into 1 statement.
		
		let name = obj.name;
		let age = obj.age;
		let add = obj.add;

		console.log(name, age, 3);

		// Don't make changes below this line	
		
		expect(name).toBe('Oslo');
		expect(age).toBe(985);
		expect(add(1, 2)).toBe(3);
		
		solved++;
	})();
	

  
  (function UseParameterDestructuring1() {
    // Adjust the code to let the test succeed.
		
		const a = ['Oslo', 985];
		
		
		

    // Don't make changes below this line

    function f([name, age]) {
      expect(name).toBe('Oslo');
      expect(age).toBe(985);
    }

    f(a);

    solved++;
  })();
	

  
  (function UseParameterDestructuring2() {
    // Adjust the code to let the test succeed.

    const a = {name:`Oslo`,age: 985};

    // Don't make changes below this line

    function f({ name, age }) {
      expect(name).toBe('Oslo');
      expect(age).toBe(985);
    }

    f(a);

    solved++;
  })();
	

  /// Property shorthand ///

  
	(function UsePropertyShorthand() {
		const name = 'Oslo';
		const age = 985;
		const norwegian = true;
		
		// Remove all unnecesary syntax to let the test pass.
		const city = {
			name,
			age,
			dutch : !norwegian
		};

		// Don't make changes below this line	
		
		expect(city).toEqual({name: 'Oslo', age: 985, dutch: false});
		
		solved++;
	})();
	

  /// Object Spread Properties (ES2018) ///

  
	(function UseObjectSpreadProperties1() {
		let obj = { val: 1 };
		
		// Use Object Spread Properties to let the tests succeed.
		let{...copy} = obj;

		// Don't make changes below this line	
		
		expect(copy.val).toBe(1);
		
		copy.val = 2;
		expect(obj.val).toBe(1);

		solved++;
	})();
	

  
	(function UseObjectSpreadProperties2() {
		let obj1 = { a: 100, b: 2, c: 300 };
		let obj2 = { b: 0, d: 100, e: 200};
		let obj3 = { b: 3, c: 4, d: 5 };
		
		// Change to let the tests succeed, but:
		// - Do NOT use Object.assign()
		// - Do use object spread properties
		// - Think about the order!
		let result = {...obj1, ...obj3, ...obj2 };

		// Don't make changes below this line	
		
		expect(result.a).toBe(100);
		expect(result.b).toBe(0);
		expect(result.c).toBe(4);
		expect(result.d).toBe(100);
		expect(result.e).toBe(200);

		solved++;
	})();