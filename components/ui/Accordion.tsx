'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import styles from './Accordion.module.css';

interface AccordionItem {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  className = '',
  allowMultiple = false,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, index) => (
        <AccordionPanel
          key={index}
          item={item}
          isOpen={openIndices.has(index)}
          onToggle={() => toggle(index)}
          index={index}
        />
      ))}
    </div>
  );
}

function AccordionPanel({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const panelId = `accordion-panel-${index}`;
  const headerId = `accordion-header-${index}`;

  return (
    <div className={`${styles.panel} ${isOpen ? styles['panel--open'] : ''}`}>
      <button
        id={headerId}
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={styles.question}>{item.question}</span>
        <span className={styles.icon} aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8L10 13L15 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={styles.content}
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className={styles.inner}>
          {item.answer}
        </div>
      </div>
    </div>
  );
}
