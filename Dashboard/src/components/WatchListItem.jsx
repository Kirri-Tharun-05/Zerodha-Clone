
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WatchListActions from "./WatchListActions";
function WatchListItem({ stock }) {

    const [showWatchListAction, setshowWatchListAction] = useState(false);

    const handleMouseEnter = (event) => {
        setshowWatchListAction(true);
    }
    const handleMouseLeave = (event) => {
        showWatchListAction(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? 'down' : 'up'}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDownIcon className="down" />
                    ) : (<KeyboardArrowUpIcon className="up" />)}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchListAction && <WatchListActions uid={stock.name}/>}
        </li>
    )
}
export default WatchListItem;