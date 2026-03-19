'use client';

import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ProductLineup.module.css';

const PRODUCTS = [
  {
    id: 'free-set',
    name: '基本セット',
    subtitle: '全処理に無料付属',
    price: '無料',
    priceNote: 'サービス料金に含む',
    isFree: true,
    items: ['水溶紙袋 3枚', '保存袋 2枚'],
    description: 'お骨を安全に包む水溶性の紙袋と保存袋を標準でお付けします。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L5 8V15C5 20.55 9 25.74 14 27C19 25.74 23 20.55 23 15V8L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14.5L13 17.5L18 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#50C878',
  },
  {
    id: 'frill-bag',
    name: 'お骨袋＜フリル＞',
    subtitle: '上品な刺繍入りお骨袋',
    price: '+6,600円',
    priceNote: '（税込）',
    isFree: false,
    items: ['繊細なフリル刺繍', 'やわらかな布素材', '心を込めた包み'],
    description: '大切なご遺骨を優しく包む、上品なフリル刺繍のお骨袋です。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 10C6 8.895 6.895 8 8 8H20C21.105 8 22 8.895 22 10V22C22 23.105 21.105 24 20 24H8C6.895 24 6 23.105 6 22V10Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 8V6C10 4.895 10.895 4 12 4H16C17.105 4 18 4.895 18 6V8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 14C10 13 11 12 14 12C17 12 18 13 18 14C18 15.5 16 16.5 14 17C12 17.5 10 18.5 10 20C10 21 11 22 14 22C17 22 18 21 18 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    color: '#DC64B4',
  },
  {
    id: 'calm-cover',
    name: '保存袋カバー＜穏＞',
    subtitle: 'やわらかな風合いのカバー',
    price: '+6,600円',
    priceNote: '（税込）',
    isFree: false,
    items: ['穏やかな色合い', '保存袋をすっきり収納', '日常の供養にも'],
    description: '保存袋をきれいに収めるカバー。穏やかな色合いで日常の供養に溶け込みます。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 11H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 19H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#3399CC',
  },
  {
    id: 'shinnyo-box',
    name: '骨箱＜shinnyo＞',
    subtitle: '清楚な白木の骨箱',
    price: '+6,600円',
    priceNote: '（税込）',
    isFree: false,
    items: ['清楚な白木仕上げ', 'コンパクトサイズ', '手元供養に最適'],
    description: '清楚な白木仕上げの骨箱。手元供養のための大切な器として長くご使用いただけます。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="12" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 15H23" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12V9C8 7.343 9.343 6 11 6H17C18.657 6 20 7.343 20 9V12" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#B8963E',
  },
  {
    id: 'ecrin-box',
    name: '骨箱＜エクラン＞漆塗り',
    subtitle: '職人仕上げのプレミアム漆骨箱',
    price: '+22,000円',
    priceNote: '（税込）',
    isFree: false,
    items: ['伝統的な漆塗り仕上げ', '職人による手作り', '永く使える本物の器'],
    description: '職人が丹念に仕上げた漆塗りの高級骨箱。大切なご先祖様にふさわしい、本物の器です。',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L4 9V14C4 19.5 8.4 24.7 14 26C19.6 24.7 24 19.5 24 14V9L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 14C9 11.239 11.239 9 14 9C16.761 9 19 11.239 19 14C19 16.761 16.761 19 14 19C11.239 19 9 16.761 9 14Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
    color: '#9C6BC8',
  },
] as const;

export default function ProductLineup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section" aria-label="収骨製品・手元供養ラインナップ">
      <div className="container">
        <motion.div
          className="section__header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section__label">Products</span>
          <h2 className="section__title">収骨製品・手元供養ラインナップ</h2>
          <p className="section__description">
            大切なご遺骨にふさわしい、丁寧につくられた用品をご用意しています。
            基本セットは全処理に無料でお付けします。
          </p>
        </motion.div>

        <div className={styles.grid}>
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              className={`${styles.card} ${product.isFree ? styles['card--free'] : ''}`}
              style={{ '--product-accent': product.color } as React.CSSProperties}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {product.isFree && (
                <div className={styles.freeBadge}>無料付属</div>
              )}

              <div
                className={styles.iconWrap}
                style={{ color: product.color }}
              >
                {product.icon}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productSubtitle}>{product.subtitle}</p>
              </div>

              <div className={styles.priceArea}>
                <span
                  className={styles.price}
                  style={{ color: product.isFree ? product.color : 'var(--text-primary)' }}
                >
                  {product.price}
                </span>
                <span className={styles.priceNote}>{product.priceNote}</span>
              </div>

              <ul className={styles.itemList}>
                {product.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <span
                      className={styles.itemDot}
                      style={{ background: product.color }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className={styles.productDesc}>{product.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.ctaNote}>
            オプション品はお申し込み時に追加いただけます。詳しくはお問い合わせください。
          </p>
          <Link href="/contact" className={styles.ctaLink}>
            無料相談・オプション確認 →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
