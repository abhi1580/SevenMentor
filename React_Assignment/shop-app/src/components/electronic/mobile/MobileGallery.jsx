import MobileCard from "./MobileCard"
import mobiles from "./mobile_data"

const MobileGallery = () => {
    const mobileCardList=mobiles.map(mb=><MobileCard key={mb.id} mobile={mb}/>)
  return (
    <div>
        {mobileCardList}
    </div>
  )
}

export default MobileGallery