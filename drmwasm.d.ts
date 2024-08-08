/* tslint:disable */
/* eslint-disable */
/**
* @param {number} x
* @returns {number}
*/
export function add(x: number): number;
/**
* @param {Uint8Array} inp_bytes
* @returns {any}
*/
export function get_replacement_jpeg(inp_bytes: Uint8Array): any;
/**
* @param {Uint8Array} inp_bytes
* @returns {any}
*/
export function get_replacement_webp(inp_bytes: Uint8Array): any;
/**
*/
export class ReplacementImage {
  free(): void;
/**
*/
  height: number;
/**
*/
  width: number;
/**
*/
  x: number;
/**
*/
  y: number;
}
