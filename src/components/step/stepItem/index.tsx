import React, { useContext } from 'react';
import { View } from 'react-native';
import { StepContext } from './..';
import Heading from '../../heading';
import { StepItemStyles } from './styles';
import { ContextTheme } from '../../../provider';

interface StepItemProps {
  stepIndex?: number;
  title: string;
  children?: React.ReactNode;
}

const StepItem = ({ stepIndex, title, children }: StepItemProps) => {
  const context = useContext(StepContext);
  const config = useContext(ContextTheme);
  const styles = StepItemStyles(config)

  const isFirst = stepIndex === 0;
  const isLast = stepIndex === context?.totalSteps! - 1;
  const isActive = stepIndex! <= context?.currentStep!;

  return (
    <View style={styles.stepContainer}>
      <View style={styles.iconContainer}>
        {!isLast && (
          <View style={[styles.line, isActive ? styles.activeLine : styles.inactiveLine]} />
        )}
        <View style={[styles.circle, isActive ? styles.activeCircle : styles.inactiveCircle, (isFirst || isLast) ? styles.circleLarge : styles.circleSmall]} />
      </View>
      <View style={styles.stepContent}>
        <Heading size='sm' style={[styles.title, isActive ? styles.titleActive : undefined]}>{title}</Heading>
        {children}
      </View>
    </View>
  );
};

export default StepItem;
