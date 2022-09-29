import {Cache} from "../src/cache";

/**
 *
 * @param hitNumber {number}
 * @param key {string}
 * @param value {Object}
 */
const createDefaultCache = function (hitNumber= 1, key = 'test key', value = 'test value'){
    const cache = new Cache();
    cache.set(key, value, hitNumber);
    return cache;

}
test('it successful getting and settings', () => {
    const cache = createDefaultCache();
    const key = 'test key';
    const value = 'test value';
    expect(cache.get(key)).toBe(value);
});

test('it fail hit count is down', () => {
    const cache = createDefaultCache(2);
    const key = 'test key';
    const value = 'test value';
    cache.get(key);
    cache.get(key);
    expect(cache.get(key)).toBeNull();
});

test('it fail hit count by default is down', () => {
    const cache = createDefaultCache(2);
    const key = 'test key';
    const value = 'test value';
    cache.set(key, value);
    cache.get(key);
    expect(cache.get(key)).toBeNull();
});

test('get ', () => {
    const cache = new Cache();
    const key = 'test key';
    const value = 'test value';
    cache.set(key, value,3);
    cache.get(key);
    cache.get(key);
    expect(cache.get(key)).toBe('test value');
});

test('test statistics ', () => {
    const cache = new Cache();
    const key = 'test key';
    const value = 'test value';
    const count = 3;
    cache.set(key, value,count);

    const statistics = cache.getStatistics();
    expect(statistics.get(key).value).toBe(value);
    expect(statistics.get(key).count).toBe(count);
});