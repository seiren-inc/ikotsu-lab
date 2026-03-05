import type { Metadata } from 'next';
import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { JsonLd, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/schema/jsonld';
import styles from './powdered.module.css';

export const metadata: Metadata = {
  title: '粉骨サービス｜散骨・手元供養のための遺骨パウダー化｜Ikotsu.com',
  description: '遺骨を専門の大型設備で粉骨（パウダー化）するサービス。2mm以下の均一な仕上がりで、散骨・改葬・手元供養に最適です。六価クロム還元処理とUV殺菌を全プラン標準実施。全国対応・30,000円〜。',
  alternates: { canonical: '/services/powdered' },
};

const POWDERED_PROCESS_STEPS = [
  { step: '01', title: '状態確認・異物除去', desc: 'お預かりしたご遺骨に含まれる金属類や不純物（棺の釘など）を丁寧に手作業で取り除きます。', image: '/images/process-grinding.png' },
  { step: '02', title: '六価クロム還元処理（無料標準）', desc: '火葬時に発生する有害物質「六価クロム」を専用の還元剤で無害化処理します。自然環境やご家族の健康を守ります。', image: '/images/process-grinding.png' },
  { step: '03', title: '乾燥・UV殺菌', desc: '粉骨前に専用機器で完全に乾燥させ、UV照射による殺菌を行います。長期間カビの発生を防ぐための重要な工程です。', image: '/images/process-grinding.png' },
  { step: '04', title: '専用粉骨機でのパウダー化', desc: '遺骨専用の大型粉骨機で、散骨規格に適合する2mm以下のサラサラな細かいパウダー状に均一に粉砕します。', image: '/images/process-grinding.png' },
  { step: '05', title: '真空パック・梱包', desc: '湿度から守るため専用のアルミ袋で真空パックし、桐箱やご指定の容器に納めます。', image: '/images/process-grinding.png' },
  { step: '06', title: 'ご返送・レポート提出', desc: '処理前後の状態を写真で記録した「作業報告書」を同封し、丁寧な梱包でご自宅へ返送いたします。', image: '/images/process-grinding.png' },
];

const FAQS = [
  { question: '粉骨とは何ですか？', answer: <p>粉骨とは、ご遺骨を専用機器でパウダー状に細かく砕く処理のことです。散骨には必須（一辺2mm以下）とされているほか、お墓のスペース確保や手元供養など、生活様式の変化に合わせて選ばれています。</p> },
  { question: '費用はいくらですか？追加料金はかかりますか？', answer: <p>基本の粉骨処理は30,000円〜（税込）となります。お遺骨の量やカビの有無によって変動しますが、事前の無料お見積りでご提示した金額から追加となることは一切ございません。</p> },
  { question: '家庭用のミキサー等は使用していませんか？', answer: <p>一切使用しておりません。他の方の遺骨が混ざるリスクや、機械の損耗による不純物混入を防ぐため、粉骨専用に開発された大型の専用機を使用し、1件ごとに完全な清掃を行っています。</p> },
  { question: 'カビが生えている遺骨でも粉骨できますか？', answer: <p>可能ですが、そのまま粉骨すると全体にカビ胞子が広がってしまうため、事前に「洗骨（洗浄・殺菌）」を行うこと（洗骨＋粉骨プラン）を強く推奨しています。状態確認後にお見積りし、無理な強要はいたしません。</p> },
  { question: '遠方でも依頼できますか？', answer: <p>はい、全国47都道府県からご依頼いただけます。ご希望の方には、安全にお送りいただくための「専用梱包キット」を無料で事前にお届けしています。また、関東圏など一部エリアではスタッフによる出張お引取り（有料）も可能です。</p> },
];

const RELATED = [
  { href: '/services/cleaning', title: '洗骨（専用洗浄）', price: '30,000円〜', label: 'Service' },
  { href: '/services/carrying', title: '出張・搬送', price: '10,000円〜', label: 'Service' },
  { href: '/services/takeout', title: 'お引取り', price: '10,000円〜', label: 'Service' },
];

export default function PowderedPage() {
  return (
    <>
      <div className="container" style={{ paddingTop: 'var(--space-6)' }}>
        <Breadcrumb items={[
          { name: 'トップ', href: '/' },
          { name: 'サービス一覧', href: '/services' },
          { name: '粉骨（パウダー化）', href: '/services/powdered' },
        ]} />
      </div>

      {/* Hero */}
      <section className={styles.hero} aria-label="粉骨サービス ヒーロー領域">
        <div className="container">
          <div className={styles.heroLayout}>
            <FadeIn direction="left" className={styles.heroText}>
              <span className={styles.badge}>最も選ばれている基本サービス</span>
              <h1 className={styles.heroTitle}>粉骨<br/><span className={styles.heroTitleSub}>（パウダー化）</span></h1>
              <p className={styles.heroLead}>
                散骨・手元供養・お墓のスペース確保に。<br />
                安全に配慮した専門設備で、<br />
                ご遺骨を美しいパウダー状に加工します。
              </p>
              <div className={styles.heroSummary}>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>料金目安</span>
                  <span className={styles.summaryValue}><span className={styles.priceHighlight}>30,000</span>円〜</span>
                </div>
                <div className={styles.summaryItem}>
                  <span className={styles.summaryLabel}>所要日数</span>
                  <span className={styles.summaryValue}>約3〜5営業日</span>
                </div>
              </div>
              <div className={styles.heroActions}>
                <Button href="/contact" variant="primary" size="lg">無料相談・お見積り</Button>
                <Button href="/pricing" variant="secondary" size="lg">料金詳細を見る</Button>
              </div>
            </FadeIn>
            <FadeIn direction="right" className={styles.heroImageWrap}>
              <Image 
                src="/images/process-grinding.png" 
                alt="粉骨専用設備" 
                layout="fill"
                objectFit="cover"
                className={styles.heroImage}
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features & Granularity */}
      <section className="section section--alt" aria-label="粉骨の特徴">
        <div className="container">
          <FadeIn direction="up" className="text-center">
            <h2 className="section__title">Ikotsu.comの粉骨のこだわり</h2>
            <p className="section__description">
              私たちは単に「砕く」だけではありません。環境と人体に配慮した処理を徹底しています。
            </p>
          </FadeIn>
          
          <StaggerChildren className={styles.featuresGrid} staggerDelay={0.1}>
            <StaggerItem className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3 className={styles.featureTitle}>六価クロム還元処理（標準設定）</h3>
              <p className={styles.featureDesc}>
                火葬時に発生する発がん性物質「六価クロム」。散骨時の環境汚染や、ご自宅での健康被害を防ぐため、すべての粉骨処理において専用剤による無害化還元処理を無料で実施しています。
              </p>
            </StaggerItem>
            <StaggerItem className={styles.featureCard}>
              <div className={styles.featureIcon}>☀️</div>
              <h3 className={styles.featureTitle}>徹底したUV殺菌・完全乾燥</h3>
              <p className={styles.featureDesc}>
                パウダー化する前に専用機器で完全乾燥させ、さらに紫外線による殺菌照射を行います。湿気を含んだまま粉骨をしてしまい、内部からカビが発生する事故を未然に防ぎます。
              </p>
            </StaggerItem>
            <StaggerItem className={styles.featureCard}>
              <div className={styles.featureIcon}>📏</div>
              <h3 className={styles.featureTitle}>目的に応じた適正な「粒度」</h3>
              <p className={styles.featureDesc}>
                海洋散骨や山林散骨では「一辺2mm以下」にすることが条例等のガイダンスで定められています。大型の専用粉骨機により、手作業では難しい均一でサラサラなパウダー状（1mm〜2mm）に仕上げます。
              </p>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Process Timeline Gallery */}
      <section className="section" aria-label="粉骨の工程">
        <div className="container">
          <FadeIn direction="up" className={`text-center ${styles.processHeaderMargin}`}>
            <h2 className="section__title">安心の6工程｜立会サービス対応</h2>
            <p className="section__description">
              粉骨はご希望の方に限り<strong>立会（見学）が可能</strong>なサービスです。<br />
              また、処理完了後に写真付きの「作業報告書」をご返送時に同封しています。
            </p>
          </FadeIn>

          <StaggerChildren className={styles.processGrid} staggerDelay={0.1}>
            {POWDERED_PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step} className={styles.processCard}>
                <div className={styles.processImageWrapper}>
                  <span className={styles.stepBadge}>STEP {step.step}</span>
                  <Image src={step.image} alt={step.title} layout="fill" objectFit="cover" className={styles.processImage} />
                </div>
                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Work Report Preview */}
      <section className="section" aria-label="作業報告書">
        <div className="container">
          <div className={styles.reportLayout}>
            <FadeIn direction="right" className={styles.reportImageWrap}>
              <Image
                src="/images/work-report-mockup.png"
                alt="粉骨完了後に届く作業報告書の見本"
                width={480}
                height={640}
                className={styles.reportImage}
              />
            </FadeIn>
            <FadeIn direction="left" className={styles.reportText}>
              <span className="section__label">Report</span>
              <h2 className={styles.reportTitle}>処理完了後に<br />「作業報告書」をお届けします</h2>
              <p className={styles.reportLead}>
                粉骨が完了したご遺骨をご返送する際、必ず<strong>写真付きの作業報告書</strong>を同封しています。
              </p>
              <ul className={styles.reportPoints}>
                <li>
                  <span className={styles.rPointIcon}>📷</span>
                  <span><strong>処理前・処理後の写真</strong>を両方掲載</span>
                </li>
                <li>
                  <span className={styles.rPointIcon}>✓</span>
                  <span>担当者名・作業完了日・管理番号を明記</span>
                </li>
                <li>
                  <span className={styles.rPointIcon}>✓</span>
                  <span>六価クロム還元処理・UV殺菌の実施確認欄</span>
                </li>
                <li>
                  <span className={styles.rPointIcon}>✓</span>
                  <span>A4判・郵送封筒に同封して返送</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* Witnessing Service */}
      <section className="section section--alt" aria-label="立会サービス">
        <div className="container">
          <div className={styles.witnessingLayout}>
            <FadeIn direction="left" className={styles.witnessingText}>
              <span className="section__label">Witnessing</span>
              <h2 className={styles.witnessingTitle}>粉骨の立会サービス</h2>
              <p className={styles.witnessingLead}>
                粉骨処理は、ご希望の方に限り<strong>ご立会（見学）いただけます</strong>。
                処理の様子を直接ご確認いただくことで、安心してお任せいただける環境を整えています。
              </p>
              <ul className={styles.witnessingPoints}>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span>粉骨専用機器による処理の様子をご覧いただけます</span>
                </li>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span>完全に1件ずつ個別処理。混在は一切ありません</span>
                </li>
                <li>
                  <span className={styles.pointIcon}>✓</span>
                  <span>事前予約制・完全個室での対応</span>
                </li>
                <li>
                  <span className={styles.pointIcon}>⚠</span>
                  <span>作業場所・施設内部の写真撮影はご遠慮いただいています</span>
                </li>
              </ul>
              <div className={styles.witnessingMeta}>
                <div className={styles.witnessingMetaItem}>
                  <span className={styles.metaLabel}>立会費用</span>
                  <span className={styles.metaValue}>粉骨料金に含む（追加費用なし）</span>
                </div>
                <div className={styles.witnessingMetaItem}>
                  <span className={styles.metaLabel}>所要時間</span>
                  <span className={styles.metaValue}>40〜60分程度</span>
                </div>
                <div className={styles.witnessingMetaItem}>
                  <span className={styles.metaLabel}>対象</span>
                  <span className={styles.metaValue}>直接持込みのご依頼のみ（郵送・出張は対象外）</span>
                </div>
              </div>
              <Button href="/contact" variant="primary">立会を希望してお問い合わせ</Button>
            </FadeIn>
            <FadeIn direction="right" className={styles.witnessingImageWrap}>
              <Image
                src="/images/witnessing-room.png"
                alt="立会（見学）スペース - 清潔な個室環境"
                width={560}
                height={420}
                className={styles.witnessingImage}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt" aria-label="よくあるご質問">
        <div className="container container--narrow">
          <FadeIn direction="up">
            <div className="section__header">
              <span className="section__label">FAQ</span>
              <h2 className="section__title">粉骨に関するよくあるご質問</h2>
            </div>
            <Accordion items={FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" aria-label="関連サービス">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section__title text-center">その他のサービス</h2>
          </FadeIn>
          <StaggerChildren className={styles.relatedGrid} staggerDelay={0.1}>
            {RELATED.map((r) => (
              <StaggerItem key={r.href}>
                <a href={r.href} className={styles.relatedCard}>
                  <span className={styles.relatedLabel}>{r.label}</span>
                  <p className={styles.relatedTitle}>{r.title}</p>
                  <p className={styles.relatedPrice}>{r.price}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Structured Data */}
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'トップ', href: '/' },
        { name: 'サービス一覧', href: '/services' },
        { name: '粉骨（パウダー化）', href: '/services/powdered' },
      ])} />
      <JsonLd data={generateServiceSchema({
        name: '粉骨（パウダー化）サービス',
        description: '遺骨を専用設備でパウダー状に処理。散骨・改葬・手元供養に対応。六価クロム還元処理・UV殺菌標準付帯。',
        url: '/services/powdered',
      })} />
      <JsonLd data={generateFAQSchema(FAQS.map(f => ({ question: f.question, answer: typeof f.answer === 'string' ? f.answer : '詳細はページ内をご覧ください。' })))} />
    </>
  );
}
