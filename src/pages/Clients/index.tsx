import { Box } from "@mui/material";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import GradientButton from "../../components/gradientButton";
import { useState } from "react";
import AddClient from "./addClient";
import { contactListDummy, tabMenuList } from "../../constants/constants";
import ContentWrapper from "../../components/contentWrapper";
import TabsCommon from "../../components/tabsCommon";
import Pagination from "../../components/pagination";
import ContactList from "../Contacts/contactList";
import validate from "../../helpers/validations";
import { useFormHook } from "../../hooks/useFormHook";

type Props = {};

const Clients = (_props: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { form } = useFormHook(validate.propertyDetailsSchema);

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
          <AddClient formProps={form} />
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Clients;
