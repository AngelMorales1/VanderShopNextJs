import Link from 'next/link'
import PropTypes from 'prop-types';
import styles from './button.module.scss'
import clsx from 'clsx'

export const Button = ({onClick,color,children,link,margin,border})=>{

    const ButtonLink = ({children})=>{
        if (link) {
            return (<Link href={link}>{children}</Link >)
        }else{
            return <>{children}</>
        }
    }

    return(
        <ButtonLink>
            <button
            className={clsx(styles.button, styles[color])}
            style={{margin: margin, border: border}}
            onClick={onClick}>
                {children}
            </button>
        </ButtonLink>
    )
}

Button.propTypes={
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black","white"]),
    link: PropTypes.string,
    margin: PropTypes.string,
    border: PropTypes.string
}

Button.defaultProps={
    onClick: ()=>{},
    color: "black",
    link: "",
    margin: "5px",
    border: ""
}