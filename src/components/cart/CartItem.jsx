import styles from './Cart.module.css'
import MinusButton from '../../assets/icons/minus.svg'
import PlusButton from '../../assets/icons/plus.svg'


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

export default function CartItem({currentProduct, setCurrentProduct}) {
  
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
  </>
  )
}

