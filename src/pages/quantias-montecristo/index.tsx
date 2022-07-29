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
      <TitleHeader title='Quantitas fia' strong='montecristo bdr nível I'  />
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
                <p className={style.paragraphBox} >Fundo de ações com seleção de empresas através de análise fundamentalista, portifólio concentrado (máximo 12 ativos) e gestão ativa dos recursos.</p>
              </div>
            </div>
            <div className={style.bluBoxTimeLine}>
              <ul>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/perfil-quantia.svg"} width={68} height={68} alt="good" />
                  <p className={style.listItemText}><strong>PERFIL DE RISCO:</strong> ARROJADO</p>
                </li>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/objetivo.svg"} width={68} height={68} alt="good" />
                  <p className={style.listItemText}><strong>OBJETIVO DE RETORNO:</strong> SUPERAR O IBOVESPA NO MÉDIO E LONGO PRAZOS <br></br> (36 MESES DE REFERÊNCIA)</p>
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
                <p><span>Taxa de administração:</span><strong>2,0% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de performance:</span><strong>20% sobre o que exceder 100% do Ibovespa</strong></p>
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
                  <p><span>Cotização do resgate*:</span><strong>D+13 dias corridos</strong></p>
                </li>
                <li>
                  <p><span>Liquidação do resgate*:</span><strong>D+2 dias úteis após a cotização</strong></p>
                </li>
                <li className={style.smallText}><p>
                *Prazo de resgate válido a partir de 19/08/2022, após efetivação do novo regulamento.</p></li>
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
            <Image src={"/icons/acoes.svg"} width={154} height={154} alt="AÇÕES"/>
            <span>AÇÕES</span>
          </div>

          <div className={style.boxgestao}>
            <h2>GESTÃO DO MONTECRISTO</h2>
            <ul>
              <li>
                <Image src={'/icons/slash-blue.svg'} width={20} height={20} alt={"icone"} />
                <p>Investimentos em bons negócios a preços atrativos.</p>
              </li>
              <li>
                <Image src={'/icons/slash-blue.svg'} width={20} height={20} alt={"icone"} />
                <p>Alocação de forma concentrada em companhias que, normalmente, estão fora de consenso.</p>
              </li>
              <li>
                <Image src={'/icons/slash-blue.svg'} width={20} height={20} alt={"icone"} />
                <p>Equilíbrio de posições em ativos com perfil de valor e crescimento.</p>
              </li>
            </ul>
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

              </div>
              
              <div className={style.cards}>
                <div style={{ height: "243px" }} className={style.card}>
                  <Image src={"/images/wagner.png"} width={156} height={157} alt="rogerio" />
                  <h4>Wagner Salaverry</h4>
                  <p>Sócio e gestor de renda variável</p>
                </div>

                <div className={style.card}>
                  <h4>Vinicius Piccinini</h4>
                  <p>Sócio e cogestor do fundo</p>
                </div>

                <div className={style.card}>
                  <h4>Nicolas Hendges</h4>
                  <p>Analista de investimentos</p>
                </div>

                <div className={style.card}>
                  <h4>Gabriel Zanette</h4>
                  <p>Analista de investimentos</p>
                </div>
              </div>              
              
            </div>
            <div className={style.imagexp}>
              <Image src={"/images/xp.png"} width={466} height={79} alt="xp" />
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