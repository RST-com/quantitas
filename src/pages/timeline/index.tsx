import React from 'react';
import Image from 'next/image';
import style from './styles.module.scss';
import BackTo from '@root/components/BackTo';
import TitleHeader from '@root/components/TitleHeader';

export async function getStaticProps() {
    return { props: { body: "body-dark" } };
}

const timeline = () => {
  return (
    <>
    <TitleHeader title='' strong='Institutional' dark />
    <BackTo />
    <div>
    <section className={style.pstimelinesec}>
    <div className={style.container}>
        <div className={style.timelineBar}></div>
        <ol className={style.pstimeline}>
            <li>
                <div className={style.psbot}>
                    <p>Fundada em agosto em Porto Alegre/RS</p>
                    <p style={{
                        width: "100%",
                        marginTop: "10px"
                    }}>Incorporação do Quantitas FIA Montecristo para gestão da Quantitas (fundo de ações disponível na XP)</p>
                </div>
                <span className={style.psspbot}>2011</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Criação do Quantitas FIM Arbitragem</p>
                </div>
                <span style={{
                    background: "#298EC1",
                }} className={style.pssptop}>2014</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Criação do Quantitas FIC FIM Mallorca (multiestratégias disponível na XP)</p>
                </div>
                <span className={style.psspbot}>2016</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Criação do Quantitas FIM Galápagos (multimercado juros e inflação disponível na XP)</p>
                </div>
                <span style={{
                    background: "#298EC1",
                }} className={style.pssptop}>2018</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Criação do Quantitas FIM Maldivas LS</p>
                </div>
                <span className={style.psspbot}>2019</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Quantitas FIC FIM Mallorca no B2C da XP</p>
                </div>
                <span style={{
                    background: "#298EC1",
                }} className={style.pssptop}>2020</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Quantitas FIM Galápagos e Quantitas FIA Montecristo no B2C da XP</p>
                </div>
                <span className={style.psspbot}>2021</span>
            </li>
        </ol>
    </div>
    </section>
    <section className={style.quantitiesBoxes}>
        <div className={style.quantityBox}>
            <Image src={"/icons/sob-gestao.svg"} width={68} height={68} alt="icon" />
            <div className={style.quantityBoxContent}>
                <h2>10</h2>
                <p>
                    <strong>FUNDOS</strong>
                    <span>SOB GESTÃO</span>
                </p>
            </div>
        </div>

        <div className={style.quantityBox}>
            <Image src={"/icons/anos-de-historia.svg"} width={68} height={68} alt="icon" />
            <div className={style.quantityBoxContent}>
                <h2>11</h2>
                <p>
                    <strong>ANOS</strong>
                    <span>DE HISTÓRIA</span>
                </p>
            </div>
        </div>

        <div className={style.quantityBox} style={{width: "328px"}}>
            <Image src={"/icons/bilhoes.svg"} width={68} height={68} alt="icon" />
            <div className={style.quantityBoxContent}>
            <h2 style={{marginLeft: "20px"}}>+4,7</h2>
                <p>
                    <strong>BILHÕES</strong>
                    <span>SOB GESTÃO</span>
                </p>
            </div>
        </div>

        <div className={style.quantityBox} style={{width: "328px"}}>
            <Image src={"/icons/investidores.svg"} width={68} height={68} alt="icon" />
            <div className={style.quantityBoxContent}>
                <h2 style={{marginLeft: "20px"}}>+30</h2>
                <p>
                    <strong>MIL</strong>
                    <span>INVESTIDORES</span>
                </p>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default timeline;