'use client';

import { Localize } from '@deriv-com/translations';

export function Footer() {
  return (
    <footer className="w-full py-1 text-center">
      <p className="text-xs tracking-wide text-muted-foreground">
        <Localize i18n_default_text="Powered by" />{' '}
        <span className="font-semibold text-foreground">
          <Localize i18n_default_text="Deriv" />
        </span>
      </p>
    </footer>
  );
}
