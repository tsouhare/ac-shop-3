import styles from './ProgressControl.module.css'
import leftArrow from '../../assets/icons/left-arrow.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'


export default function ProgressControlButton ({currentStep, handleClickBack, handleClickNext}) {
  return (
  <>
    <hr />
    <section className={styles.buttonBox}>
      <div 
       onClick={handleClickBack}
       className={currentStep === 1 ? styles.hide : styles.back}  
       data-phase="shipping">
         <img className={styles.leftArrow} src={leftArrow} alt="leftArrow" />  上一步
      </div>
      <div 
      onClick={handleClickNext}
      className={styles.next}
       data-phase="address">
        {currentStep === 3 ? "確認下單" : "下一步"}  
        {currentStep < 3 && <img src={rightArrow} alt="rightArrow" />}
      </div>
    </section>
  </>
  )
}