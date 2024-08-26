import React from 'react';
import { Navigation } from '@shopify/polaris';
import { HomeMajor, InventoryMajor, OrdersMajor, CustomersMajor, StoreMajor, ProductsMajor, CashDollarMajor, PackageMajor, RefundMajor } from '@shopify/polaris-icons';

const AppNavigation = () => {
  /**
   * 1. 대시보드
   * 2. 구매 관리
   *  구매 오더 생성: /purchase/create-order - 새로운 구매 오더를 생성합니다.
      구매 오더 목록: /purchase/orders - 모든 구매 오더를 조회하고 관리합니다.
   * 3. 재고 관리
        재고 현황: /inventory/overview - 현재 재고 상태를 조회합니다.
        재고 추가: /inventory/add - 새 재고를 추가합니다.
        재고 조정: /inventory/adjust - 재고 수량을 조정합니다.
   * 4. 출고 관리
        출고 오더 생성: /shipping/create-order - 새로운 출고 오더를 생성합니다.
        출고 오더 목록: /shipping/orders - 모든 출고 오더를 조회하고 관리합니다.
        배송 상태: /shipping/status - 현재 배송 상태를 조회합니다.
   * 5. 고객 관리
        고객 목록: /customers/list - 모든 고객 목록을 조회합니다.
        고객 추가: /customers/add - 새로운 고객을 추가합니다.
   * 6. 공급 업체 관리
        공급 업체 목록: /suppliers/list - 모든 공급 업체 목록을 조회합니다.
        공급 업체 추가: /suppliers/add - 새로운 공급 업체를 추가합니다.
   * 7. 상품 관리
        상품 목록: /products/list - 모든 상품 목록을 조회합니다.
        상품 추가: /products/add - 새로운 상품을 추가합니다.
   * 8. 주문 관리
   * 9. 결제 관리
   * 10. 배송 관리
   * 11. 환불 관리
   * 
   */
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: '대시보드',
            icon: HomeMajor,
            url: '/dashboard',
          },
          {
            label: '구매 관리',
            icon: OrdersMajor,
            subNavigationItems: [
              {
                label: '구매 오더 생성',
                url: '/purchase/create-order',
              },
              {
                label: '구매 오더 목록',
                url: '/purchase/orders',
              },
            ],
          },
          {
            label: '재고 관리',
            icon: InventoryMajor,
            subNavigationItems: [
              {
                label: '재고 현황',
                url: '/inventory/overview',
              },
              {
                label: '재고 추가',
                url: '/inventory/add',
              },
              {
                label: '재고 조정',
                url: '/inventory/adjust',
              },
            ],
          },
          {
            label: '출고 관리',
            icon: PackageMajor,
            subNavigationItems: [
              {
                label: '출고 오더 생성',
                url: '/shipping/create-order',
              },
              {
                label: '출고 오더 목록',
                url: '/shipping/orders',
              },
              {
                label: '배송 상태',
                url: '/shipping/status',
              },
            ],
          },
          {
            label: '고객 관리',
            icon: CustomersMajor,
            subNavigationItems: [
              {
                label: '고객 목록',
                url: '/customers/list',
              },
              {
                label: '고객 추가',
                url: '/customers/add',
              },
            ],
          },
          {
            label: '공급 업체 관리',
            icon: StoreMajor,
            subNavigationItems: [
              {
                label: '공급 업체 목록',
                url: '/suppliers/list',
              },
              {
                label: '공급 업체 추가',
                url: '/suppliers/add',
              },
            ],
          },
          {
            label: '상품 관리',
            icon: ProductsMajor,
            subNavigationItems: [
              {
                label: '상품 목록',
                url: '/products/list',
              },
              {
                label: '상품 추가',
                url: '/products/add',
              },
            ],
          },
          {
            label: '주문 관리',
            icon: OrdersMajor,
            subNavigationItems: [
              {
                label: '주문 목록',
                url: '/orders/list',
              },
              {
                label: '주문 생성',
                url: '/orders/create',
              },
            ],
          },
          {
            label: '결제 관리',
            icon: CashDollarMajor,
            subNavigationItems: [
              {
                label: '결제 목록',
                url: '/payments/list',
              },
              {
                label: '결제 처리',
                url: '/payments/process',
              },
            ],
          },
          {
            label: '환불 관리',
            icon: RefundMajor,
            subNavigationItems: [
              {
                label: '환불 목록',
                url: '/refunds/list',
              },
              {
                label: '환불 처리',
                url: '/refunds/process',
              },
            ],
          },
        ]}
      />
    </Navigation>
  );
}

export default AppNavigation;