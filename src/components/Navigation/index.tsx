import React from 'react';
import { Navigation } from '@shopify/polaris';
import { HomeMajor, InventoryMajor, OrdersMajor } from '@shopify/polaris-icons';

const AppNavigation = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/',
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            url: '/inventory',
            label: 'Inventory',
            icon: InventoryMajor,
          },
          {
            url: '/inventoryManagement',
            label: 'Inventory Management',
            icon: InventoryMajor,
          },
          {
            url: '/orders',
            label: 'Orders',
            icon: OrdersMajor,
          },
          // {
          //   url: '/shipping',
          //   label: 'Shipping',
          //   icon: ShippingMajor,
          // },
        ]}
      />
    </Navigation>
  );
}

export default AppNavigation;