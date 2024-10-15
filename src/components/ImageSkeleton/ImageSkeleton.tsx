import { Skeleton } from '@nextui-org/react';
import { type ReactElement } from 'react';

const ImageSkeleton = (): ReactElement => {
  return (
    <Skeleton className="absolute left-0 top-0 z-0 w-full h-full">
      <div className="w-full h-full"></div>
    </Skeleton>
  );
};

export default ImageSkeleton;
