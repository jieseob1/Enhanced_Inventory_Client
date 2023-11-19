import React, { CSSProperties } from 'react';

interface PaddingProps {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const Padding: React.FC<PaddingProps> = ({ left, right, top, bottom }) => {
  // 고정된 스케일 값을 사용하여 패딩을 계산합니다. 여기서는 8px를 기본 단위로 사용합니다.
  const scale = 8;

  // CSSProperties를 사용하여 스타일 객체의 타입을 정의합니다.
  const styles: CSSProperties = {
    paddingLeft: left ? `${left * scale}px` : undefined,
    paddingRight: right ? `${right * scale}px` : undefined,
    paddingTop: top ? `${top * scale}px` : undefined,
    paddingBottom: bottom ? `${bottom * scale}px` : undefined,
  };

  // 스타일이 적용된 div를 반환합니다.
  return <div style={styles} />;
};

export default Padding;