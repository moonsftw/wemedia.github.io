import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="first">
        <img
          src="logo1.png"
          alt=""
          style={{ width: "529.9178px", height: "84..8175px" }}
        />
        <h3>CONTENIDO PERSONALIZADO PARA DIARIOS DIGITALES.</h3>
      </div>
      <div className="second">
        <h2>¿QUÉ ES UN CMS?</h2>
        <h4>CONOCÉ NUESTROS BENEFICIOS, CLIENTES, PAQUETES Y MÁS</h4>
        <div className="second-section">
          <section className="ventajas">VENTAJAS</section>
          <section className="nuestroCMS">NUESTRO CMS</section>
          <section className="paquetes">PAQUETES</section>
        </div>
      </div>
      <div className="third">
        <section className="matiVila">
          <div className="miembroEquipo1">
            <img
              style={{ width: "224px", height: "173px" }}
              src="/recurso2.png"
              alt="foto perfil mati vila"
              className="img-matiVila"
            />
            <h4>> MATIAS VILA</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              sed repellendus, labore voluptatem illum eos nemo fuga nobis
              soluta neque fugiat earum recusandae saepe? Odio, deleniti culpa?
              Perspiciatis, laboriosam voluptatibus.
            </p>
          </div>
        </section>
        <section className="facuLuna">
          <div className="nuestroEquipo">
            <h2>NUESTRO EQUIPO DE TRABAJO</h2>
          </div>
          <div className="miembroEquipo">
            <img
              style={{ width: "224px", height: "173px" }}
              src="recurso3.png"
              alt=""
            />

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              sed repellendus, labore voluptatem illum eos nemo fuga nobis
              soluta neque fugiat earum recusandae saepe? Odio, deleniti culpa?
              Perspiciatis, laboriosam voluptatibus.
            </p>
          </div>
        </section>
        <section className="tinchoDC">
          <div className="miembroEquipo1">
            <h4>> MARTIN DA CORTA</h4>
            <img
              style={{ width: "224px", height: "173px" }}
              src="recurso4.png"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              sed repellendus, labore voluptatem illum eos nemo fuga nobis
              soluta neque fugiat earum recusandae saepe? Odio, deleniti culpa?
              Perspiciatis, laboriosam voluptatibus.
            </p>
          </div>
          <div className="nombreFacu">
            <h4>> FACUNDO LUNA</h4>
          </div>
        </section>
      </div>
      <div className="fourth">
        <h2>VENTAJAS</h2>
        <section className="section-fourth">
          <h4>LAS PRINCIPALES VENTAJAS DE UTILIZAR UN CMS SON</h4>
          <ul>
            <li>FACILIDAD DE USO GESTIÓN CENTRALIZADA</li>
            <li>COLABORACION</li>
            <li>PERSONALIZACION</li>
            <li>SEO AMIGABLE</li>
          </ul>
        </section>
      </div>
      <div className="fifth">
        <h1>NUESTRO VALOR AGREGADO</h1>
        <section className="section-fifth">
          <article>
            <div className="fifth-img">
              <img
                src="recurso5.png"
                alt=""
                style={{ width: "74px", height: "98.5px" }}
              />
            </div>
            <div className="contenido-sectionFifth1">
              <h4>Integración con redes sociales</h4>
              <p>
                Permite la automatización de la carga del contenido de una nota
                a cualquier red social, sin la necesidad de ingresar a cada una
                de ellas.
              </p>
            </div>
          </article>
          <article>
            <div className="fifth-img">
              <img
                src="recurso5.png"
                alt=""
                style={{ width: "74px", height: "98.5px" }}
              />
            </div>
            <div className="contenido-sectionFifth2">
              <h4>CMS mobila</h4>
              <p>
                Esto permitiía a quien usa el CMS pueda ocuparlo desde un
                celular sin la necesidad de usarlo desde una computadora
              </p>
            </div>
          </article>
          <article>
            <div className="fifth-img">
              <img
                src="recurso5.png"
                alt=""
                style={{ width: "74px", height: "98.5px" }}
              />
            </div>
            <div className="contenido-sectionFifth3">
              <h4>Servicio técnico rápido y efectivo</h4>
              <p>
                Aquí buscamos destacarnos por un tiempo de respuesta rápida para
                el cliente. una o más personas encargadas del servicio técnico
                cuando se necesite
              </p>
            </div>
          </article>
          <article>
            <div className="fifth-img">
              <img
                src="recurso5.png"
                alt=""
                style={{ width: "74px", height: "98.5px" }}
              />
            </div>
            <div className="contenido-sectionFifth4">
              <h4>Gestión de contenidos</h4>
              <p>
                ¡Personaliza tu medio! en Inicio y páginas de categorías.
                MÚLTIPLES módulos que pueden combinarse, para que no solo puedas
                administrar noticias, si no que le des la importancia gráfica
                que necesita para la comunicación
              </p>
            </div>
          </article>
        </section>
      </div>
      <div className="sixth">
        <div className="primero-primero">
          <h3>paquetes</h3>
          <span className="primero-primero-span">moneda dólar americano</span>
        </div>

        <p className="segundo-segundo">básico</p>
        <p className="segundo-tercero">intermedio</p>
        <p className="segundo-cuarto">completo</p>
        <div className="cuarto-segundo">
          <p className="paqueteGb">50gb</p>
          <p className="paqueteDolares">U$200</p>
        </div>
        <div className="cuarto-tercero">
          <p className="paqueteGb">200gb</p>
          <p className="paqueteDolares">U$400</p>
        </div>
        <div className="cuarto-cuarto">
          <p className="paqueteDolares">espacio personalizable</p>
          <p className="paqueteDolares">(consultar precios)</p>
        </div>

        {/* <table>
          <tr>
            <th>básico</th>
            <th>intermedio</th>
            <th>completo</th>
          </tr>
          <tr>
            <td>50gb</td>
            <td>200gb</td>
            <td>espacio personalizable</td>
          </tr>
          <tr>
            <td>U$200</td>
            <td>U$400</td>
            <td>(consultar precios)</td>
          </tr>
        </table> */}
      </div>
      <div className="seventh">
        <div className="container-seventh">
          <h2 className="seventh-h2">
            TE GUSTARÍA CONOCER MÁS SOBRE NOSOTROS?
          </h2>
          <div className="text-logos">
            <p className="seventh-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
              adipisci molestiae sed dolorum. Sed fugiat qui nihil aliquam, odio
              veritatis enim. Minima voluptatem excepturi assumenda?
              Exercitationem laudantium suscipit eum!
            </p>
            <div className="logos">

            <img style={{width: '12.5789px', height:'25.4036px'}} src="img-facebook.png" alt="" />
            <img style={{width: '23.8076px', height:'23.9747px'}} src="img-instagram.png" alt="" />
            <img style={{width: '22.0518px', height:'21.1667px'}} src="img-linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div className="seventh-form">
          <form action="">
            <label htmlFor="">NOMBRE</label>
            <input type="text" />
            <label htmlFor="">EMAIL</label>
            <input type="text" />
          </form>
        </div>
      </div>
      <footer>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        expedita odit dolorum sequi est, possimus facilis voluptatem debitis aut
        minus praesentium. Hic accusantium sequi quidem numquam tempora, aut
        maiores architecto. Voluptatum voluptas consequuntur sapiente harum
        officia quae magni alias hic debitis minus totam vel perferendis, earum
        provident nobis, numquam nam quod quo! Odit dolorem voluptate
        consectetur similique quod neque rerum.
      </footer>
    </main>
  );
}

export default App;
