'use client';

import { sponsors } from '@/lib/sponsors';
import { shell } from '@/lib/theme';

export default function SponsorsBar() {
  if (sponsors.length === 0) return null;

  return (
    <section className={`${shell.sponsorsBg} py-8 border-t border-gray-200`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className={`text-sm font-semibold uppercase tracking-wider ${shell.sponsorsHeading} mb-6`}>
          Friends to Lake Ontario Sailors
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map(sponsor => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0"
              title={sponsor.name}
            >
              {sponsor.logo ? (
                <img src={sponsor.logo} alt={sponsor.name} className="h-10 max-w-[160px] object-contain" />
              ) : (
                <span className={`text-lg font-bold ${shell.sponsorsText}`}>{sponsor.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
