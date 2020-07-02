import { json } from './util';

const SERVER = 'http://localhost:8000';

async function login(email, password, callback) {
    var err = null,
        req = null,
        res = null,
        body = json({ email, password });
    try {
        req = await fetch(`${SERVER}/login`, { method: 'POST', body });
        res = await req.json();
        console.log(res);
    } catch (e) {
        err = e;
    } finally {
        if (callback) {
            return callback(err, res);
        } else {
            return err || res;
        }
    }
}

export default { login }