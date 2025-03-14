import { Outlet } from "react-router-dom";

interface DefaultLayoutProps {
  hideFooter?: boolean;
  hideNavbar?: boolean;
}

const DefaultLayout = ({
  hideFooter = false,
  hideNavbar = false,
}: DefaultLayoutProps) => {
  const FOOTER_HEIGHT = "305px";
  const GNB_HEIGHT = "62px";

  return (
    <>
      <main
        style={{
          minHeight: `calc(100vh${!hideNavbar ? ` - ${GNB_HEIGHT}` : 0}${
            !hideFooter ? ` - ${FOOTER_HEIGHT}` : 0
          })`,
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
