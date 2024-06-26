import { element } from '@lumus/engine';

const config = {
    name: 'LumusHeader',
    classNames: {
        base: 'flex h-16',
        variants: {
            shadow: 'shadow',
            fixed: 'fixed inset-x-0 top-0 z-50',
        },
    },
};

const Header = element('header', config);

export default Header;
