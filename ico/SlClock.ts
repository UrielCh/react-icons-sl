import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clock icon from Simple Line Icons
 * @module
 */
export function SlClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm32-462V192.002c0-17.664-14.336-32-32-32s-32 14.336-32 32v320c0 9.056 3.792 17.2 9.856 23.007.529.624.96 1.296 1.537 1.887l158.384 158.4c12.496 12.481 32.752 12.481 45.248 0 12.496-12.496 12.496-32.768 0-45.264z"}}]})(props);
}
export default SlClock;
