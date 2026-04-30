import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';


const layout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
    );
};

export default layout;