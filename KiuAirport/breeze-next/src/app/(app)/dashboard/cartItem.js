const CartItem = ({
    id,
    price,
    count,
    start_location,
    removeTicketByID,
    addTicketByID,
}) => {
    return (
        <li className="w-5/6 flex justify-between  py-2 border-b">
            <span>{start_location}</span>
            <span>$ {price}</span>
            <button
                onClick={() => {
                    removeTicketByID(id)
                }}>
                -
            </button>
            <button
                onClick={() => {
                    addTicketByID(id)
                }}>
                +
            </button>
            <span>{count}</span>
        </li>
    )
}

export default CartItem
