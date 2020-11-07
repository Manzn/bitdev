import { CSSProperties, MouseEvent, ReactElement } from 'react';

export default function Button(props: IProps): JSX.Element;

interface IProps {

    onClick?: ((e: MouseEvent<HTMLButtonElement>) => void);

    disabled?: boolean;

    style?: CSSProperties;

    className?: string;

    children: (string | ReactElement<HTMLBRElement>) | (string | ReactElement<HTMLBRElement>)[];

    block?: boolean;

    autoFocus?: boolean;

    naked?: boolean;

    type?: "submit" | "button";

}

export {};

