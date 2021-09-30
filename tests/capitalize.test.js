import * as MyFn from "../src/capitalize.js";
import { strict as assert } from 'assert';


assert.equal(MyFn.capitalize('hi'), 'Hi');
assert.equal(MyFn.capitalize(''), '');