import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Event icon from Simple Line Icons
 * @module
 */
export function SlEvent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M676 862c-16 0-28-13-28-29V691c0-16 12-28 28-28h142c16 0 29 12 29 28v142c0 16-13 29-29 29H676zm142-171H676v142h142V691zM960 96c35 0 64 29 64 64v800c0 35-29 64-64 64H64c-35 0-64-29-64-64V160c0-35 29-64 64-64h256V32c0-18 14-32 32-32s32 14 32 32v64h256V32c0-18 14-32 32-32s32 14 32 32v64h256zM64 960h896V160H704v32c0 18-14 32-32 32s-32-14-32-32v-32H384v32c0 18-14 32-32 32s-32-14-32-32v-32H64v800z"}}]})(props);
}
export default SlEvent;
