class Cache{
    constructor() {
        this._cacheValues = new Map();
        this._cacheValueCounter = new Map();
    }

    /**
     *
     * @param key {string}
     * @param value {Object}
     * @param hitNumber {number}
     */
    set(key, value, hitNumber= 1){
        this._cacheValues.set(key, value);
        this._cacheValueCounter.set(key, hitNumber);
    }
    /**
     *
     * @param key {string}
     */
    get(key){
        const counter = this._cacheValueCounter.get(key);
        if (counter <= 0){
            return null;
        }
        this._cacheValueCounter.set(key, counter - 1);
        return this._cacheValues.get(key);
    }

    /**
     * @returns {Map}
     */
    getStatistics(){
        const result = new Map();
        for (let key of this._cacheValues.keys()){
            const value = this._cacheValues.get(key);
            const count = this._cacheValueCounter.get(key);
            result.set(key, {value: value, count: count});
        }
        return result
    }
}

export {Cache}