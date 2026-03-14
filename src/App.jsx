// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import WhyGymfinity from './components/WhyGymfinity';
// import Pricing from './components/Pricing';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//     return (
//         <div className="min-h-screen bg-white font-sans antialiased">
//             <Navbar />
//             <main>
//                 <Hero />
//                 <Features />
//                 <WhyGymfinity />
//                 <Pricing />
//                 <Contact />
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default App;



import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyGymfinity from './components/WhyGymfinity';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurTeam from './components/OurTeam';
import Testimonials from "./components/Testimonials";
import PremiumFAQ from  "./components/PremiumFAQ";

function App() {
    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            <Navbar />

            <Routes>
                {/* Homepage */}
                <Route 
                    path="/" 
                    element={
                        <main>
                            <Hero />
                            <Features />
                            <WhyGymfinity />
                            <Pricing />
                             <Testimonials />
                             <OurTeam/>
                             
                             <PremiumFAQ />
                             <Contact />
                           
                        
                        </main>
                    } 
                />

                {/* Our Team Page */}
                <Route path="/our-team" element={<OurTeam />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
