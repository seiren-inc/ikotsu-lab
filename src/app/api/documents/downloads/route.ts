import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { document_id } = body;

    if (!document_id) {
      return NextResponse.json({ error: 'Missing document_id' }, { status: 400 });
    }

    // Prisma: document_downloads にダウンロード記録を保存
    await prisma.ikotsuDocumentDownload.create({
      data: {
        id: crypto.randomUUID(),
        document_id,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to log document download:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
