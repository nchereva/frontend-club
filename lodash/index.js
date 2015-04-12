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
        var a = [1,2,3,4,5];
        _.sum(a);
        
        var ob = [
            {'number_of_electrons':7,'title':'N'},
            {'number_of_electrons':26,'title':'Fe'}
                ]

        _.sum(ob,function(object){
            return object.number_of_electrons;
        })
    });

    test('challenge 1.1', function() {
        // найдите сумму уникальных чисел в массиве
        // с использованием функций _.sum, _.flow, _.uniq
        var b = [1,1,2,2,3];
        
        var sumUniq = _.flow(_.uniq,_.sum);
        sumUniq(b);
    });

    test('challenge 1.2', function() {
        // найдите сумму уникальных чисел их всех массивах
        // с использованием функций _.sum, _.flow, _.uniq, _.union
        var c = [2,2,3,3,4,5,8];
        var d = [3,4,5,2,2,9,88];
        var sumUniqUnion = _.flow(_.union,_.uniq,_.sum);
        sumUniqUnion(c,d);
    });

    test('challenge 2', function() {
        // напишите функцию которая умножает каждый элемент массива на 3
        // с использованием функций _.map
        var f = [3,4,5,2,2,9,88];
        function triple (el) {
            return el*3;
            };
        _.map(f,triple);
    });

    test('challenge 3', function() {
        // напишите функцию для нахождения самого большого числа в массиве
        // с использованием функций _.reduce
        // * c использованием _.partialRight
         var g = [2,3,4,5,6,9]
        _.reduce(a, function(acc, element) { return acc > element?acc:element});

    });

    test('Challenge 4', function() {
        // суммируйте только числа
        // с использованием функций _.filter,_.isNumber, ...
        // * c использованием _.curry
        // ** c использованием _.flow
        var e = [1,2,'3',4];
        _.filter(e,_.isNumber);
    });

    test('Challenge 5', function(){
        // вберите из массива книг их названия
        // c использованием _.pluck, _.partial
       books = [
            {'author':'Kant','title':'Critique of Pure Reason'},
            {'author':'Nietzsche','title':'Thus Spake Zarathustra'}
                ];
        _.pluck(books,'title');  
		// все равно не поняла про _.partial(_.pluck, _, "title"). почему три аргумента передается? в общем не получилось вывести названия таким образом
    });

    test('Challenge 6', function(){
        //напишите функцию наличия в массиве обьектов запрашиваемого автора
        // c использованием _.find, ...
       (_.result(_.find(books, function(chr) {
            return chr.author==="Kant";
                    }), 'title'))?true:false;
					
    });

    test('Challenge 7✯✯✯', function(){
        var a = [1],
            b = [1];

        // your code goes here
        // как видно из примера в массив можно занести лишь первые 2 значения 
        // остальные игнорируются
        // на этот раз без подсказок

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
