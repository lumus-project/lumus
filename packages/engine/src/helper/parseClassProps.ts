import generateClassNames from './generateClassNames';
import parseElementProps from './parseElementProps';
import { BaseConfig } from '../../types';

export default function parseClassProps(config: BaseConfig, className?: string, props?: any): string {
    return generateClassNames(
        config.classNames.base,
        className,
        config.classNames.variants && parseElementProps(config.classNames.variants, props)
    );
}
