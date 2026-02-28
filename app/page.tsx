import styles from './page.module.css';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className={styles.page}>
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Ikotsu Lab</span>
            <h1 className="section__title">
              粉骨・洗骨の専門機関
            </h1>
            <p className="section__description">
              工程公開・料金透明・全国対応。
              散骨・改葬・保存のための遺骨前処理を専門機関品質で。
            </p>
          </div>
          <div className={styles.heroActions}>
            <Button href="/contact" variant="primary" size="lg">
              無料相談する
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              サービスを見る
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
