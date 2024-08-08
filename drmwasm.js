import * as wasm from "./drmwasm_bg.wasm";
import { __wbg_set_wasm } from "./drmwasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./drmwasm_bg.js";
