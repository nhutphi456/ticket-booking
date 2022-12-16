import { ComponentType, FC, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const withAuthSync = <P extends object>(Component: ComponentType<P>): FC<P> => {
  const Wrapper = (props: P): JSX.Element => {
    const { logout } = useAuth();

    const syncLogout = (e: StorageEvent) => {
      if (e.key === "logout") {
        logout();
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
      };
    }, []);

    return <Component {...props} />;
  };

  return Wrapper;
};

export default withAuthSync;
