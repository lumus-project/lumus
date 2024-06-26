import { VariantsProps } from '../../types';

export default function parseElementProps(elementProps: VariantsProps, props: any) {
    let defaults = '';

    Object.keys(elementProps).forEach((key) => {
        const propKey = props[key] ?? 'base';

        if (typeof elementProps[key] === 'object' && elementProps[key]) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            defaults += ` ${elementProps[key][propKey] ?? ''}`;
        } else if (props[key]) {
            defaults += ` ${elementProps[key]}`;
        }

        /*---- Deleting component properties to avoid being passed to html element ----*/
        props[key] = undefined;
    });

    return defaults;
}
