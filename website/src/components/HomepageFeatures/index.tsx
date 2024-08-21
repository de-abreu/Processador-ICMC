import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: JSX.Element;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    link: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: (<><Translate>Fácil aprendizado</Translate></>),
        Svg: require('@site/static/img/icons8-code.svg').default,
        description: (
            <>
                <Translate>
                    Linguagem Assembly de uso didático, extensivamente documentada e com exemplos de uso.
                </Translate>
            </>
        ),
        link: '/docs/category/linguagem-assembly'
    },
    {
        title: (<><Translate>Prototipável</Translate></>),
        Svg: require('@site/static/img/icons8-chip.svg').default,
        description: (
            <>
                <Translate>Projetado e testado para uso em placas Intel FPGA, dispondo de uma variedade de simuladores.</Translate>
            </>
        ),
        link: '/docs/category/componentes'
    },
    {
        title: (<><Translate>Biblioteca de jogos</Translate></>),
        Svg: require('@site/static/img/icons8-games-folder.svg').default,
        description: (
            <>
                <Translate>Jogos e respectivos códigos-fonte disponíveis para consulta.</Translate>
            </>
        ),
        link: '/docs/biblioteca/jogos'
    },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <a href={link}>
                    <Heading as="h3">{title}</Heading>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
