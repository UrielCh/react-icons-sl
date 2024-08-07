import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Doc icon from Simple Line Icons
 * @module
 */
export function SlDoc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544H208z"}}]})(props);
}
export default SlDoc;
