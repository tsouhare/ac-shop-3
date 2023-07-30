import { useState } from "react";
import StepProgress from "./step/StepProgress";
import StepOne from "./step/StepOne";
import StepTwo from "./step/StepTwo";
import StepThree from "./step/StepThree";
import ProgressControl from "./step/ProgressControl";
import Cart from "./cart/Cart";
import styles from './MainContainer.module.css'

export default function MainContainer() {
  const [currentStep, setCurrentStep] = useState(1)

  function handleClickBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  function handleClickNext() {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.step}>
        <StepProgress 
          currentStep={currentStep}
        />
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        <ProgressControl
          currentStep={currentStep}
          handleClickBack={handleClickBack}
          handleClickNext={handleClickNext}
        />
      </div>
      <div className={styles.cart}>
        <Cart/>
      </div>
    </div>
  );
}