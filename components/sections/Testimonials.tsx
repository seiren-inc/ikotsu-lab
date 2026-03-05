'use client';

import FadeIn from '@/components/motion/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    serviceType: '粉骨サービス（郵送）',
    area: '東京都 / 60代女性',
    comment:
      '海洋散骨のために粉骨をお願いしました。骨壺を郵送するのが心配でしたが、梱包の仕方を丁寧に教えてくださり安心できました。返送時に同封されていた写真付きの作業報告書を見て、ここにお願いして本当によかったと思いました。',
    stars: 5,
  },
  {
    id: 2,
    serviceType: '洗骨＋粉骨セット（郵送）',
    area: '神奈川県 / 50代男性',
    comment:
      '30年以上お墓に納めていたご遺骨にカビが発生していました。状態の説明から料金の提示まで明確で、追加費用も一切なく安心しました。返ってきたご遺骨がとても綺麗な状態で、感謝しかありません。',
    stars: 5,
  },
  {
    id: 3,
    serviceType: '出張引取り＋粉骨',
    area: '埼玉県 / 70代女性',
    comment:
      '足が悪く持参できないとご相談したところ、出張引取りを提案してくれました。スタッフの方がとても丁寧で、重い骨壺を安全に運んでいただき大変助かりました。高齢の方にも安心なサービスだと思います。',
    stars: 5,
  },
  {
    id: 4,
    serviceType: '粉骨サービス（持込み・立会）',
    area: '神奈川県 / 40代男性',
    comment:
      '墓じまいを機に粉骨をお願いしました。立会サービスがあると聞き実際に見学しましたが、専用機器で1件ずつ丁寧に処理されていて安心しました。料金シミュレーターで費用感が事前にわかったのも助かりました。',
    stars: 5,
  },
  {
    id: 5,
    serviceType: '洗骨サービス（郵送）',
    area: '大阪府 / 50代女性',
    comment:
      'お骨が湿気でひどい状態になっており心配でしたが、写真付きの報告書で処理前後の変化が確認でき、プロにお任せして本当によかったと思えました。遠方でも安心して依頼できるサービスです。',
    stars: 5,
  },
  {
    id: 6,
    serviceType: 'お引取りサービス＋粉骨',
    area: '北海道 / 60代男性',
    comment:
      '高齢の母が自宅で管理していた骨壺を、遠方から出向くことなくお引取りいただけました。連絡がとても細やかで、処理完了後もすぐに連絡をいただき、北海道からでも安心して依頼できました。',
    stars: 5,
  },
  {
    id: 7,
    serviceType: '粉骨サービス（郵送）',
    area: '愛知県 / 40代女性',
    comment:
      '主人の遺骨を手元供養のためにパウダー状にしていただきました。専用の骨壺を用意する前に、まず状態を相談したいとメールしたところ、細かく丁寧に応えてもらえました。本当に信頼できる会社だと感じました。',
    stars: 5,
  },
  {
    id: 8,
    serviceType: '洗骨＋粉骨セット（持込み）',
    area: '神奈川県 / 30代男性',
    comment:
      '祖父母の遺骨2体を合祀して散骨したいと相談したところ、分けて処理してから合わせる方法を提案してくれました。こちらの知識がない部分を丁寧に説明してくれ、希望通りの形で納めることができました。',
    stars: 5,
  },
  {
    id: 9,
    serviceType: '粉骨サービス（法人依頼）',
    area: '神奈川県 / 寺院ご担当者',
    comment:
      '当寺では墓じまいの増加に伴い、粉骨業務を外部委託することにしました。担当者の対応が誠実で、写真付き報告書の発行もあり、ご家族への説明資料として活用できています。継続してお願いしています。',
    stars: 5,
  },
  {
    id: 10,
    serviceType: '出張引取り＋洗骨',
    area: '千葉県 / 70代男性',
    comment:
      '妻のお骨をきれいにしてあげたかったのですが、自分では持ち運びが難しく困っていました。電話一本で引取りに来ていただき、返ってきたお骨を見て妻も喜んでくれているような気がしました。ありがとうございました。',
    stars: 5,
  },
  {
    id: 11,
    serviceType: '粉骨サービス（郵送）',
    area: '福岡県 / 50代男性',
    comment:
      '九州からの郵送でも対応してもらえるか不安でしたが、梱包キットの送付から返送まで全て安心してお任せできました。料金も事前に明確に提示していただき、追加請求が一切なかった点が特によかったです。',
    stars: 5,
  },
  {
    id: 12,
    serviceType: '洗骨サービス（郵送）',
    area: '静岡県 / 60代女性',
    comment:
      '長期間保管していた遺骨の状態が気になり、一度専門家に診ていただきたいと思いご相談しました。状態確認の写真をメールで送ると、すぐに状況を説明してくれ見積もりも出してもらえました。対応の速さと丁寧さに驚きました。',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count}点満点中${count}点`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 1.5L9.795 5.626L14.292 6.268L11.146 9.335L11.888 13.814L8 11.625L4.112 13.814L4.854 9.335L1.708 6.268L6.205 5.626L8 1.5Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section--alt" aria-label="お客様の声">
      <div className="container">
        <FadeIn direction="up" className="text-center">
          <span className="section__label">Voice</span>
          <h2 className="section__title">ご利用いただいたお客様の声</h2>
          <p className="section__description">
            実際にご依頼いただいたお客様からいただいたご感想です。
          </p>
        </FadeIn>

        <StaggerChildren className={styles.grid} staggerDelay={0.08}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id} className={styles.card}>
              <div className={styles.cardTop}>
                <StarRating count={t.stars} />
                <div className={styles.meta}>
                  <span className={styles.serviceType}>{t.serviceType}</span>
                  <span className={styles.area}>{t.area}</span>
                </div>
              </div>
              <p className={styles.comment}>"{t.comment}"</p>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn direction="up" delay={0.3} className={styles.notice}>
          ※ お客様の声は実際のお声をもとに一部要約・匿名化しています。
        </FadeIn>
      </div>
    </section>
  );
}
