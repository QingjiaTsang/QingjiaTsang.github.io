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




    }


}()