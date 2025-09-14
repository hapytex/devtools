function identity(x) {
    return x;
}
function fmap(func) {
    if(func == null) {
        return identity;
    }
    function apply(obj) {
        if(obj === undefined || obj === null) {
            return obj;
        }
        else if(Array.isArray(obj)) {
            const result = [];
            for(const x of obj) {
                result.push(apply(x));
            }
            return result;
        }
        else if(typeof obj === 'object') {
            const result = {};
            for(const [k, v] of Object.entries(obj)) {
                result[k] = apply(v);
            }
            return result;
        }
        else {
            console.log(['call', obj]);
            return func(obj);
        }
    }
    return apply;
}

export {fmap};