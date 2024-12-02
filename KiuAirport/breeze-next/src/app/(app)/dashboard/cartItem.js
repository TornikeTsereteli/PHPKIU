const CartItem = ({
    id,
    price,
    count,
    start_location,
    removeTicketByID,
    addTicketByID,
    end_location,
}) => {
    return (
        <li className="w-full flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded-md shadow-sm">
                    {start_location} {'->'} {end_location}
                </div>
                <span className="text-gray-700 font-medium">$ {price}</span>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => removeTicketByID(id)}
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-1 rounded-md shadow-sm">
                    -
                </button>
                <span className="text-gray-700 font-medium">{count}</span>
                <button
                    onClick={() => addTicketByID(id)}
                    className="bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 rounded-md shadow-sm">
                    +
                </button>
            </div>
        </li>
    )
}

export default CartItem
