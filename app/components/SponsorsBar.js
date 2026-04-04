'use client';

import { sponsors } from '@/lib/sponsors';
import { shell } from '@/lib/theme';

export default function SponsorsBar() {
  if (sponsors.length === 0) return null;

  return (
    <section className={`${shell.sponsorsBg} py-12 border-t border-[#E8E4DD]`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className={`text-xs font-medium uppercase tracking-[0.15em] ${shell.sponsorsHeading} mb-8 opacity-60`}>
          Friends to Lake Ontario Sailors
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {sponsors.map(sponsor => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
              title={sponsor.name}
            >
              {sponsor.logo ? (
                <img src={sponsor.logo} alt={sponsor.name} className="h-8 max-w-[140px] object-contain" />
              ) : (
                <span className="text-lg font-semibold text-[#1A2744]">{sponsor.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
