import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Map icon from Simple Line Icons
 * @module
 */
export function SlMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M993.184 135.008L672.223 1.939l-319.44 126.432L30.815 2.003c-2.752-.816-5.44-1.12-7.968-1.12C9.712.818 0 10.626 0 25.378v830c0 17.568 13.872 35.872 30.816 40.56l322.336 127.184L672.16 893.618l321.024 126.128c2.752.752 5.44 1.12 7.969 1.12 13.12 0 22.847-9.744 22.847-24.495V175.635c0-17.569-13.872-35.89-30.816-40.625zm-609.185 46.131l256-100.304v761.504l-256 101.184V181.139zm-320-94.448l256 94.577v761.76l-256-104.272V86.692zm896 851.314l-256-96.384V81.797l256 110.384v745.824z"}}]})(props);
}
export default SlMap;
