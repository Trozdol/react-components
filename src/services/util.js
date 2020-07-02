
export function json (object) {
    var json = null;
    try {
        if (typeof(object) === 'string') object = { object };
        json = JSON.stringify(object);
    } catch (e) {
        console.log(e);
        json = '';
    }
    return json;
};

export function parse (string) {
    var object = {};
    try {
        object = JSON.parse(string);
    } catch (e) {
        console.log(e);
    }
    return object;
};

export default this;


