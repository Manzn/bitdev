import React, { CSSProperties, Fragment, MouseEvent, ReactElement } from 'react';

export default function Button(props: IProps) {
  return (
    <Fragment>
        <button className={'lto-button'} onClick={props.onClick} style={props.style}
            autoFocus={props.autoFocus || false}>
            {props.children}
        </button>

        <style>{`
            .lto-button {
              border: none;
              padding: 5px 20px 5px 20px;
              border-radius: 5px;
              cursor: pointer;
              min-height: 40px;
          
              //noinspection CssNoGenericFontName
              font-family: Metropolis;
              font-size: 14px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.71;
          
              display: flex;
              justify-content: center;
              align-items: center;
          
              transition: all 0.3s;
          
              &:focus {
                outline: 0;
              }
          
              &:hover {
                opacity: 0.8;
                transition: all 0.3s;
              }
          
              &.lto-disabled {
                filter: grayscale(50%);
                color: rgb(100, 100, 100);
                cursor: not-allowed;
              }
            }
            button {
                background-color: #00ffae;
                color: #1c1e24;
            }
        `}</style>
    </Fragment>
  )
}

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
