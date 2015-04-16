var _ = require('lodash'),
    assert = require('chai').assert;

suite('Lodash', function() {
    var articles;

    setup(function() {
        articles = [
            {
                title: 'Everything Sucks',
                url: 'http://do.wn/sucks.html',
                author: { name: 'Debbie Downer', email: 'debbie@do.wn' }
            },
            {
                title: 'If You Please',
                url: 'http://www.geocities.com/milq',
                author: { name: 'Caspar Milquetoast', email: 'hello@me.com' }
            }
        ];
    });

    test('challenge 1', function() {
        // найдите сумму чисел в массиве
        // с использованием функций _.sum
        var sum = _.sum;

        assert.deepEqual(sum([1, 2, 3]), 6);
    });

    test('challenge 1.1', function() {
        // найдите сумму уникальных чисел в массиве
        // с использованием функций _.sum, _.flow, _.uniq
        var sum = _.flow(_.uniq, _.sum);

        assert.deepEqual(sum([1, 2, 1 , 3, 3, 2]), 6);
    });

    test('challenge 1.2', function() {
        // найдите сумму уникальных чисел их всех массивах
        // с использованием функций _.sum, _.flow, _.uniq, _.union
        var sum = _.flow(_.union, _.uniq, _.sum);

        assert.deepEqual(sum([1, 2, 3], [1], [1, 2]), 6);
    });

    test('challenge 2', function() {
        // напишите функцию которая умножает каждый элемент массива на 3
        // с использованием функций _.map
        var triple = function(num) { return num * 3}, 
            tripleList = _.map;

        assert.deepEqual(tripleList([1, 2, 3], triple), [3, 6, 9]);
    });

    test('challenge 3', function() {
        // напишите функцию для нахождения самого большого числа в массиве
        // с использованием функций _.reduce
        // * c использованием _.partialRight
        var greater = function(great, cur) { return great < cur ? cur : great; },
            max = _.partialRight(_.reduce, greater);

        assert.equal(max([1, -3483, 94, 7, 2]), 94);
        assert.equal(max([-21, -3483, -2, -1]), -1);
    });

    test('Challenge 4', function() {
        // суммируйте только числа
        // с использованием функций _.filter,_.isNumber, ...
        // * c использованием _.curry
        // ** c использованием _.flow
        var filter = _.curry(_.filter)(_, _.isNumber, this), 
            sumNumbers = _.flow(filter, _.sum);

        assert.equal(sumNumbers([1, '2', 3, '4', 5]), 9);
    });

    test('Challenge 5', function(){
        // вберите из массива книг их названия
        // c использованием _.pluck, _.partial
        var getTitles = _.partial(_.pluck, _, "title");

        assert.deepEqual(getTitles(articles),['Everything Sucks', 'If You Please'])
    });

    test('Challenge 6', function(){
        //напишите функцию наличия в массиве обьектов запрашиваемого автора
        // c использованием _.find, ...
        var isAuthor = function(collection, name) { 
            return (_.find(collection, function(cur) { return cur.author.name === name; } )) ? true : false;
        };

        assert.isFalse(isAuthor(articles, 'New Guy'));
        assert.isTrue(isAuthor(articles , 'Debbie Downer'));
    });

    test('Challenge 7✯✯✯', function(){
        var a = [1],
            b = [1],
            newPush,
            maxPushCount = 2;

        // your code goes here
        // как видно из примера в массив можно занести лишь первые 2 значения 
        // остальные игнорируются
        // на этот раз без подсказок

        newPush = _.before(3, a.push);
        Object.defineProperty(a, "push", {
            value : newPush
        });

        a.push(2);
        a.push(3);
        a.push(4);
        a.push(5);

        b.push(2);
        b.push(3);
        b.push(4);
        b.push(5);

        assert.deepEqual(a, [1, 2, 3]);
        assert.deepEqual(b, [1, 2, 3, 4 ,5]);
    });
});
