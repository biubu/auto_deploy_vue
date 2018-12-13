/**
 * Created by WJQ on 2018/8/30 14:42.
 */
import { dev, fetch } from './fetch';

export default {
    example(params) {
        return fetch(dev ? 'example.json' : 'example', params);
    }
};
