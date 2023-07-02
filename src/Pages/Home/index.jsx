import Layout from "../../Components/Layout";
import SummerCard from "../../Components/SummerCard";
import ProductCard from "../../Components/ProductCard/index";

function Home() {
  const summerCollection = [
    {
      image: "../../../public/BLUSAS-ABR-23.webp",
      title: "BLUSAS",
    },
    {
      image: "../../../public/PANTALONES-ABR-23.webp",
      title: "PANTALONES",
    },
    {
      image: "../../../public/VESTIDOS-ABR-23.webp",
      title: "VESTIDOS",
    },
    {
      image: "../../../public/BOLSOS-ABR-23.webp",
      title: "BOLSOS",
    },
  ];

  const products = [
    {
      img: "../../../public/products/-stfco-producto-Bolsosycarteras-BLANCO-S402293-1.webp",
      state: "NUEVO",
      title: "BOLSO DE HOMBRO CON CADENA Y FF FRONTAL",
      price: "$298.900",
    },
    {
      img: "../../../public/products/-stfco-producto-Camisasyblusas-NATURAL-S173243-1.webp",
      state: "NUEVO",
      title: "BLUSA MANGA 3/4 CON PASAMANERIA",
      price: "$289.900",
    },
    {
      img: "../../../public/products/-stfco-producto-Camisasyblusas-NATURAL-S173561-2.webp",
      state: "NUEVO",
      title: "BLUSA CUELLO ALTO Y MANGA LARGA CON CRUCE",
      price: "$189.900",
    },
    {
      img: "../../../public/products/-stfco-producto-Camisasyblusas-ROJOPRADA-S173896A-1.webp",
      state: "NUEVO",
      title: "BLUSA SISA CUELLO ALTO CON BROCHES",
      price: "$159.900",
    },
    {
      img: "../../../public/products/-stfco-producto-Enterizosconjuntos-VERDESELVA-S052390-1.webp",
      state: "NUEVO",
      title: "CONJUNTO SHORT Y BLUSA CAMISERA",
      price: "$329.900",
    },
  ];

  return (
    <Layout>
      <div className="w-100 h-2/4">
        <img
          src="../../../public/BANNER-HOME-ENCANTO-MEDITERRANEO-LG.webp"
          alt="Encanto collection photo"
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-between items-center m-4 w-full h-14 bg-black text-sm text-white">
        <p>COMPRA SEGURA | WWW.STUDIOF.COM.CO</p>
        <p>ENVÍO GRATIS POR COMPRAS IGUALES O SUPERIORES A $150.000</p>
        <p>ARTISAN SUMMER | SUMMER 2023 - STUDIO F</p>
        <p>IPANEMA | SUMMER 2023 - STUDIO F</p>
      </div>
      <div className="w-full flex justify-between">
        {summerCollection.map((product, index) => {
          return (
            <SummerCard key={index} img={product.image} title={product.title} />
          );
        })}
      </div>
      <div className="w-full mt-16">
        <div className="w-full mb-10  flex items-center justify-between pl-12 pr-12">
          <div className="w-96 border h-px border-gray-300"></div>
          <h1 className="w-auto text-4xl font-montserrat font-bold">
            NUEVA COLLECIÓN
          </h1>
          <div className="w-96 border h-px border-gray-300"></div>
        </div>
        <div className="flex justify-between">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                image={product.img}
                state={product.state}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
