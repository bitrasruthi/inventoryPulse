import { createContext, useContext, useEffect, useState } from "react";
import {
  AuthControllerClient,
  AuthControllerQuery,
  CustomerRoleSelectionDataDto,
  UserProfileResponseDto,
} from "../api/axios-client";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/paths";
import CompanyLogin from "../pages/Auth/companyLogin";

interface AuthContextType {
  userProfile?: UserProfileResponseDto;
  fetchUserProfile: () => Promise<void>;
  loading: boolean;
  setUserCustomerRole: (customerId: string, roleId: number) => Promise<void>;
  userCustomerRole?: CustomerRoleSelectionDataDto;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userProfile, setUser] = useState<UserProfileResponseDto>();
  const [loading, setLoading] = useState(true);
  const [selectedUserCustomerRole, setUserCustomerRoleState] =
    useState<CustomerRoleSelectionDataDto>();

  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      const userProfile = await AuthControllerClient.getProfile();
      setUser(userProfile);
      if (
        userProfile.data &&
        userProfile.data.userCustomers &&
        userProfile.data.userCustomers?.length == 1
      ) {
        const firstCustomerRole = userProfile.data.userCustomers[0];

        await setUserCustomerRole(
          firstCustomerRole.customerId,
          firstCustomerRole.roleId
        );
      }
    } catch (error: any) {
      setUser(undefined);
      navigate(paths.LOGIN);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const setUserCustomerRole = async (customerId: string, roleId: number) => {
    try {
      setLoading(true);
      const response = await AuthControllerClient.setUserCustomerRole(
        customerId,
        roleId
      );
      if (response.success) {
        setUserCustomerRoleState(response.data);
        navigate(paths.HOME);
      }
    } catch (error) {
      setUserCustomerRoleState(undefined);
      navigate(paths.LOGIN);
    } finally {
      setLoading(false);
    }
  };

  const isUserHaveCustomerRoleList = () => {
    return userProfile && userProfile.data && userProfile.data.userCustomers;
  };

  return (
    <AuthContext.Provider
      value={{
        userProfile,
        fetchUserProfile,
        loading,
        setUserCustomerRole,
        userCustomerRole: selectedUserCustomerRole,
      }}
    >
      {!loading &&
      selectedUserCustomerRole == undefined &&
      isUserHaveCustomerRoleList() ? (
        <CompanyLogin />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
