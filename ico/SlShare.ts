import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Share icon from Simple Line Icons
 * @module
 */
export function SlShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 704c-52.688 0-99.295 25.585-128.431 64.88l-421.36-214.72c3.664-13.455 5.792-27.535 5.792-42.16 0-18.303-3.216-35.807-8.88-52.175l423.76-205.616C763.97 294.016 810.897 320 864.001 320c88.367 0 160-71.649 160-160 0-88.368-71.633-160-160-160S704 71.633 704 160c0 12.431 1.567 24.464 4.24 36.08L278.4 404.657c-29.281-32.273-71.393-52.656-118.4-52.656C71.631 352 0 423.633 0 512c0 88.351 71.631 160 160 160 50.895 0 96.127-23.824 125.423-60.865l423.104 215.632C705.664 838.736 704 851.152 704 864c0 88.368 71.632 160 160 160s160-71.632 160-160-71.632-160-160-160zm.002-639.999c53.008 0 96 42.992 96 96s-42.992 96-96 96-96-42.992-96-96 42.992-96 96-96zm-704 544c-53.024 0-96-42.992-96-96s42.976-96 96-96c53.008 0 96 42.992 96 96s-42.992 96-96 96zm704 352c-53.008 0-96-42.992-96-96s42.992-96 96-96 96 42.992 96 96-42.992 96-96 96z"}}]})(props);
}
export default SlShare;
