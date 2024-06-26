export default function generateClassNames(...classNames: (string | undefined)[]) {
    return classNames.filter((className) => !!className).join(' ');
}
