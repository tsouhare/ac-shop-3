import styles from './Step.module.css'

export default function StepThree() {
  return (
    <>
      <form className={styles.form} data-phase="credit-card">
        <h3>付款資訊</h3>
        <section>
          <div className={styles.formLine}>
            <div className={styles.selectL}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input className={styles.selections} type="text" placeholder="John Doe" />
            </div>
          </div>
          <div className={styles.formLine}>
            <div className={styles.selectL}>
              <div className={styles.inputLabel}>卡號</div>
              <input className={styles.selections} type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>
          <div className={styles.formLine}> 
            <div className={styles.selectM}>
              <div className={styles.inputLabel}>有效期限</div>
              <input className={styles.selections} type="text" placeholder="MM/YY" />
            </div>
            <div className={styles.selectM}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input className={styles.selections} type="text" placeholder={123} />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}