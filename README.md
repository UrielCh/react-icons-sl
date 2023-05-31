# Simple Line Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://thesabbir.github.io/simple-line-icons/](https://thesabbir.github.io/simple-line-icons/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=sl)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/sl":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-sl@1.0.4/mod.ts",
    "react-icons/sl/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-sl@1.0.4/ico/",
  }
}
```

## Direct import sample

```ts
import { SlActionRedo } from "https://deno.land/x/react_icons_sl@1.0.4/mod.ts"
```

## import_map import sample

```ts
import { SlActionRedo } from "react-icons/sl"
```

## minimal import

```ts
import { SlActionRedo } from "react-icons/sl/SlActionRedo.ts"
```

## minimal import using default export

```ts
import SlActionRedo from "react-icons/sl/SlActionRedo.ts"
```

