import { element } from '@lumus/engine';

import Header from './Header/Header';

const AppLayout = element('div', {
    name: 'LumusAppLayout',
    classNames: {
        variants: {
            inline: 'inline',
        },
    },
    slots: {
        header: Header,
    },
});

export default AppLayout;
