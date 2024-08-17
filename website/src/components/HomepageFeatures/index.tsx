import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        // TODO: Insert link to the Assembly language documentation
        title: 'Fácil aprendizado',
        Svg: require('@site/static/img/icons8-code.svg').default,
        description: (
            <>
                Linguagem Assembly de uso didático, extensivamente documentada e com exemplos de uso.
            </>
        ),
    },
    {
        // TODO: Insert link to the Setup documentation
        title: 'Prototipável',
        Svg: require('@site/static/img/icons8-chip.svg').default,
        description: (
            <>
                Projetado e testado para uso em placas Intel FPGA, dispondo de uma variedade de simuladores.
            </>
        ),
    },
    {
        // TODO: Insert link to the game library page
        title: 'Biblioteca de jogos',
        Svg: require('@site/static/img/icons8-games-folder.svg').default,
        description: (
            <>
                Jogos e respectivos códigos-fonte disponíveis para consulta.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
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
