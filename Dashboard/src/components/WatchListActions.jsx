import { Tooltip, Grow } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function WatchListActions({ uid }) {

    return (
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow>
                    <button className='buy'>Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement='top' arrow>
                    <button className='sell'>Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement='top' arrow>
                    <button className='action'>
                        <BarChartIcon />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement='top' arrow>
                    <button>
                        <MoreHorizIcon />
                    </button>
                </Tooltip>
            </span>
        </span>
    );

}
export default WatchListActions;