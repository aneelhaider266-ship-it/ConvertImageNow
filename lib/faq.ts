export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is ConvertImageNow free to use?",
    answer:
      "Yes. The listed converter tools are free to use and do not require an account. Converted downloads do not include an added ConvertImageNow watermark. Practical batch capacity depends on your device and browser memory.",
  },
  {
    question: "Do I need to create an account to convert images?",
    answer:
      "No sign-up is required. Select supported images in the converter, choose an output format, and download the results.",
  },
  {
    question: "Are my images uploaded to your servers?",
    answer:
      "For supported conversions, selected image files are processed in your browser using image decoding and Canvas APIs rather than uploaded to a conversion server. The website still makes normal requests to load pages and resources; see the Privacy Policy for details about site data.",
  },
  {
    question: "Which image formats can I convert?",
    answer:
      "The main converter accepts JPG, PNG, WebP, and AVIF inputs where your browser supports AVIF decoding. You can export as JPG, PNG, or WebP. HEIC and HEIF files are not currently supported.",
  },
  {
    question: "Is there a limit on how many images I can convert at once?",
    answer:
      "You can add multiple supported images to the queue. The converter processes them sequentially; practical batch capacity depends on image dimensions, browser memory, and your device.",
  },
  {
    question: "Will converting reduce the quality of my images?",
    answer:
      "JPG and WebP output include an adjustable quality setting from 1 to 100. Lower settings can reduce file size but may introduce visible artifacts. PNG output does not use the quality slider, and converting an already-compressed image to PNG cannot restore lost detail.",
  },
  {
    question: "What's the difference between JPG, PNG, and WebP?",
    answer:
      "JPG uses lossy compression and is commonly used for photographs. PNG uses lossless encoding and supports transparency. WebP supports lossy and lossless encoding as a format, while this converter creates WebP output using its adjustable quality setting. Compare results for your own images.",
  },
  {
    question: "Can I convert an image to have a transparent background?",
    answer:
      "PNG and WebP can preserve transparency when the source image has transparent pixels and the selected output supports them. JPG does not support transparency, so transparent areas are flattened against a white background.",
  },
  {
    question: "Does ConvertImageNow work on mobile devices?",
    answer:
      "The site is responsive and can be used in modern mobile browsers. Available input formats and practical file sizes depend on browser support, device memory, and image dimensions.",
  },
  {
    question: "Can I download all my converted images at once?",
    answer:
      "Yes. After the queued files finish converting, download individual results or use the ZIP download option to collect them in one archive.",
  },
  {
    question: "Why is my browser slow when converting large images?",
    answer:
      "Image decoding and Canvas processing use your device's available resources. Large dimensions, large batches, limited memory, and other open tabs can affect processing time.",
  },
  {
    question: "Is AVIF supported for output as well as input?",
    answer:
      "AVIF is accepted as an input format when your browser can decode it. The current converter exports JPG, PNG, or WebP; it does not encode AVIF output.",
  },
  {
    question: "Does ConvertImageNow work offline?",
    answer:
      "The conversion workflow processes selected image data in your browser after the page and required resources have loaded. The site is not presented as an offline or installable converter, so an internet connection may be needed to open or reload it.",
  },
  {
    question: "Can I use ConvertImageNow for commercial projects?",
    answer:
      "You may use converted files in personal or commercial projects if you have the necessary rights to the original images and comply with any applicable third-party licenses. The converter does not grant rights to source content.",
  },
  {
    question: "What happens to my images after I close the tab?",
    answer:
      "The converter does not upload selected image files to a conversion server. Temporary image data used by the browser is released according to browser memory management when the page is closed; website requests and other site data are described in the Privacy Policy.",
  },
  {
    question: "Why would I convert PNG to JPG?",
    answer:
      "JPG can produce smaller files for many photographs, but the result depends on the source image and quality setting. Transparent areas are flattened against a white background when converting to JPG.",
  },
  {
    question: "Why would I convert to WebP?",
    answer:
      "WebP can produce compact files for many web images, but file size and visual quality vary by source image and quality setting. Compare the converted result with the original before publishing.",
  },
  {
    question: "Can I resize images?",
    answer:
      "Yes. Use the dedicated Image Resizer to change pixel dimensions or scale percentage while managing the aspect ratio.",
  },
  {
    question: "Is there a file size limit per image?",
    answer:
      "The tool does not advertise a fixed per-image upload cap, but browser memory, device resources, image dimensions, and supported formats impose practical limits. Very large files may fail on some devices.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer:
      "Use the Contact page to describe the issue, the browser and device you are using, and the steps needed to reproduce it.",
  },
];
