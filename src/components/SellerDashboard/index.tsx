import React, { useState } from 'react';
import {
  AppProvider,
  Frame,
  Navigation,
  TopBar,
  Layout,
  Page,
  LegacyCard,
  DataTable,
  Tabs,
  Badge,
  Button,
  Select,
  DatePicker,
} from '@shopify/polaris';
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  CustomersMinor,
  AnalyticsMinor,
  SettingsMinor,
} from '@shopify/polaris-icons';

const SellerDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: 'all', content: '전체', badge: '74' },
    { id: 'waiting', content: '대기중', badge: '12' },
    { id: 'processing', content: '진행중', badge: '45' },
    { id: 'completed', content: '완료', badge: '4' },
    { id: 'cancelled', content: '취소', badge: '1' },
    { id: 'returned', content: '반품', badge: '12' },
  ];

  const rows = [
    //no, 상품코드, 상태
    ['1', '100096', '대기중'],
    ['2', '100095', '대기중'],
    ['3', '100094', '대기중'],
    ['4', '100093', '처리'],
    ['5', '100092', '처리'],
  ];

  return (
    <AppProvider i18n={{}}>
      <Frame
        topBar={<TopBar />}
        navigation={
          <Navigation location="/">
            <Navigation.Section
              items={[
                { label: '대시보드', icon: HomeMinor },
                { label: '상품', icon: ProductsMinor },
                { label: '주문', icon: OrdersMinor },
                { label: '고객', icon: CustomersMinor },
                { label: '분석', icon: AnalyticsMinor },
                { label: '설정', icon: SettingsMinor },
              ]}
            />
          </Navigation>
        }
      >
        <Page title="셀러 대시보드" fullWidth>
          <Layout>
            <Layout.Section oneThird>
              <LegacyCard title="셀러업 멤버십" sectioned>
                <p>판매코드: s100000</p>
                <p>사용버전: Ultra</p>
                <p>잔여기간: 27945일</p>
                <p>조회서비스: 포함</p>
                <Button fullWidth>쇼핑몰 SCM 바로가기</Button>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section>
              <LegacyCard>
                <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab}>
                  <LegacyCard.Section title="상품 검색">
                    <Layout>
                      <Layout.Section oneThird>
                        <Select label="검색 기준" options={[{ label: '상품등록일', value: 'registrationDate' }]} />
                      </Layout.Section>
                      <Layout.Section oneThird>
                        <DatePicker
                          month={6}
                          year={2023}
                          onChange={() => { }}
                          onMonthChange={() => { }}
                        />
                      </Layout.Section>
                      <Layout.Section oneThird>
                        <Button fullWidth primary>
                          검색
                        </Button>
                      </Layout.Section>
                    </Layout>
                  </LegacyCard.Section>
                  <LegacyCard.Section>
                    <DataTable
                      columnContentTypes={['text', 'numeric', 'text']}
                      headings={['No', '상품코드', '상태']}
                      rows={rows}
                    />
                  </LegacyCard.Section>
                </Tabs>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </Page>
      </Frame>
    </AppProvider>
  );
};

export default SellerDashboard;