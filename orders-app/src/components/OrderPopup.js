import Popup from 'reactjs-popup';
import PopupContent from '../components/PopupContent'
import ordersitem from '../styles/OrderItem.module.css';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
const OrderPopup = ({order}) => {

    return (
    <Popup
    trigger={<h3 className={ordersitem.h3}>Продавец: {order.customer} <StorefrontOutlinedIcon/></h3>}
    position="center"
    modal
    >
    {close => (
    <PopupContent order={order} closePopup={close} />
    )}
    </Popup>
    );
    
    }

    export default OrderPopup