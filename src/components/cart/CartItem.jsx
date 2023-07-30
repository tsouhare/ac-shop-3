import styles from './Cart.module.css'
import MinusButton from '../../assets/icons/minus.svg'
import PlusButton from '../../assets/icons/plus.svg'
import {itemsData} from './itemsData.js'
import {useState} from "react"


function ProductsInfo({id, name, img, price, quantity, handleMinus, handlePlus }) {
  return(
    <div className={styles.productContainer} id={id} data-count="0" data-price={price}>
      <img className={styles.productImgContainer} alt={name} src={img} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <img className={styles.minusButton} src={MinusButton} alt="MinusButton" onClick={() => handleMinus(id)}/>
            <span className={styles.productCount}>{quantity}</span>
            <img className={styles.plusButton} src={PlusButton} alt="PlusButton" onClick={() => handlePlus(id)}/>
          </div>
        </div>
        <div className={styles.productPrice}>${price}</div>
      </div>
    </div>
  )
}

export default function CartItem() {
  const [currentProduct, setCurrentProduct] = useState(itemsData);
  function handleClickPlus(id) {
    const newCurrentProduct = currentProduct.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    setCurrentProduct(newCurrentProduct)
  }

  function handleClickMinus(id) {
    const newCurrentProduct = currentProduct.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product
      }
    })
    setCurrentProduct(newCurrentProduct)
  }

  function sumPrice () {
    let totalPrice= 0
    for( let i = 0; i < currentProduct.length; i++ ) {
      totalPrice += currentProduct[i].price * currentProduct[i].quantity;
    }
    return (totalPrice)
  }
  
  return(
  <>
    <section className={styles.productList}>
      {currentProduct.map(item => <ProductsInfo {...item} 
      key={item.id}
      handleMinus={handleClickMinus}
      handlePlus={handleClickPlus}
      />
      )}
    </section>
    <hr></hr>
    <section className={styles.cartInfo}>
      <div className={styles.text}>運費</div>
      <div className={styles.price}>免費</div>
    </section>
    <hr></hr>
    <section className={styles.cartInfo}>
      <div className={styles.text}>小計</div>
      <div className={styles.price}>{sumPrice()}</div>
    </section>
  </>
  )
}

