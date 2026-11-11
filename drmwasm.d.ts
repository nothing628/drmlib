/* tslint:disable */
/* eslint-disable */

export class ReplacementImage {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    height: number;
    width: number;
    x: number;
    y: number;
}

export function render_jpeg(inp_bytes: Uint8Array, enc_key: Uint8Array, uid: number): any;

export function render_webp(inp_bytes: Uint8Array, enc_key: Uint8Array, uid: number): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_get_replacementimage_height: (a: number) => number;
    readonly __wbg_get_replacementimage_width: (a: number) => number;
    readonly __wbg_get_replacementimage_x: (a: number) => number;
    readonly __wbg_get_replacementimage_y: (a: number) => number;
    readonly __wbg_replacementimage_free: (a: number, b: number) => void;
    readonly __wbg_set_replacementimage_height: (a: number, b: number) => void;
    readonly __wbg_set_replacementimage_width: (a: number, b: number) => void;
    readonly __wbg_set_replacementimage_x: (a: number, b: number) => void;
    readonly __wbg_set_replacementimage_y: (a: number, b: number) => void;
    readonly render_jpeg: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly render_webp: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
