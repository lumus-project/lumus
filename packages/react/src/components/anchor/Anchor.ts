import { element } from '@lumus/engine';

const config = {
    name: 'LumusAnchor',
    classNames: {
        base: 'no-underline',
        variants: {
            color: {
                base: 'text-primary-700',
                black: 'text-black',
            },
            underline: 'hover:underline',
            bold: 'text-bold',
        },
    },
};

const Anchor = element('a', config);

export default Anchor;
