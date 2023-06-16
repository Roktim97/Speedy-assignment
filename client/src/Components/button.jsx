const Button = (prop) => {
    return (
        <>
        <button onClick={prop.data.onclick}>{prop.data.title}</button>
        </>
    )
}

export default Button