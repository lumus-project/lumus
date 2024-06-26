import { ComponentType, PropsWithoutRef, ReactNode, RefAttributes } from 'react';

export interface VariantsProps {
    [prop: string]:
        | string
        | {
              [key: string]: string;
          };
}

export type SlotsProps = {
    [key: string]: ComponentType<any>;
};

export interface BaseConfig {
    name?: string;
    classNames: {
        base?: string;
        variants?: VariantsProps;
    };
    slots?: SlotsProps;
    // spacing?: SpacingProps;
}

export interface RefElement {
    a: HTMLAnchorElement;
    button: HTMLButtonElement;
    div: HTMLDivElement;
    header: HTMLElement;
    input: HTMLInputElement;
    nav: HTMLElement;
}

export type ComponentVariants<T extends BaseConfig> = T['classNames']['variants'];
export type ComponentSlots<T extends BaseConfig> = T['slots'];

export type ElementProps<T extends BaseConfig> = {
    [Property in keyof ComponentVariants<T>]?: ComponentVariants<T>[Property] extends object
        ? Omit<keyof ComponentVariants<T>[Property], 'base'>
        : boolean;
};

export type SlotElementProps<T extends BaseConfig> = {
    [Property in keyof ComponentSlots<T>]?: ReactNode;
};

export type LumusElement<T extends keyof JSX.IntrinsicElements, C extends BaseConfig> = JSX.IntrinsicElements[T] &
    ElementProps<C> &
    SlotElementProps<C>;

export type LumusComponentProps<T extends keyof RefElement, C extends BaseConfig> = PropsWithoutRef<
    LumusElement<T, C>
> &
    RefAttributes<RefElement[T]>;

type SpaceUnit = `${number}em` | `${number}rem` | `${number}px`;
type Spacing = 'mt' | 'ml' | 'mb' | 'mr' | 'my' | 'mx' | 'm' | 'p' | 'pt' | 'pl' | 'pb' | 'pr' | 'py' | 'px';
export type SpacingProps = {
    [K in Spacing]?: number | SpaceUnit;
};
