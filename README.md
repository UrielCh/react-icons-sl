# Simple Line Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/sl)](https://jsr.io/@preact-icons/sl)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://thesabbir.github.io/simple-line-icons/](https://thesabbir.github.io/simple-line-icons/)

[See available icons here](https://react-icons.deno.dev/sl)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/sl": "jsr:@preact-icons/sl@^1.0.11/mod.ts",
    "react-icons/sl/": "jsr:@preact-icons/sl@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib sl

```ts
import { SlActionRedo } from "jsr:preact-icons/sl@1.0.11/mod.ts"
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

