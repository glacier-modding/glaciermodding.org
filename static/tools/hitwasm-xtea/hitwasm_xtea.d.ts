/* tslint:disable */
/* eslint-disable */
/**
* Enciphers the buffer.
* @param {Uint8Array} data
* @param {number} delta
* @param {Uint8Array} header
* @param {number} rounds
* @param {Uint32Array} key
* @returns {Uint8Array | undefined}
*/
export function encipher(data: Uint8Array, delta: number, header: Uint8Array, rounds: number, key: Uint32Array): Uint8Array | undefined;
/**
* Decipherd the buffer.
* @param {Uint8Array} data
* @param {number} delta
* @param {Uint8Array} header
* @param {number} rounds
* @param {Uint32Array} key
* @returns {Uint8Array | undefined}
*/
export function decipher(data: Uint8Array, delta: number, header: Uint8Array, rounds: number, key: Uint32Array): Uint8Array | undefined;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly encipher: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly decipher: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
