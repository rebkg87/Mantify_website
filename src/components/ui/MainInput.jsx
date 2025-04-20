import { forwardRef } from "react"

const MainInput = forwardRef(({ type = "text", id, className, placeholder, ...rest }, ref) => {
    return (
        <input
            type={type}
            id={id}
            ref={ref}
            className={`w-full h-10 rounded-2xl border border-secondary mt-3 place-content-start p-5 text-left focus:outline-tertiary  text-tertiary-foreground placeholder:text-secondary text-sm ${className ? " " + className : ""}`}
            placeholder={placeholder}
            {...rest}
        />
    )
})

export default MainInput