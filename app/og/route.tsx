import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || '遺骨.com｜粉骨・洗骨の専門機関';
  const label = searchParams.get('label') || '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0f1117 0%, #1a1d2e 100%)',
          padding: '60px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Header bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
              borderRadius: '12px',
              padding: '10px 24px',
              fontSize: '22px',
              fontWeight: '900',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            遺骨.com
          </div>
          {label && (
            <div
              style={{
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '999px',
                padding: '4px 16px',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              {label}
            </div>
          )}
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: title.length > 30 ? '44px' : '56px',
            fontWeight: '900',
            color: '#fff',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Footer badges */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['全国47都道府県対応', '写真付き作業報告書', '料金透明・追加請求なし', '粉骨立会サービスあり'].map((badge) => (
            <div
              key={badge}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                padding: '8px 18px',
                fontSize: '16px',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: '600',
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
