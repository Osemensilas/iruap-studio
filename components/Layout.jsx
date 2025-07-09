import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return ( 
        <>
        <Header/>
        <main className="relative after:content-[''] after:absolute h-max after:h-[100%] w-screen after:w-[100%] after:top-0 after:left-0 after:bg-black after:opacity-50">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;