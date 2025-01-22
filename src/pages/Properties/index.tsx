import { Box } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import { propertiesListDummy, tabMenuList } from "../../constants/constants";
import TabsCommon from "../../components/tabsCommon";
import { useState } from "react";
import FullScreenDialog, {
  CustomButtonProps,
} from "../../components/fullScreenDialog";
import Pagination from "../../components/pagination";
import PropertyList from "./propertyList";
import AddUser from "../Users/addUser";
import { useFormHook } from "../../hooks/useFormHook";
import validate from "../../helpers/validations";

const Properties = () => {
  const [activeTab, setActiveTab] = useState<string>(tabMenuList[0]?.value);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { form } = useFormHook(validate.propertyDetailsSchema);

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

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
        <PropertyList list={propertiesListDummy} formProps={form} />
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
        tabContent={UserTabContent}
        buttonList={[
          {
            label: "Add Property",
            isGradient: true,
            action: handleOpenDialog,
          },
        ]}
      />

      {dialogOpen && (
        <FullScreenDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          title="Add Property"
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
          <AddUser formProps={form} />
        </FullScreenDialog>
      )}
    </Box>
  );
};

export default Properties;
