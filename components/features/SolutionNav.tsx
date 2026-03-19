'use client';

import { useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './SolutionNav.module.css';

const SOLUTIONS = [
  {
    id: 'scatter',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C14 4 8 10 8 16C8 19.314 10.686 22 14 22C17.314 22 20 19.314 20 16C20 10 14 4 14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 23L21 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 19L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 19L20 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: '海・山に還したい',
    service: '散骨のための粉骨',
    desc: '散骨に必要な粉末状への処理を行います',
    color: '#3399CC',
    href: '/services/powdered',
  },
  {
    id: 'consolidate',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="10" width="8" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10V8C8 6.895 8.895 6 10 6H18C19.105 6 20 6.895 20 8V10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 20V22H16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: '複数の骨壺をまとめたい',
    service: '合葬・集約処理',
    desc: '複数の遺骨をひとつの骨壺へ安全にまとめます',
    color: '#DC64B4',
    href: '/services/cleaning',
  },
  {
    id: 'downsize',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 12H18M10 16H16M10 20H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 4H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    label: '大きな骨壺を小さくしたい',
    service: '骨壺サイズダウン',
    desc: '粉骨処理で容量を大幅に減らせます',
    color: '#50C878',
    href: '/services/powdered',
  },
  {
    id: 'overseas',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4C14 4 10 9 10 14C10 19 14 24 14 24" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4C14 4 18 9 18 14C18 19 14 24 14 24" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 14H24" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: '海外へ持参したい',
    service: '国際搬送対応',
    desc: '海外持ち込み要件を満たす粉骨・搬送を対応',
    color: '#B8963E',
    href: '/services/carrying',
  },
  {
    id: 'memorial',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 5L16.09 11.26L23 11.27L17.45 15.14L19.18 22.02L14 18.27L8.82 22.02L10.55 15.14L5 11.27L11.91 11.26L14 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: '手元で供養したい',
    service: '手元供養グッズ',
    desc: '専用容器・お骨袋・骨箱など各種取り揃え',
    color: '#9C6BC8',
    href: '/services/powdered',
  },
] as const;

export default function SolutionNav() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section" aria-label="目的別ソリューション">
      <div className="container">
        <motion.div
          className="section__header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section__label">Solutions</span>
          <h2 className="section__title">お悩み・目的から選ぶ</h2>
          <p className="section__description">
            「どうしたいか」から最適なサービスへ。迷ったら無料相談もご利用ください。
          </p>
        </motion.div>

        <div className={styles.scrollWrapper} role="list" aria-label="目的別メニュー">
          {SOLUTIONS.map((item, i) => (
            <motion.div
              key={item.id}
              role="listitem"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={item.href}
                className={styles.card}
                style={{ '--card-accent': item.color } as React.CSSProperties}
                aria-label={`${item.label}（${item.service}）`}
              >
                <span
                  className={styles.iconWrap}
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>

                <span className={styles.cardBody}>
                  <strong className={styles.cardLabel}>{item.label}</strong>
                  <span className={styles.cardService}>{item.service}</span>
                  <span className={styles.cardDesc}>{item.desc}</span>
                </span>

                <span className={styles.arrow} aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
