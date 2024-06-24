import  motoedge50image from "./images/motoedge50image.webp"
import vivoMobile from "./images/vivoMobile.webp"
import realmeImage from "./images/realmeImage.webp"
const mobiles = [
    {
        id: 1,
        model: "Edge 50 Fusion",
        brand: "Motorola",
        price: 25894.0,
        specification: {
          camera: {
            primary: "50 MP + 13 MP",
            front: "32 MP",
          },
          storage: "128 GB",
          ram: "8 GB",
        },
        image:motoedge50image   
      },
      {
        id: 2,
        model: "vivo V30e",
        brand: "Vivo",
        price: 27999.0,
        specification: {
          camera: {
            primary: "50 MP + 8 MP",
            front: "50 MP",
          },
          storage: "128 GB 1 TB Expandable",
          ram: "8 GB",
        },
        image:vivoMobile   
      },
      {
        id: 3,
        model: "P1",
        brand: "RealMe",
        price: 15990.0,
        specification: {
          camera: {
            primary: "50 MP + 2 MP",
            front: "16 MP",
          },
          storage: "128 GB 1 TB Expandable",
          ram: "8 GB",
        },
        image:realmeImage   
      },
];

export default mobiles;
