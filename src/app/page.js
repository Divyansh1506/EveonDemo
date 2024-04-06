import WhyPeople from '@/components/WhyPeople/whypeople'
import Main from '@/section/landingpage/main'
import global from '../utils/commonStyles.module.css'
import Service_Provide from '@/components/ServicesProvide/servicesprovide'
import How_works from '@/components/How_Works/how_works'
import Explore from '@/components/Explore/explore'

export default function Home() {
  return (
    <>
      <div className={global.parent_cont}>
        <Main />
        <WhyPeople />
        <Explore/>
        <How_works/>
        <Service_Provide/>
      </div>
    </>
  )
}
