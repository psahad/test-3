import React, { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.css';
import Orders from "./Orders";
import outlets from "../data/outletData";

import { MenuStore } from '../store/Menu';

const Main = () => {
  const [quantity, setQuantity] = useState(1);
  

  const handleMenu = () => {
    MenuStore.update(s => {
      s.menu = true;
    })
  }

  const handleAddCart = () => {
    toast.success(`${quantity} items added to cart`)
  }


  const plus = () => {
    setQuantity(quantity+1);
  }
  const minus = () => {
    if (quantity > 1)
      setQuantity(quantity-1);
  }

  return (
    <main>
      <div className='top-container'>
        <div className='left'>
          <h5>Hi Jane Eyre,</h5>
          <h2>Welcome back 👋</h2>
        </div>
        <div className='navbar'>
          <a className='burger'  href='#'>
            <img src='images/burger.svg' alt='' onClick={handleMenu}/>
          </a>
          <div className='actions'>
            <div className='search-box'>
              <a>
                <img src='images/Search.png' alt='' />
              </a>
              <input type="text" placeholder='Search' />
            </div>
            <div className='notification'>
              <img src='images/bell.png' />
              <div className='count'>
                <p>2</p>
              </div>
            </div>
            <img src="images/Avatar.png" className='avatar' />
          </div>
        </div>
      </div>
      {/* END OF TOP CONTAINER */}

      <h5 className='product-details'>Product Details</h5>
      <div className='product-container'>
        <div className='section-1'>
          <div className='images'>
            <div className='main-image'>
              <img src='images/chair.png' />
            </div>
            <div className='sub-image'>
              <img src='images/chair1.png' />
              <img src='images/chair2.png' />
              <img src='images/chair3.png' />
            </div>
          </div>
          <div className='description'>
            <div className='title-wrap'>
              <h4>Great Modern Chair</h4>
              <img src='./images/pen.png' />
            </div>
            <p className='date'>Added Date: 09/02/2021</p>
            <img src='images/stars.png' />
            <div className='stock-status'>
              <p>In Stock</p>
            </div>
            <h4>$250.99</h4>
            <div className='quantity-add'>
              <div className='quantity-wrap'>
                <button id='minus' onClick={minus}>-</button>
                <p>{quantity}</p>
                <button id='plus' onClick={plus}>+</button>
              </div>
              <button id='add-to-cart' onClick={handleAddCart}>Add to cart</button>
              <ToastContainer />
            </div>
            <h6>Description:</h6>
            <p className='para'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <div className='statistics'>
              <div className='item'>
                <p>Available Stock</p>
                <p>1240</p>
              </div>
              <div className='item'>
                <p>Available Stock</p>
                <p>1240</p>
              </div>
              <div className='item'>
                <p>Available Stock</p>
                <p>1240</p>
              </div>
            </div>
          </div>
        </div>

        <div className='section-2'>
          <table>
            <colgroup>
              <col span={2} className='first'></col>
              <col span={2} className='second'></col>
            </colgroup>
            <thead>
              <tr>
                  <th scope='col'>Outlets</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Stock</th>
                  <th scope='col'>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {outlets.map(item => {
                return(
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td className='stock'><div className='outer'><div className={`inner ${item.class}`}></div></div>{item.stock}</td>
                    <td>${item.revenue}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Orders />
    </main>
  )
};

export default Main;
