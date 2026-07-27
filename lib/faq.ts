export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is ConvertImageNow really free to use?",
    answer:
      "Yes. There are no subscriptions, no per-conversion fees, and no watermarks added to your images. You can convert as many images as you like.",
  },
  {
    question: "Do I need to create an account to convert images?",
    answer:
      "No sign-up is required. Just open the converter, drop in your images, and download the results.",
  },
  {
    question: "Are my images uploaded to your servers?",
    answer:
      "No. Every conversion happens locally in your browser using the HTML5 Canvas API. Your files never leave your device.",
  },
  {
    question: "Which image formats can I convert?",
    answer:
      "You can convert from JPG, PNG, WebP, and AVIF, and export to JPG, PNG, or WebP.",
  },
  {
    question: "Is there a limit on how many images I can convert at once?",
    answer:
      "You can batch-convert as many images as your device's memory can comfortably handle — there's no artificial limit set by us.",
  },
  {
    question: "Will converting reduce the quality of my images?",
    answer:
      "You control the output quality with a slider from 1 to 100, so you can balance smaller file size against visual quality however you like.",
  },
  {
    question: "What's the difference between JPG, PNG, and WebP?",
    answer:
      "JPG is best for photos and small file sizes, PNG preserves transparency and sharp edges, and WebP often gives the best balance of quality and file size for the web.",
  },
  {
    question: "Can I convert an image to have a transparent background?",
    answer:
      "Converting to PNG or WebP preserves transparency if your original image already has it. Converting to JPG will fill transparent areas with white, since JPG doesn't support transparency.",
  },
  {
    question: "Does ConvertImageNow work on mobile devices?",
    answer:
      "Yes, the tool is fully responsive and works on modern mobile browsers, tablets, and desktops alike.",
  },
  {
    question: "Can I download all my converted images at once?",
    answer:
      "Yes. Once your images finish converting, use the \"Download All (ZIP)\" button to get everything in a single archive.",
  },
  {
    question: "Why is my browser slow when converting large images?",
    answer:
      "Because conversion happens on your own device rather than a server, very large images or very large batches can take a moment depending on your device's processing power.",
  },
  {
    question: "Is AVIF supported for output as well as input?",
    answer:
      "Currently AVIF is supported as an input format. Output is available in JPG, PNG, or WebP, since AVIF encoding support varies across browsers.",
  },
  {
    question: "Does ConvertImageNow work offline?",
    answer:
      "Once the page is loaded, image conversion itself doesn't require an internet connection, since it all happens locally in your browser.",
  },
  {
    question: "Can I use ConvertImageNow for commercial projects?",
    answer:
      "Yes, there are no restrictions on how you use your converted images, commercial or personal.",
  },
  {
    question: "What happens to my images after I close the tab?",
    answer:
      "Nothing is stored anywhere. Once you close the tab, any in-progress files are simply cleared from your browser's memory.",
  },
  {
    question: "Why would I convert PNG to JPG?",
    answer:
      "JPG files are typically much smaller than PNG for photographs, which helps your website or app load faster.",
  },
  {
    question: "Why would I convert to WebP?",
    answer:
      "WebP typically offers smaller file sizes than JPG or PNG at similar visual quality, which is great for web performance and SEO.",
  },
  {
    question: "Can I resize images while converting?",
    answer:
      "Resizing isn't part of the converter yet, but it's on our roadmap as a dedicated tool — see the Tools page for what's coming soon.",
  },
  {
    question: "Is there a file size limit per image?",
    answer:
      "There's no fixed limit imposed by ConvertImageNow, though extremely large files depend on your device's available memory.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer:
      "You can reach us any time through the Contact page — we read every message.",
  },
];
