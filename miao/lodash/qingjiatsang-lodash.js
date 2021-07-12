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

    function difference (array, ...args) {
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


    return {
        chunk: chunk,
        compact: compact,
        concat: concat,
        difference: difference,


    }


}()