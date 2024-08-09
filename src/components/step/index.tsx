import React, { useState, createContext, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

interface StepContextProps {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  totalSteps: number;
}

export const StepContext = createContext<StepContextProps | undefined>(undefined);

interface StepProps {
  active: number;
  children: React.ReactNode;
}

const Step = ({ active, children }: StepProps) => {
  const [currentStep, setCurrentStep] = useState(active - 1);
  const totalSteps = React.Children.count(children);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <StepContext.Provider value={{ currentStep, nextStep, prevStep, totalSteps }}>
      <View style={styles.container}>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child as React.ReactElement, { stepIndex: index })
        )}
      </View>
    </StepContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Step;
