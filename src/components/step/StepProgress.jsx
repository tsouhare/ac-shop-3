import styles from './StepProgress.module.css'
import { ReactComponent as CheckedIcon } from "../../assets/icons/pg-complete.svg";

function Step({currentStep, stepProgress, stepTitle}) {
  return (
    <span className={currentStep >= stepProgress ? styles.currentGroup : styles.progressGroup}>
      <span className={styles.progressIcon}>
        <span className={styles.stepsIcon}> {currentStep > stepProgress ? <CheckedIcon className={styles.checkedIcon}/> : stepProgress} </span>
      </span>
      <span className={styles.title}>{stepTitle}</span>
    </span>
  )
}

function ProgressBar({currentStep, stepProgress}) {
  return (
    <span className={currentStep > stepProgress ? styles.checkedBar : styles.bar}>
    </span>
  );
}

export default function StepProgress({currentStep}) {

  return (
    <>
      <section>
        <h2 class="registerTitle">結帳</h2>

        <div className={styles.container}>
            <Step currentStep={currentStep} stepProgress={1} stepTitle={"寄送地址"}/>
            <ProgressBar currentStep={currentStep} stepProgress={1} />
            <Step currentStep={currentStep} stepProgress={2} stepTitle={"運送方式"}/>
            <ProgressBar currentStep={currentStep} stepProgress={2} />
            <Step currentStep={currentStep} stepProgress={3} stepTitle={"付款資訊"}/>
        </div>
      </section>
    </>
  );
}