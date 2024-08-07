import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Organization icon from Simple Line Icons
 * @module
 */
export function SlOrganization(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M815 576h145c35 0 64 29 64 64v320c0 35-29 64-64 64H640c-35 0-64-29-64-64V640c0-35 29-64 64-64h113v-38H270v38h114c35 0 64 29 64 64v320c0 35-29 64-64 64H64c-35 0-64-29-64-64V640c0-35 29-64 64-64h144v-60c0-22 28-33 53-33h220v-36H343c-35 0-64-29-64-64V63c0-35 29-64 64-64h320c35 0 64 29 64 64v320c0 35-29 64-64 64H545v37c83 0 134-1 217-1 25 0 53 10 53 33v60zm145 64H640v320h320V640zM663 63H343v320h320V63zM384 640H64v320h320V640z"}}]})(props);
}
export default SlOrganization;
