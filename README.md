# Simple Line Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://thesabbir.github.io/simple-line-icons/](https://thesabbir.github.io/simple-line-icons/)

[See available icons here](https://react-icons.deno.dev/sl)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/sl":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-sl@1.0.9/mod.ts",
    "react-icons/sl/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-sl@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib sl

```ts
import { SlActionRedo } from "https://deno.land/x/react_icons_sl@1.0.9/mod.ts"
```

## import_map import an icon from all icons

```ts
import { SlActionRedo } from "react-icons/sl"
```

## import a single icon, downloading just one icon

```ts
import { SlActionRedo } from "react-icons/sl/SlActionRedo.ts"
```

or using default export

```ts
import SlActionRedo from "react-icons/sl/SlActionRedo.ts"
```

