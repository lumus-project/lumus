import { element } from '@lumus/engine';

import radius from '../../config/radius';

const config = {
    name: 'LumusInput',
    classNames: {
        base: '1rem border-gray-400 border px-2 ring-offset-1 focus:ring-1 w-full',
        variants: {
            color: {
                base: 'ring-primary-200 focus:border-primary-700 outline-primary-700 focus:ring-primary-400',
            },
            size: {
                xs: 'py-1 text-xs',
                sm: 'py-1.5 text-sm',
                base: 'py-1.5',
                lg: 'py-2',
                xl: 'py-2.5',
            },
            radius,
        },
    },
};

const Input = element('input', config);

export default Input;
