/* @ts-self-types="./drmwasm.d.ts" */

import * as wasm from "./drmwasm_bg.wasm";
import { __wbg_set_wasm } from "./drmwasm_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    ReplacementImage, render_jpeg, render_webp
} from "./drmwasm_bg.js";
