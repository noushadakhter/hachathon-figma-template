import About from "@/components/about";
import AboutFooter from "@/components/aboutFooter";
import AchivementAbout from "@/components/AchivementAbout";
import AboutTeam from "@/components/AboutTeam"
import CompaniesSection from "@/components/compainesSection";
import GrowSection from "@/components/growSection";
import CompanyHeader from "@/components/CompainesHeader";


function AboutPage(){
    return(
       <div>
         <About />
         <AboutFooter />
         <AchivementAbout />
         <AboutTeam />
         <CompanyHeader />
         <CompaniesSection />
         <GrowSection />
         
       
       </div>
    )
}
export default AboutPage