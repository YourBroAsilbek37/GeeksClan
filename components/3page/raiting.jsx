import React from 'react'

const Raiting = () => {
    return (
        <div>
            <div className="rating rating-xs">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
            </div>
        </div>
    )
}

export default Raiting