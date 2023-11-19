import React, { CSSProperties } from 'react';

interface MarginProps {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

const Margin: React.FC<MarginProps> = ({ left, right, top, bottom }) => {
  // 고정된 스케일 값을 사용하여 마진을 계산합니다. 여기서는 8px를 기본 단위로 사용합니다.
  const scale = 8;

  // CSSProperties를 사용하여 스타일 객체의 타입을 정의합니다.
  const styles: CSSProperties = {
    marginLeft: left ? `${left * scale}px` : undefined,
    marginRight: right ? `${right * scale}px` : undefined,
    marginTop: top ? `${top * scale}px` : undefined,
    marginBottom: bottom ? `${bottom * scale}px` : undefined,
  };

  // 스타일이 적용된 div를 반환합니다.
  return <div style={styles} />;
};

export default Margin;