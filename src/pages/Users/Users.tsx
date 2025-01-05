import { Box } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import CardCommon from "../../components/cardCommon";
import { tabMenuList, userListDummy } from "../../constants/constants";
import { CardTypeEnum, MenuTypeEnum } from "../../constants/enum";
import TabsCommon from "../../components/tabsCommon";
import { useState } from "react";

type Props = {};

const Users = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);

  const UserTabContent = (
    <ContentWrapper>
      <Box>
        <CardCommon list={userListDummy} type={CardTypeEnum.Users} />
      </Box>
    </ContentWrapper>
  );

  return (
    <>
      <TabsCommon
        type={MenuTypeEnum.Users}
        tabMenuList={[tabMenuList[0]]}
        onTabChange={(value) => setActiveTab(value)}
        tabContent={UserTabContent}
      />
    </>
  );
};

export default Users;
