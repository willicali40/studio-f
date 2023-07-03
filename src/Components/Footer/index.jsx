import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  const discoverStudiofLinks = [
    {
      title: "Nuestra marca",
      url: "https://www.studiof.com.co/descubre-studiof/nuestra-marca",
    },
    {
      title: "Reconocimiento",
      url: "https://www.studiof.com.co/descubre-studiof/reconocimientos",
    },
    {
      title: "Trabaj con nosotros",
      url: "https://www.studiof.com.co/trabaja-con-nosotros",
    },
    {
      title: "Nuestra marca en Latinoamérica",
      url: "https://www.studiof.com.co/nuestra-marca-en-latinoamerica",
    },
  ];

  const interestLinks = [
    {
      title: "Gift Card Studio F",
      url: "https://www.studiof.com.co/gift-card",
    },
    {
      title: "Solicita tu Cupo Credi10",
      url: "https://www.studiof.com.co/form_pro_consultados_inscripcion_web/",
    },
    {
      title: "Servicio al cliente",
      url: "https://www.studiof.com.co/form_pro_consultados_inscripcion_web/",
    },
    {
      title: "Notificaciones judiciales",
      url: "https://www.studiof.com.co/notificaciones-judiciales",
    },
    {
      title: "Radicar PQRS",
      url: "https://www.studiof.com.co/hc/es/requests/new",
    },
    {
      title: "Ten Card Studio F",
      url: "https://www.studiof.com.co/tencard",
    },
    {
      title: "Proveedores",
      url: "https://www.studiof.com.co/",
    },
    {
      title: "Localiza tu tienda",
      url: "https://www.studiof.com.co/tiendas",
    },
    {
      title: "Preguntas frecuentes",
      url: "https://www.studiof.com.co/links-interes/preguntas-frecuentes",
    },
    {
      title: "Canal de transparencia",
      url: "https://www.studiof.com.co/ayuda/canal-de-transparencia",
    },
    {
      title: "Rastrear pedido",
      url: "https://www.studiof.com.co/rastreo",
    },
    {
      title: "Recaudo Credi10",
      url: "https://credi10.com.co/",
    },
    {
      title: "Devoluciones",
      url: "https://www.studiof.com.co/login?ReturnUrl=%2f_secure%2fdevoluciones",
    },
  ];

  const politicsLinks = [
    {
      title: "Términos y condiciones",
      url: "https://www.studiof.com.co/politicas/terminos-condiciones",
    },
    {
      title: "Aviso de privacidad",
      url: "https://www.studiof.com.co/politicas/politicas-privacidad",
    },
    {
      title: "Políticas de protección de datos",
      url: "https://www.studiof.com.co/politicas/politicas-proteccion-datos",
    },
    {
      title: "Políticas de Uso de Cokies",
      url: "https://www.studiof.com.co/politicas/politica-uso-cookies",
    },
    {
      title: "Política comercial de cambios",
      url: "https://www.studiof.com.co/politicas/politica-cambios",
    },
    {
      title: "Promociones y eventos",
      url: "https://www.studiof.com.co/politicas/Promociones-y-eventos",
    },
    {
      title: "Derecho a retracto",
      url: "https://www.studiof.com.co/politicas/derecho-a-retracto",
    },
  ];

  return (
    <footer className="w-full mt-16 flex flex-col justify-center font-montserrat">
      <div className="flex w-4/5 m-auto">
        {/* left side */}
        <div className="w-2/5 text-sm">
          <p>Suscríbete a nuestro</p>
          <h1 className="text-8xl font-bold mb-1">NEWS LETTER</h1>
          <p>Recibir información de moda para:</p>
          <div className="flex mt-1">
            <input className="ml-3 mr-2" type="checkbox" />
            <p>Mujeres</p>
            <input className="ml-3 mr-2" type="checkbox" />
            <p>Hombres</p>
            <input className="ml-3 mr-2" type="checkbox" />
            <p>Niños</p>
          </div>
          <input
            className="focus:outline-none mt-10 mb-6 border-b border-l-neutral-700 pb-2 w-80"
            type="text"
            placeholder="Correo electrónico..."
          />
          <div>
            <input type="checkbox" />
            <p className="text-xs w-80">
              Sí autorizo a STF GROUP S.A. el tratamiento de mis datos
              personales, de acuerdo a las finalidades de su política de
              tratamiento de datos personales (Consúltala aquí). <br/> Certifico que
              he sido informado sobre los términos y condiciones de la página
              web (Consulta aquí los términos y condiciones)
            </p>
          </div>
        </div>
        {/* rigth side */}
        <div className="flex flex-col items-center w-3/5">
          <div className="flex justify-evenly w-2/5 mb-11">
            <AiFillFacebook className="w-7 h-7" />
            <AiOutlineInstagram className="w-7 h-7" />
            <AiOutlineTwitter className="w-7 h-7" />
            <AiFillYoutube className="w-7 h-7" />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <h3 className="mb-6 font-bold">DESCUBRE STUDIO F</h3>
              {discoverStudiofLinks.map((link, index) => {
                return (
                  <Link
                    className="text-xs font-normal mb-3"
                    key={index}
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h3 className="mb-6 font-bold">LINKS DE INTERÉS</h3>
              {interestLinks.map((link, index) => {
                return (
                  <Link
                    className="text-xs font-normal mb-3"
                    key={index}
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <h3 className="mb-6 font-bold">POLÍTICAS</h3>
              {politicsLinks.map((link, index) => {
                return (
                  <Link
                    className="text-xs font-normal mb-3"
                    key={index}
                    to={link.url}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full" >
        <div className="w-full flex items-center justify-center mt-6 mb-6">
          <img className="w-80 h-12" src="../../../public/payment/mediosPago-3.png" alt="Payment methods" />
          <img src="../../../public/payment/logo-sic-colombia.webp" />
        </div>
        <p className="w-full text-xs text-center pb-3 border-b border-zinc-300">
          STF GROUP se encuentra comprometido con la transparencia y la
          legalidad en la realización de todas sus operaciones, y es por ello
          que pone a disposición del público en genral un canal de denuncias por
          posibles actos de corrupción o fraude que involucren directa o
          indirectamente a funcionarios de la compañía. Este canal permite
          realizar denuncias de forma anónima. Para acceder haz clic en el link
          Canal de transparencia ubicado en la parte inferior de nuestra página
          Links de Interés.
        </p>
        <p className="mt-3 text-xs text-center font-normal mb-3">© COPYRIGHT 2020 STUDIO F. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}

export default Footer;
