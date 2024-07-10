import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, ReactElement } from 'react';
import { View } from 'react-native';

interface AccordionContextType {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const Accordion = ({ children }: { children: ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <View>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement<any>, { index: index + 1, toggleItem });
          }
          return child;
        })}
      </View>
    </AccordionContext.Provider>
  );
};

export default Accordion;
