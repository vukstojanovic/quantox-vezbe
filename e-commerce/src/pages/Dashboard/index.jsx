

// function Dashboard() {

//     return (
//         <div className="cart">
//             <h2>Your shopping cart</h2>
//             <p>Item types: {cartItems.length}, Total number: {cartItems.map(item => item.amount).reduce((prev, next) => prev + next)}</p>
//             <div className="cart-products">
//                 {cartItems.map(item => {
//                     const {id} = item;
//                     return (
//                         <CartItem 
//                             key={id} 
//                             {...item} 
//                         />
//                     )
//                 })}
//             </div>
//             <div className="bottom-cart">
//                 <div className="total">Subtotal: {total} $</div>
//                 <div className="buttons">
//                     <button className="empty" onClick={() => dispatch(empty())}>empty cart</button>
//                     <button className="checkout" onClick={sendOrder}>checkout</button>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default Dashboard;