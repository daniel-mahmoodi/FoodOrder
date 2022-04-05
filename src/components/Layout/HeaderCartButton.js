
import { useContext,useState,useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';

const HeaderCartButton = props=>{
     const cartctx=useContext(CartContext)
     const [btnHighLighted,setBtnHighLighted]= useState(false)
     const {items} = cartctx
     const numberOfCartItems=items.reduce((curNumber,item)=>{
          return curNumber+item.amount;
     },0)
     const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ''}`

     useEffect(() => {
          if (items.length === 0){
               return ;
          }
          setBtnHighLighted(true)

          const timer = setTimeout(()=>{
               setBtnHighLighted(false)
          },300)     
       return () => {
         clearTimeout(timer)
       }
     }, [items])
     
      return <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                 <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                 {numberOfCartItems}
            </span>
      </button>
 };

 export default HeaderCartButton;





