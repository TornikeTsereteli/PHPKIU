const Ticket = ({ quantity, start_location, end_location, total_price }) => {
    return (
        <div class="flex flex-col items-start p-4 w-72 bg-orange-500 text-white rounded-lg shadow-lg">
            <div class="text-lg font-semibold mb-2">
                Route:
                <span class="block text-sm font-normal mt-1">
                    {start_location} ➡️ {end_location}
                </span>
            </div>
            <div class="flex justify-between w-full mb-2">
                <span class="font-medium">Quantity:</span>
                <span>{quantity}</span>
            </div>
            <div class="flex justify-between w-full">
                <span class="font-medium">Total Price:</span>
                <span>${total_price}</span>
            </div>
        </div>
    )
}

export default Ticket
