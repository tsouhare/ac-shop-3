import styles from './Step.module.css'

export default function StepTwo() {
  return (
    <>
      <form className={styles.form} data-phase="shipping">
        <h3>運送方式</h3>
        <section>
            <label className={styles.radioGroup} data-price={0}>
              <div className={styles.groupRadio}>
                <input id="shipping-standard" type="radio" name="shipping" defaultChecked="" checked/>
              </div>
              <div className={styles.groupText}>
                <div>標準運送</div>
                <div>約 3~7 個工作天</div>
              </div>
              <div className={styles.groupPrice}>
                <div className="price">免費</div>
              </div>
              <div />
            </label>
            <label className={styles.radioGroup} data-price={500}>
              <div className={styles.groupRadio}>
                <input id="shipping-dhl" type="radio" name="shipping" />
              </div>
              <div className={styles.groupText}>
                <div>DHL 貨運</div>
                <div>48 小時內送達</div>
              </div>
              <div className={styles.groupPrice}>
                <div className="price">500</div>
              </div>
              <div />
            </label>
        </section>
      </form>
    </>
  );
}