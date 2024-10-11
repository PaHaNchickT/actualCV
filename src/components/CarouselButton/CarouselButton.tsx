'use client';

import { Button } from '@nextui-org/react';
import type { Dispatch, ReactElement, SetStateAction } from 'react';

import { ASSETS_PATH } from '@/constants/global-constants';

const CarouselButton = (props: {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  isPlus: boolean;
}): ReactElement => {
  const isDisableCalc = (): boolean => {
    let outputValue;

    if (props.isPlus) {
      props.counter < ASSETS_PATH.diplomas.length - 1 ? (outputValue = false) : (outputValue = true);
    } else {
      props.counter > 0 ? (outputValue = false) : (outputValue = true);
    }
    return outputValue;
  };

  return (
    <>
      <Button
        color="primary"
        onPress={() => {
          if (props.counter > 0 && !props.isPlus) {
            props.setCounter((prevCount) => (prevCount -= 1));
          } else if (props.counter < ASSETS_PATH.diplomas.length - 1 && props.isPlus) {
            props.setCounter((prevCount) => (prevCount += 1));
          }
        }}
        isDisabled={isDisableCalc()}
        className="text-background font-black min-w-10"
      >
        {props.isPlus ? '>' : '<'}
      </Button>
    </>
  );
};

export default CarouselButton;
