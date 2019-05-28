import * as React from "react"
import { Frame, useCycle } from "framer"

const css: React.CSSProperties = {
    backgroundColor: "#e3e3e3",
    color: "#3a3a3a",
    fontSize: "10",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

export function CodeComponentExample() {
    return <Frame style={css}>A Code Component</Frame>
}
