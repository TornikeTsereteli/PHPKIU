const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium text-sm text-orange-500`}
        {...props}>
        {children}
    </label>
)

export default Label
