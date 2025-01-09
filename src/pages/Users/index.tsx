import { Box } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import { tabMenuList, userListDummy } from "../../constants/constants";
import { MenuTypeEnum } from "../../constants/enum";
import TabsCommon from "../../components/tabsCommon";
import { useState } from "react";
import GradientButton from "../../components/gradientButton";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import AddUser from "./addUser";
import UserCard from "./userList";
import Pagination from "../../components/pagination";

const Users = () => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const UserTabContent = (
    <ContentWrapper>
      <Box>
        <Pagination
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <UserCard list={userListDummy} />
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
          <AddUser />
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Users;
