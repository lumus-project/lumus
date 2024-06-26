export default function getActiveClassNames(activeClassNames: string) {
    return activeClassNames
        .split(' ')
        .map((className) => `active:${className}`)
        .join(' ');
}
