import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bag icon from Simple Line Icons
 * @module
 */
export function SlBag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M864 158.704H672.815V97.328c0-52.944-43.056-96-96-96H449.183c-52.944 0-96 43.056-96 96v61.376H159.999c-35.344 0-64 28.656-64 64v735.968c0 35.344 28.656 64 64 64h704c35.344 0 64-28.656 64-64V222.704c0-35.344-28.656-64-64-64H864zM417.184 97.328c0-17.664 14.336-32 32-32h127.632c17.664 0 32 14.336 32 32v61.376H417.184V97.328zM864 958.672H160V222.704h193.184v65.84s-.848 31.967 31.809 31.967c36 0 32.192-31.967 32.192-31.967v-65.84h191.632v65.84s-2.128 32.128 31.872 32.128c32 0 32.128-32.128 32.128-32.128v-65.84h191.184v735.968z"}}]})(props);
}
export default SlBag;
