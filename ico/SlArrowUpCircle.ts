import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpCircle icon from Simple Line Icons
 * @module
 */
export function SlArrowUpCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1024 512C1024 229.216 794.768 0 512 0 229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.768 0 512-229.232 512-512zm-960.992 0C63.008 264.976 264.976 64 512 64c247.024 0 448 200.976 448 448S759.024 960 512 960 63.008 759.024 63.008 512zm481.328 224.32V375.856l115.76 115.76c12.496 12.496 32.752 12.496 45.248 0s12.496-32.752 0-45.248l-194-189.008-194 189.008c-6.256 6.256-9.376 14.432-9.376 22.624s3.12 16.368 9.376 22.624c12.496 12.496 32.752 12.496 45.248 0l117.744-117.76V736.32c0 17.68 14.336 32 32 32s32-14.32 32-32z"}}]})(props);
}
export default SlArrowUpCircle;
