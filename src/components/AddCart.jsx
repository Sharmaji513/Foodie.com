import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';


const AddCart = () => {

// Subscribed from the store   
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

// Clear the cart 
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }


  

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 m-4  rounded-lg shadow-md">

         
        {cartItems.length > 0 && (
            <button onClick={handleClearCart} className='p-2 m-2 bg-black text-white rounded-md'>Clear Cart</button>
        )}


        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-6">
          {cartItems?.length > 0 ? (
            <>
            
             <h1 className="text-2xl font-bold mb-4 text-center ">Cart</h1>
            <ItemList items={cartItems} />
            <button className='"bg-orange-500 text-white px-2 py-3 rounded-lg text-lg font-bold  mt-6 hover:bg-orange-600'>Remove</button>
            </>
          ) : (
            <img src='https://i.pinimg.com/564x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg'
             className="w-full ">
              
            </img>
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
