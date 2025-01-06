import { Box, Typography } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import CardCommon from "../../components/cardCommon";
import { tabMenuList, userListDummy } from "../../constants/constants";
import { CardTypeEnum, MenuTypeEnum } from "../../constants/enum";
import TabsCommon from "../../components/tabsCommon";
import { useState } from "react";
import GradientButton from "../../components/gradientButton";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import AddUser from "./addUser";

type Props = {};

const Users = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const UserTabContent = (
    <ContentWrapper>
      <Box>
        <CardCommon list={userListDummy} type={CardTypeEnum.Users} />
      </Box>
    </ContentWrapper>
  );

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TabsCommon
        type={MenuTypeEnum.Users}
        tabMenuList={[tabMenuList[0]]}
        onTabChange={(value) => setActiveTab(value)}
        tabContent={UserTabContent}
      />
      <GradientButton
        label="Add User"
        isGradient={true}
        handleDialogOpen={handleOpenDialog}
      />
      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Add User"
          buttons={
            [
              {
                label: "Cancel",
                variant: "outlined",
                onClick: () => console.log("canceled"),
              },
              {
                label: "Confirm",
                variant: "contained",
                onClick: () => console.log("Confirm"),
              },
            ] as CustomButtonProps[]
          }
        >
          <Typography variant="body1" sx={{ p: 2 }}>
            <AddUser />
          </Typography>
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Users;
