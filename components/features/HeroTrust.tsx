'use client';

import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './HeroTrust.module.css';

const TRUST_BADGES = [
  { label: '創業2008年', sub: '確かな歴史と信頼' },
  { label: '18年以上の経験', sub: 'ベテラン専門スタッフ' },
  { label: '海洋散骨7,000件超', sub: '海洋散骨実績No.1クラス' },
  { label: '供養実績20,000件超', sub: '圧倒的な処理実績' },
  { label: '全国の寺院・葬儀社提携', sub: 'プロが信頼するパートナー' },
] as const;

export default function HeroTrust() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={styles.hero} aria-label="トラスト・ヒーローセクション">
      {/* 流体モーフィング背景 */}
      <div className={styles.morphBg} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1} ${shouldReduceMotion ? styles.blobReduced : ''}`} />
        <div className={`${styles.blob} ${styles.blob2} ${shouldReduceMotion ? styles.blobReduced : ''}`} />
        <div className={`${styles.blob} ${styles.blob3} ${shouldReduceMotion ? styles.blobReduced : ''}`} />
        <div className={styles.noiseOverlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: コピー + CTA */}
        <div className={styles.textSide}>
          <motion.span
            className={styles.eyebrow}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            粉骨・洗骨の専門機関
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            遺骨は、大切なご家族や
            <br />
            ご先祖様の
            <span className={styles.titleAccent}>「生きた証」</span>
            です
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            散骨・手元供養・改葬——どのようなお別れの形も、
            <br />
            専門機関品質の処理と丁寧なサポートでお応えします。
            <br />
            写真付き報告書・追加費用なし・全国対応。
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/diagnosis" className={styles.btnPrimary}>
              <span className={styles.btnIcon} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C9 2 5 6 5 9.5C5 11.985 6.791 14 9 14C11.209 14 13 11.985 13 9.5C13 6 9 2 9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6.5 16H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              30秒のAI診断から始める
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              無料相談・お見積り
            </Link>
          </motion.div>
        </div>

        {/* Right: 権威性バッジ */}
        <motion.div
          className={styles.badgeSide}
          initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label="信頼の実績"
        >
          <p className={styles.badgeSideLabel}>信頼の実績</p>
          <ul className={styles.badgeList}>
            {TRUST_BADGES.map((badge, i) => (
              <motion.li
                key={badge.label}
                className={styles.badgeItem}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.5 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className={styles.badgeCheck} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className={styles.badgeContent}>
                  <strong className={styles.badgeLabel}>{badge.label}</strong>
                  <span className={styles.badgeSub}>{badge.sub}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* 下部グラデーションフェード */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
