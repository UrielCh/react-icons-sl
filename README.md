# Simple Line Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/sl)](https://jsr.io/@preact-icons/sl)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://thesabbir.github.io/simple-line-icons/](https://thesabbir.github.io/simple-line-icons/)

[See available icons here](https://react-icons.deno.dev/sl)

## install the module

```bash
deno add @preact-icons/sl
dnpx jsr add @preact-icons/sl
pnpm dlx jsr add @preact-icons/sl
bunx jsr add @preact-icons/sl
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { SlActionRedo } from "@preact-icons/sl"
```

## import a single icon, downloading just one icon

```ts
import { SlActionRedo } from "react-icons/sl/SlActionRedo"
```

or using default export

```ts
import SlActionRedo from "react-icons/sl/SlActionRedo.ts"
```
