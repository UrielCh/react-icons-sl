import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Frame icon from Simple Line Icons
 * @module
 */
export function SlFrame(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M224 112H32c-17.664 0-32 14.336-32 32v192c0 17.664 14.336 32 32 32s32-14.336 32-32V176h160c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768 544c-17.664 0-32 14.336-32 32v160H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h192c17.664 0 32-14.336 32-32V688c0-17.664-14.336-32-32-32zM224 848H64V688c0-17.664-14.336-32-32-32S0 670.336 0 688v192c0 17.664 14.336 32 32 32h192c17.664 0 32-14.336 32-32s-14.336-32-32-32zm768-736H800c-17.664 0-32 14.336-32 32s14.336 32 32 32h160v160c0 17.664 14.336 32 32 32s32-14.336 32-32V144c0-17.664-14.336-32-32-32z"}}]})(props);
}
export default SlFrame;
