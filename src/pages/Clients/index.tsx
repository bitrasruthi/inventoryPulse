import { Box } from "@mui/material";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import GradientButton from "../../components/gradientButton";
import { useState } from "react";
import AddClient from "./addClient";
import { MenuTypeEnum } from "../../constants/enum";
import {
  clientListDummy,
  contactListDummy,
  tabMenuList,
} from "../../constants/constants";
import ContentWrapper from "../../components/contentWrapper";
import Pagination from "../../components/pagination";
import ClientList from "./clientList";
import ContactList from "../Contacts/contactList";

type Props = {};

const Clients = (_props: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
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

  const ClientTabContent = (
    <ContentWrapper>
      <Box>
        <Pagination
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <ContactList list={contactListDummy} />
        {/* <ClientList list={clientListDummy} /> */}
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
        tabContent={ClientTabContent}
      />
      <GradientButton
        label="Add Client"
        isGradient={true}
        handleDialogOpen={handleOpenDialog}
      />
      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Add Client"
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
          <AddClient />
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Clients;
