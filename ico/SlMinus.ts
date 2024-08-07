import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Minus icon from Simple Line Icons
 * @module
 */
export function SlMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512 229 0 512 0zm0 961c247 0 448-202 448-449S759 64 512 64 64 265 64 512s201 449 448 449zm-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32H477z"}}]})(props);
}
export default SlMinus;
