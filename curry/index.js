var _ = require('lodash'),
	chai = require('chai'),
	assert = chai.assert,
	should = chai.should();

suite('Curry', function () {
	var curry;

	setup(function () {
		// your implementation of curry
		curry = curry = function(func, arity) {
+			var curriedArgs = [],
+				argsLength,
+				innerCurry = function() {
+					var args = [].slice.call(arguments),
						executionArgs = curriedArgs.slice();
+
+					args.forEach(function(cur) {
+						executionArgs.push(cur);
+					});
+						
+					if (executionArgs.length < argsLength) {
						args.forEach(function(cur) {
+							curriedArgs.push(cur);
+						});
+						return innerCurry;
+					}
+
+					return func.apply(this, executionArgs);
+				};
+
+			if (typeof func !== 'function') {
+				throw Error("Argument func is not a function");
+			}
+			argsLength = isNaN(arity) ? func.length : arity;
+
+			return innerCurry;
+		};
	});

	test('test of function currying', function () {
		var sum = function (a, b) {
			return a + b;
		};

		var currySum = curry(sum);
		var inc = currySum(1);
		var curryWithArity1 = curry(sum, 1);
		var curryWithArity2 = curry(sum, 2);
		var curryWithArity3 = curry(sum, 3);

		assert.equal(currySum(1, 2), 3);
		assert.equal(currySum(3)(4), 7);
		assert.equal(inc(0), 1);
		assert.equal(inc(-1), 0);
		assert.equal(curryWithArity1(5, 6), 11);
		assert.equal(curryWithArity2(7)(8), 15);
		assert.equal(curryWithArity3(9, 10, 11), 19);
		assert.equal(curryWithArity3(12, 13)(14), 25);
	});

	test('test of type error handling', function () {
		var multiply = function (a, b) {
			return a + b;
		};

		try {
			curry({});
			assert(false);
		} catch (e) {
			assert(e instanceof TypeError);
			should.not.Throw(curry(multiply));
			should.not.Throw(curry(multiply, undefined));
			should.not.Throw(curry(multiply, NaN));
			should.not.Throw(curry(multiply, -Infinity));
			should.not.Throw(curry(multiply, []));
			should.not.Throw(curry(multiply, "1"));
		}

	});
});
