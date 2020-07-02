
class Store {
    #url;
    #root = 'data';
    #data = [];

    transform;
    onLoad;

    constructor(props) {
        this.#url = props.url;
        this.#root = props.root;
        this.transform = props.transform;
        this.onLoad = props.onLoad;
    }

    async load() {
        console.log('load', this.#url)
        var resp = await fetch(this.#url);
        var json = await resp.json();
        var data = this.#transform(json);
        this.#onLoad(data);
        return data;
    }

    #transform = (json) => {
        console.log('#transform')
        var data = this.#root ? json[this.#root] : json;
        return this.transform ? this.transform(data) : data;
    }

    #onLoad = (data) => {
        console.log('#onLoad')
        this.#data.push(data);
        return this.onLoad ? this.onLoad(this.#data) : this.#data;
    }

    get data() {
        console.log('get data')
        return this.#data;
    }
}

export default Store;