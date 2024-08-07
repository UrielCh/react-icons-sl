import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Folder icon from Simple Line Icons
 * @module
 */
export function SlFolder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M354.752 176l78.624 77.248L453.488 272H960v576H64V176h290.752zM384 112H64c-35.344 0-64 28.656-64 64v672c0 35.344 28.656 64 64 64h896c35.344 0 64-28.656 64-64V272c0-35.344-28.656-64-64-64H480z"}}]})(props);
}
export default SlFolder;
