import { connect } from 'react-redux'
import Checkout from 'APP/app/components/Checkout'
import store from 'APP/app/store'
import { postGuest } from 'APP/app/reducers/guest'

const handleSubmitOrder = (guestEntry) => store.dispatch(postGuest(guestEntry))

const mapStateToProps = (state) =>
    ({
      orderId: state.cart.orderId,
      handleSubmitOrder
    })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)