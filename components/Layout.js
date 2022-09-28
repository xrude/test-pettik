import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { SnackbarProvider } from "notistack";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      preventDuplicate
    >
       <Header />
      {children}
      <Footer />
    </SnackbarProvider>
     
    </div>
  );
};
export default Layout;
