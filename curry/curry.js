function curry(func, arity) {
	var curriedArgs = [],
		argsLength = arity || func.length,
		innerCurry = function() {
			var i;

			for (i = 0; i < arguments.length; i++) {
				curriedArgs.push(arguments[i]);
			}
			if (curriedArgs.length < argsLength) {
				return innerCurry;
			}
			func.apply(this, curriedArgs);
		};

	return innerCurry;
}

function abc(a, b, c) {
	var arr = [a, b, c];
	console.log(arr);
}

var curried = curry(abc);
curried(1)(2)(3);