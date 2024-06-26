export default function getFunctionalTemplate(name: string, element: string, elementProps: string) {
    return `
    import React from "react";

    ${elementProps}

    export default function ${name}() {
        return <${element}>{children}</${element}>;
    }`;
}
