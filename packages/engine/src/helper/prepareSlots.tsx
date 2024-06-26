import React, { ReactNode } from 'react';

import { SlotsProps } from '../../types';

export default function prepareSlots(slots?: SlotsProps): ReactNode[] {
    const c: ReactNode[] = [];

    slots &&
        Object.keys(slots).forEach((key) => {
            const Component = slots[key];

            c.push(<Component />);
        });

    return c;
}
