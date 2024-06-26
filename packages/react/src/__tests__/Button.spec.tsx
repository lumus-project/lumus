import React from 'react';

import { render, screen } from '@testing-library/react';

import { Button } from '../button';

describe('MUnchButton', () => {
    test('should show default button', async () => {
        render(<Button type="submit" />);
        expect(screen.getByRole('button')).toBeTruthy();
    });
});
