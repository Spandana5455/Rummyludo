import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Free from './Components/Free'


const Home = lazy(() => import('./Components/Home'))
const Rules = lazy(() => import('./Components/Rules'))
const Tournaments = lazy(() => import('./Components/Tournaments'))
const Variantions = lazy(() => import('./Components/Variantions'))
const Navbar = lazy(() => import('./Components/Navbar'))
const Footer = lazy(() => import('./Components/Footer'))
const Terms = lazy(() => import('./Components/TermsAndCon'))
const Legality = lazy(() => import('./Components/Legality'))
const FairPlay = lazy(() => import('./Components/FairPlay'))
const Privacy = lazy(() => import('./Components/Privacy'))
const Cashwithdraw = lazy(() => import('./Components/Cashwithdraw'))
const About = lazy(() => import('./Components/About'))
const Rsg = lazy(() => import('./Components/Rsg'))
const Testimonials = lazy(() => import('./Components/Testimonials'))
const TdsFilling = lazy(() => import('./Components/TdsFilling'))
const TdsPolicy = lazy(() => import('./Components/TdsPolicy'))
const GstPolicy = lazy(() => import('./Components/GstPolicy'))
const Faqs = lazy(() => import('./Components/Faqs'))
const Contact = lazy(() => import('./Components/Contact'))
const Shipingpolicy = lazy(() => import('./Components/Shipingpolicy'))
const Lodovarients = lazy(() => import('./Components/Lodovarients'))
const RummyApp = lazy(() => import('./Components/RummyApp'))
const NotFound = lazy(() => import('./Components/NotFound'))
const Loader = lazy(() => import('./Components/Loader'))
const IndianRummy = lazy(() => import('./Components/IndianRummy'))
const CashRummy = lazy(() => import('./Components/CashRummy'))
const Therteencardrummy = lazy(() => import('./Components/ThertheenRummy'))
const Deals = lazy(() => import('./Components/Deals'))
const Pools = lazy(() => import('./Components/Pools'))
const Points = lazy(() => import('./Components/Points'))
const Tips = lazy(() => import('./Components/Tips'))
 






export default function App() {
  return (
    <>

      <BrowserRouter>

        <Suspense fallback={Loader}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='rules' element={<Rules />} />
            <Route path='Variants' element={<Variantions />} />
            <Route path='Tournaments' element={<Tournaments />} />
            <Route path='legality' element={<Legality />} />
            <Route path='Terms' element={<Terms />} />
            <Route path='fairplay' element={<FairPlay />} />
            <Route path='about' element={<About />} />
            <Route path='cashwithdrawal' element={<Cashwithdraw />} />
            <Route path='Privacy' element={<Privacy />} />
            <Route path='rng' element={<Rsg />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='gstpolicy' element={<GstPolicy />} />
            <Route path='tdsfilling' element={<TdsFilling />} />
            <Route path='TdsPolicy' element={<TdsPolicy />} />
            <Route path='faqs' element={<Faqs />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='shippingpolicy' element={<Shipingpolicy />} />
            <Route path='lodovarients' element={<Lodovarients />} />
            <Route path='rummyapp' element={<RummyApp />} />
            <Route path='load' element={<Loader />} />
            <Route path='rummy/indianrummy' element={<IndianRummy />} />
            <Route path='rummy/cashrummy' element={<CashRummy />} />
            <Route path='rummy/therteencardrummy' element={<Therteencardrummy />} />
            <Route path='varients/Deals' element={<Deals />} />
            <Route path='varients/pools' element={<Pools />} />
            <Route path='varients/points' element={<Points />} />
            <Route path='rummy/tips' element={<Tips />} />
            <Route path='rummy/freepractice' element={<Free />} />




          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
