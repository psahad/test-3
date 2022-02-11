import React from 'react';
import orderItems from '../data/orderData';
import './orders.css'

const Orders = () => {
  return (
    <div className='orders'>
        <h5>Orders</h5>
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th scope='col'><input type='checkbox'></input></th>
                        <th scope='col'>Order ID</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Payment status</th>
                        <th scope='col'>Total</th>
                        <th scope='col'>Payment method</th>
                        <th scope='col'>Order status</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(orderItems)}
                    {orderItems.map(item => {
                        return(
                            <tr key={item.orderId}>
                                <td><input type='checkbox'></input></td>
                                <td className='order-id'>{item.orderId}</td>
                                <td className='date'>{item.date} <span>{item.time}</span></td>
                                <td><div className={`status ${item.paymentStatus}`}>{item.paymentStatus}</div></td>
                                <td>${item.total}</td>
                                <td>{item.paymentMethod}</td>
                                <td><div className={`status ${item.orderStatus}`}>{item.orderStatus}</div></td>
                                <td className='action'><a className='action-item'><img src='./images/pen.png' /></a><a className='action-item delete'><img src='./images/box.png' /></a></td>
                            </tr>
                        )
                    })}
                    
                    
                </tbody>
                
            </table>
        </div>
    </div>
  ) 
};

export default Orders;
