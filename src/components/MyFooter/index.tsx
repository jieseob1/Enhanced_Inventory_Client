// import React from 'react';
// import {
//   Button,
//   Footer,
//   Text,
//   Link,
//   FooterHelp,
//   FooterBusinessInfo,
//   LegacyStack,
// } from '@shopify/polaris';

// function MyFooter() {
//   return (
//     <Footer>
//       <Footer.Section>
//         <LegacyStack>
//           <LegacyStack.Item fill>
//             <Text variant="headingMd" as="h3">WMS 솔루션</Text>
//             <p>창고 관리를 위한 통합 솔루션</p>
//           </LegacyStack.Item>
//           <LegacyStack.Item>
//             <Button plain url="#">
//               블로그 바로가기
//             </Button>
//           </LegacyStack.Item>
//         </LegacyStack>
//       </Footer.Section>

//       <Footer.Section>
//         <LegacyStack>
//           <LegacyStack.Item fill>
//             <Text variant="headingMd" as="h3">회사 정보</Text>
//             <FooterLink url="#">회사 소개</FooterLink>
//             <FooterLink url="#">인재 채용</FooterLink>
//             <FooterLink url="#">고객사 리스트</FooterLink>
//           </LegacyStack.Item>
//           <LegacyStack.Item fill>
//             <Text variant="headingMd" as="h3">솔루션</Text>
//             <FooterLink url="#">WMS 기능</FooterLink>
//             <FooterLink url="#">제품 데모 신청</FooterLink>
//             <FooterLink url="#">도입 사례</FooterLink>
//           </LegacyStack.Item>
//         </LegacyStack>
//       </Footer.Section>

//       <Footer.Section>
//         <LegacyStack alignment="center">
//           <LegacyStack.Item>
//             <Text variant="headingMd" as="h3">고객 지원</Text>
//             <FooterLink url="#">이용 가이드</FooterLink>
//             <FooterLink url="#">자주 묻는 질문</FooterLink>
//             <FooterLink url="#">문의하기</FooterLink>
//           </LegacyStack.Item>
//           <LegacyStack.Item>
//             <Text variant="headingMd" as="h3">연락처</Text>
//             <p>이메일: support@wms.com</p>
//             <p>전화번호: 02-1234-5678</p>
//             <p>주소: 서울시 강남구 테헤란로 123</p>
//           </LegacyStack.Item>
//         </LegacyStack>
//       </Footer.Section>

//       <Footer.Section>
//         <FooterHelp>
//           WMS 솔루션에 대한 궁금한 점이 있으신가요? 언제든지 연락 주시기 바랍니다.
//         </FooterHelp>
//       </Footer.Section>

//       <Footer.Section>
//         <FooterBusinessInfo>
//           사업자 등록 번호: 123-45-67890 | 대표이사: 홍길동 | 회사명: (주) WMS 솔루션
//         </FooterBusinessInfo>
//       </Footer.Section>
//     </Footer>
//   );
// }

// const FooterLink = ({ children, url }) => (
//   <Link url={url} monochrome>
//     {children}
//   </Link>
// );

// export default MyFooter;