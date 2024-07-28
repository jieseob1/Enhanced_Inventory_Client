import React from 'react';
import { Icon, TopBar } from '@shopify/polaris';
import { ConversationMinor, LogOutMinor, PhoneInMajor, ProfileMinor, QuestionMarkMajor } from '@shopify/polaris-icons';

interface HeaderProps {
  onToggle: () => void;
}

const searchFieldMarkup = (
  <TopBar.SearchField
    onChange={() => { }}
    value=""
    placeholder="검색..."
  />
);

const Header = ({ onToggle }: HeaderProps) => {
  return (
    <TopBar
      showNavigationToggle
      searchField={searchFieldMarkup}
      userMenu={
        <TopBar.UserMenu
          actions={[
            {
              items: [
                { content: '프로필', icon: ProfileMinor },
                { content: '로그아웃', icon: LogOutMinor },
              ],
            },
          ]}
          name="사용자 이름"
          detail="관리자"
          initials="A"
          open
          onToggle={onToggle}
        />
      }
      secondaryMenu={
        <TopBar.Menu
          activatorContent={
            <span>
              <Icon source={QuestionMarkMajor} />
              <p>도움말</p>
            </span>
          }
          open
          onOpen={() => { }}
          onClose={() => { }}
          actions={[
            {
              items: [{ content: '도움말 센터', icon: QuestionMarkMajor }],
            },
            {
              items: [{ content: '커뮤니티 포럼', icon: ConversationMinor }],
            },
            {
              items: [{ content: '지원 요청', icon: PhoneInMajor }],
            },
          ]}
        />
      }
    />
  );
}

export default Header;
