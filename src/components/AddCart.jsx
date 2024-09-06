import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../store/cartSlice';


const AddCart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 m-4 rounded-lg shadow-md">
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-md">
            Clear Cart
          </button>
        )}
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-6">
          {cartItems?.length > 0 ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1>
              <ItemList items={cartItems} isCartView={true} />
            </>
          ) : (
            <div>
              <h1 className='text-2xl text-center text-orange-400 mb-4 font-bold'>You cart is Empty </h1>
            <img
              src="https://media1.tenor.com/m/E9Nz3P1xN94AAAAC/ashneer-grover-bhai-kya-kar-rha-hai-tu.gif"
              className="w-[50vw] rounded-md"
              alt="Empty Cart"
            />
          
          
            </div>
          )}
        </div>
        {cartItems?.length > 0 && (
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-bold uppercase mt-6 hover:bg-orange-600 transition">
            Proceed to Checkout
          </button>
        )}
      </div>
    </>
  );
};

export default AddCart;
