import { element } from '@lumus/engine';

const config = {
    name: 'LumusHeader',
    classNames: {
        base: 'container mx-auto flex items-center justify-between',
        variants: {
            type: {
                base: 'flex-row',
                stack: 'flex-col',
            },
            p: {
                xs: 'p-1',
                sm: 'p-2',
                md: 'p-4',
                lg: 'p-5',
                xl: 'p-6',
            },
        },
    },
};

const Container = element('div', config);

export default Container;
