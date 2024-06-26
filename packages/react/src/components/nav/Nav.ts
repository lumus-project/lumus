import { element } from '@lumus/engine';

const config = {
    name: 'LumusNav',
    classNames: {
        base: 'flex items-center justify-between gap-4',
        variants: {
            shadow: 'shadow',
            fixed: 'fixed',
        },
    },
};

const Nav = element('nav', config);

export default Nav;
