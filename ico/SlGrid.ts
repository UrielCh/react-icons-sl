import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grid icon from Simple Line Icons
 * @module
 */
export function SlGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M960 1024H640c-35.344 0-64-28.656-64-64V640c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H640v320h320V640zm0-192H640c-35.344 0-64-28.656-64-64V64c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H640v320h320V64zm-576 960H64c-35.344 0-64-28.656-64-64V640c0-35.344 28.656-64 64-64h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H64v320h320V640zm0-192H64c-35.344 0-64-28.656-64-64V64C0 28.656 28.656 0 64 0h320c35.344 0 64 28.656 64 64v320c0 35.344-28.656 64-64 64zm0-384H64v320h320V64z"}}]})(props);
}
export default SlGrid;
