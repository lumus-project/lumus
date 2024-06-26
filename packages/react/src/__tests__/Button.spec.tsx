import React from 'react';

import { render, screen } from '@testing-library/react';

import { Button } from '../button';

describe('LumusButton', () => {
    test('should show default button', async () => {
        render(<Button type="submit" />);
        expect(screen.getByRole('button')).toBeTruthy();
    });
});
