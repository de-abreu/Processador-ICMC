import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <Translate>Processador ICMC</Translate>
                </Heading>
                <p className="hero__subtitle"><Translate>Ensino de organização e arquitetura de computadores por meio do desenvolvimento de jogos</Translate></p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/category/sobre">
                        <Translate>Conhecer o projeto</Translate>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
