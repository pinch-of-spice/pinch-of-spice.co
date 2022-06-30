declare global {
  interface Window {
    gtag: any;
  }
}

export const GA_ID = process.env.gaId;
export const pageview = (url: string) => {
  if (!GA_ID) return;
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!GA_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
