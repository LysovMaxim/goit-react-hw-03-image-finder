import css from "./Button.module.css"

export const Button = ({ onClick }) => {
    return <button className={css.Button} type="Button" onClick={onClick}>Load more</button>
}