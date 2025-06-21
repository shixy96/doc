# [Prosemirror](https://prosemirror.net/docs/guide/)

## 基本概念

基本组成部分 

- [model](https://prosemirror.net/docs/ref/#model)
- [state](https://prosemirror.net/docs/ref/#state)
- [view](https://prosemirror.net/docs/ref/#view)
- [transform](https://prosemirror.net/docs/ref/#transform)

```js
import {schema} from "prosemirror-schema-basic"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"

// plugin
import {undo, redo, history} from "prosemirror-history"
import {keymap} from "prosemirror-keymap"
import {baseKeymap} from "prosemirror-commands"

let state = EditorState.create({
  schema,
  plugins: [
    history(),
    keymap({"Mod-z": undo, "Mod-y": redo}),
    keymap(baseKeymap),
  ]
})
let view = new EditorView(document.body, {
  state,
  // 所有编辑更新都通过  dispatchTransaction 函数处理
  dispatchTransaction(transaction) {
    console.log("Document size went from", transaction.before.content.size,
                "to", transaction.doc.content.size)
    let newState = view.state.apply(transaction)
    // 所有视图改变都通过 updateState 触发
    view.updateState(newState)
  }
})

```

## schema

```js
const trivialSchema = new Schema({
  nodes: {
    doc: {content: "paragraph+"},
    paragraph: {content: "text*"},
    text: {inline: true},
    /* ... and so on */
  }
})
```
