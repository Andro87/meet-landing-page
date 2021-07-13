import React from "react";
import styles from "./Button.module.scss";
interface Props {
    readonly title: string;
    readonly color?: string;
    readonly version?: string;
    readonly vcolor?: string;
}

const Button: React.FunctionComponent<Props> = props => {
    const { title, color, version, vcolor } = props;
    return (
        <button
            type="button"
            aria-label="button"
            className={`${styles.button} ${styles[color]}`}
        >
            {title}
            <span className={styles[vcolor]}>{version}</span>
        </button>
    );
};
export default Button;
