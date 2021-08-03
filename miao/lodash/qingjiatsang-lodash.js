var qingjiatsang = function () {

    function chunk (array, size) {
        var copyArray = array
        var ret = []
        var times = Math.floor(copyArray.length / size)
        for (var i = 0; i < times; i++) {
            var newArray = copyArray.slice(0, size)
            ret.push(newArray)
            copyArray = copyArray.slice(size)
        }
        var reminder = array.length % size
        if (reminder != 0) {
            ret.push(array.slice(array.length - reminder))
        }
        return ret
    }

    function compact (array) {
        return array.filter(it => it && 1 == true)
    }

    function concat (array, ...args) {
        var ret = []
        for (var i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (var j = 0; j < arguments[i].length; j++) {
                    ret.push(arguments[i][j])
                }
            }
            else {
                ret.push(arguments[i])
            }
        }
        return ret
    }

    function difference (array, ...args) { //UNDONE
        if (arguments.length == 1) {
            return array
        }
        var ret = []
        for (var i = 0; i < array.length; i++) {
            if (array[i] !== arguments[1][i]) {
                ret.push(array[i])
            }
        }
        return ret
    }

    function uniq (array) {
        var record = new Set()
        var ret = []

        for (var i = 0; i < array.length; i++) {
            if (!(record.has(array[i]))) {
                record.add(array[i])
                ret.push(array[i])
            }
            else {
                continue
            }
        }
        return ret
    }

    function uniqBy (array, iteratee) {  //UNDONE
        var ret = []
        var temp = []
        for (var i = 0; i < array.length; i++) {
            temp.push(iteratee(array[i]))
        }

    }

    function keys (object) {
        var ret = []
        var typeArg = typeof object
        if (typeArg == "object") {
            for (var key in object) {
                ret.push(key)
            }
        }
        else if (Array.isArray(object) || typeArg == "string") {
            for (var i = 0; i < object.length; i++) {
                ret.push(i)
            }
        }
        return ret
    }

    function forEach (collection, iteratee) {
        var typeArg = typeof collection
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iteratee(collection[i])
            }
        }
        else {
            for (var key in collection) {
                iteratee(collection[key], key)
            }
        }
        return collection
    }

    function filter (collection, predicate) {  //UNDONE
        var ret = []
        var typeArg = typeof collection
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (predicate(collection[i])) {
                    ret.push(collection[i])
                }
            }
        }
        else {
            for (var key in collection) {
                if (predicate(collection[key], key)) {
                    ret.push(key)
                }
            }
        }
        return ret
    }

    function reduce (collection, iteratee, initial) {
        if (Array.isArray(collection)) {
            var startIdx = 0
            if (arguments.length < 3) {
                initial = collection[0]
                startIdx = 1
            }
            for (var i = startIdx; i < collection.length; i++) {
                initial = iteratee(initial, collection[i])
            }
        }
        else {
            if (arguments.length < 3) {
                initial = null
                for (var key in collection) {
                    initial = initial || iteratee(initial, collection[key], key)
                }
            }
            else {
                for (var key in collection) {
                    initial = iteratee(initial, collection[key], key)
                }
            }
        }
        return initial
    }

    /*输入：map([{"a":{"b":1}},{"a":{"b":2}}],"a.b")
    输出：[[{"b":1}],[{"b":2}]]
    期望：[1,2] 

    错误：TypeError: Cannot read property 'length' of undefined
    at testCasesByHand.map (http://10.2.2.2:7000/lodash-oj9/libs/test-cases-by-hand.js:15:47)
    at Object.map (qingjiatsang-lodash.js:162:30)
    at compareTest (http://10.2.2.2:7000/lodash-oj9/libs/tester.js:98:19)
    at http://10.2.2.2:7000/lodash-oj9/libs/tester.js:20:16
    at Array.map ()
    at test (http://10.2.2.2:7000/lodash-oj9/libs/tester.js:18:22)
    at http://10.2.2.2:7000/lodash-oj9/:342:20
    at Array.map ()
    at http://10.2.2.2:7000/lodash-oj9/:341:40
    输入：map([1,2,3],function(v,i,o) {return v+i+o.length*2})
    期望：[7,9,11]

    输入：map([{"user":"barney"},{"user":"fred"}],"user")
    输出：[["barney"],["fred"]]
    期望：["barney","fred"]

*/
    function map (collection, iteratee) {
        var ret = []
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (typeof (iteratee) === "string") {
                    ret.push(map(collection[i], iteratee))
                }
                else {
                    ret.push(iteratee(collection[i]))
                }
            }
        }
        else {
            if (typeof (iteratee) === "string") {
                for (var key in collection) {
                    ret.push(collection[key])
                }
            }
            else {
                for (var key in collection) {
                    ret.push(iteratee(collection[key]))
                }
            }
        }
        return ret
    }

    function zip (array, ...Array) {
        var ret = []
        var maxlength = -Infinity
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i].length > maxlength) {
                maxlength = arguments[i].length
            }
        }
        for (var i = 0; i < maxlength; i++) {
            var temp = []
            for (var j = 0; j < arguments.length; j++) {
                temp.push(arguments[j][i])
            }
            ret.push(temp)
        }
        return ret
    }

    function unzip (array, ...Array) {
        var ret = []
        for (var i = 0; i < arguments[0].length; i++) {
            var temp = []
            for (var j = 0; j < arguments.length; j++) {
                temp.push(arguments[j][i])
            }
            ret.push(temp)
        }
        return ret
    }

    function values (object) {
        var ret = []
        var typeArg = typeof (object)
        if (typeArg == "object") {
            if (Array.isArray(object)) {
                for (var i = 0; i < object.length; i++) {
                    ret.push(object[i])
                }
            }
            else {
                for (var key in object) {
                    ret.push(object[key])
                }
            }
        }
        else {
            for (var i = 0; i < object.length; i++) {
                ret.push(object[i])
            }
        }
        return ret
    }

    function matches (obj) {
        return function (src) {
            for (var key in src) {
                if (!(key in obj)) {
                    return false
                }
            }

        }
    }

    function matchesProperty (ary) {
        return function (obj) {
            let key = ary[0]
            let val = ary[1]
            if (key in obj) {
                obj[key] === val
                return true
            }
            return false
        }
    }

    function get (object, path) {
        for (var i = 0; i < path.length; i++) {
            var val = object[path[i]]
        }
    }


    function isMatch (object, source) {
        for (var key in source) {
            if (source[key] && typeof source[key] == "Object") {
                if (!isMatch(object[key], source[key])) {
                    return false
                }
            }
            else {
                if (!(object[key] == source[key])) {
                    return false
                }
            }
        }
        return true
    }

    function sumBy (ary, predicate) {
        let sum = 0
        for (var item of ary) {
            for (var predicate in item) {
                sum += ary[predicate]
            }
        }
    }



    return {
        chunk: chunk,
        compact: compact,
        concat: concat,
        difference: difference,
        uniq: uniq,
        forEach: forEach,
        reduce: reduce,
        map: map,
        zip: zip,
        unzip: unzip,
        values: values,
        keys: keys,






    }


}()