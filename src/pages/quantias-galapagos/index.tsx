import Fade from 'react-reveal/Fade';
import React from "react";
import Image from 'next/image';
import style from './styles.module.scss';
import BackTo from '@root/components/BackTo';
import TitleHeader from '@root/components/TitleHeader';

export async function getStaticProps() {
  return { props: { body: "body-no-background" } };
}

const Institutional = () => {
  return (
    <>
      <TitleHeader title='Quantitas fim' strong='galápagos'  />
      <BackTo />
      <div className={style.generalContent}>
        {/* First Container */}
        <Fade left>
        <div>
          <div className={style.blueLightBox}>
            <div className={style.blueLightBoxInside}>
              <div className={style.blueLightBoxInsideTitle}>
                <Image src={`/images/slash.svg`} width={66} height={65} alt="good" />
              </div>
              <div className={style.divider}></div>
              <div>
                <p className={style.paragraphBox} >Fundo multimercado que reúne exclusivamente estratégias de juros e inflação, sem exposição à bolsa ou moedas.</p>
              </div>
            </div>
            <div className={style.bluBoxTimeLine}>
              <ul>
              <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/perfil-quantia.svg"} width={68} height={68} alt="good" />
                  <div>
                    <p><strong>PERFIL</strong></p>
                    <p><strong>DE RISCO:</strong></p>
                    <p>MODERADO</p>
                  </div>
                </li>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/objetivo.svg"} width={68} height={68} alt="good" />
                  <div>
                    <p><strong>OBJETIVO</strong></p>
                    <p><strong>DE RETORNO:</strong></p>
                    <p>CDI+ 4% a.a</p>
                  </div>
                </li>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/curva.svg"} width={68} height={68} alt="good" />
                  <div>
                    <p><strong>OBJETIVO</strong></p>
                    <p><strong>DE VOL:</strong></p>
                    <p>5% ANUAL</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.blueLightBoxBottom}>
            <div className={style.timeLineTitle}>
              <h2>INFORMAÇÕES ADICIONAIS</h2>
            </div>
            <div className={style.aditionals}>
              <ul>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de performance:</span><strong>20% sobre o que exceder 100% do CDI </strong></p>
                </li>
                <li>
                  <p><span>Aplicação inicial mínima:</span><strong>R$ 1.000,00</strong></p>
                </li>
              </ul>
              <ul>
              <li>
                  <p><span>Movimentação mínima:</span><strong>R$ 1.000,00</strong></p>
                </li>
                <li>
                  <p><span>Valor de permanência no fundo:</span><strong>R$ 1.000,00</strong></p>
                </li>
                <li>
                  <p><span>Cotização do resgate:</span><strong>D+14 dias corridos</strong></p>
                </li>
                <li>
                  <p><span>Liquidação do resgate:</span><strong>D+1 dia útil após a cotização</strong></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </Fade>
        <Fade top>
        {/* Second Container */}
        <div className={style.blueDarkBox}>
          <div className={style.blueDarkTitle}>
            <h2>CLASSES DE ATIVOS</h2>
          </div>
          <div>
            <Image src={"/icons/juros.svg"} width={154} height={154} alt="juros"/>
            <span>JUROS</span>
          </div>

          <div>
            <Image src={"/icons/inflacao.svg"} width={154} height={154} alt="INFLAÇÃO"/>
            <span>INFLAÇÃO</span>
          </div>

          <div style={{ opacity: 0}}>
            <Image src={"/icons/inflacao.svg"} width={154} height={154} alt="INFLAÇÃO"/>
            <span>INFLAÇÃO</span>
          </div>
        </div>
        </Fade>
        <Fade right>
        {/* Third Container */}
        <div className={style.blueLightBoxLast}>
          <div className="timeline">
          <div className={style.timeLineTitle}>
            <h2>EQUIPE DE GESTÃO</h2>
          </div>
          <div className={style.box}>
            <div className={style.container}>
              <div className={style.lines}>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>

              </div>
              
              <div className={style.cards}>
                <div style={{ height: "243px" }} className={style.card}>
                  <Image src={"/images/rogério.png"} width={156} height={157} alt="rogerio" />
                  <h4>Rogério Braga</h4>
                  <p>Sócio e gestor de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>Matheus Gallina</h4>
                  <p>Sócio e trader de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>Lucas Monteiro</h4>
                  <p>Sócio e trader de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>João Pedro</h4>
                  <p>Trader de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>Ivo Chermont</h4>
                  <p>Sócio e economista-chefe</p>
                </div>

                <div className={style.card}>
                  <h4>João Fernandes</h4>
                  <p>Sócio e economista</p>
                </div>
              </div>
              
              
              
            </div>
          </div>
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
}

export default Institutional;