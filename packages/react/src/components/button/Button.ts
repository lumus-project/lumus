import { element } from '@lumus/engine';

import radius from '../../config/radius';

const Button = element('button', {
    name: 'LumusButton',
    classNames: {
        base: 'active:translate-y-px box-border border ring-offset-2 focus:ring-2 outline-primary-700',
        variants: {
            color: {
                base: 'bg-primary-700 ring-primary-700 text-white active:bg-primary-800 border-primary-700',
                danger: 'bg-red-700 ring-red-700 text-white active:bg-red-800 border-red-700',
                outline: 'bg-white border-primary-700 ring-primary-700 hover:bg-primary-50',
            },
            size: {
                xs: 'px-2 py-.5',
                base: 'px-3 py-1.5',
                lg: 'px-5 py-2.5',
                xl: 'px-8 py-3',
            },
            shadow: {
                sm: 'shadow-sm',
                base: 'shadow',
                md: 'shadow-md',
                lg: 'shadow-lg',
                xl: 'shadow-xl',
                none: 'shadow-none',
            },
            radius,
            uppercase: 'uppercase',
            full: 'w-full',
        },
    },
});

export default Button;
