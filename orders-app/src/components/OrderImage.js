import ordersitem from '../styles/OrderItem.module.css';


const OrderImage = ({order}) => {
    return (
    <div className={ordersitem.imageswrapper}>
    <img
    className={ordersitem.imageswrapper}
    src={require(`../../public/${order.image}.png`)}
    alt={order.product}
    />
    </div>
    )
    }

    export default OrderImage