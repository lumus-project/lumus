import { createElement, forwardRef } from 'react';

import parseClassProps from './helper/parseClassProps';
import prepareSlots from './helper/prepareSlots';
import { BaseConfig, LumusElement, RefElement } from '../types';

export default function element<T extends keyof RefElement, C extends BaseConfig>(element: T, config: C) {
    const { name, slots } = config;

    /*---- Creating slots for component ----*/
    const s = prepareSlots(slots);

    const e = forwardRef<RefElement[T], LumusElement<T, C>>((props: JSX.IntrinsicElements[T], ref) => {
        /*---- Extracting className from ReactNode property so that we can combine with UI className ----*/
        const { className, children, ...restProps } = props;
        const c = parseClassProps(config, className, restProps);

        return createElement(element, { className: c, ...restProps, ref }, children, ...s);
    });

    e.displayName = name;

    return e;
}
