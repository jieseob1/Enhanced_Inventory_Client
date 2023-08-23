
import React, {
  Suspense as ReactSuspense,
  SuspenseProps as ReactSuspenseProps,
  CSSProperties,
} from 'react';
import styled from 'styled-components';

import Spinner from '../Spinner';

type SuspenseType = 'page' | 'component' | 'button';
interface SuspenseProps extends Omit<ReactSuspenseProps, 'fallback'> {
  type?: SuspenseType;
  fallback?: NonNullable<React.ReactNode> | null;
}

// ====

const SpinnerWrapper = styled.div<{ height?: CSSProperties['height'] }>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 0;
`;

const fallbackByType = {
  page: (
    <SpinnerWrapper height="100%">
      <Spinner size="small" />
    </SpinnerWrapper>
  ),
  component: (
    <SpinnerWrapper height="200px">
      <Spinner size="small" />
    </SpinnerWrapper>
  ),
  button: (
    <SpinnerWrapper>
      <Spinner size="small" />
    </SpinnerWrapper>
  ),
};

const Suspense = ({
  type = 'page',
  fallback,
  ...props
}: SuspenseProps) => (
  <ReactSuspense
    fallback={fallback !== undefined ? fallback : fallbackByType[type]}
    {...props}
  />
);

export default Suspense;
