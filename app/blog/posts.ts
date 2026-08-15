export type BlogPost = {
  slug: string; title: string; description: string; date: string; readTime: string;
  category: string; intro: string; sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-grow-restaurant-catering-sales",
    title: "How to Grow Restaurant Catering Sales: A Practical 90-Day Plan",
    description: "A practical 90-day plan for restaurants that want more corporate catering orders, stronger operations, and repeat business.",
    date: "2026-08-15", readTime: "7 min read", category: "Growth strategy",
    intro: "Growing catering sales is not just an advertising problem. Restaurants win when the offer, ordering experience, fulfillment process, and follow-up system work together. This 90-day plan turns those pieces into one measurable channel.",
    sections: [
      { heading: "Days 1–30: Make the offer easy to buy", paragraphs: ["Start with a focused catering menu built for travel, group ordering, and reliable kitchen execution. Office buyers need clear serving counts, lead times, delivery fees, dietary labels, and add-ons."], bullets: ["Choose 8–15 dependable packages", "Set minimums, lead times, and delivery zones", "Photograph the food and packaging", "Create a fast quote and ordering path"] },
      { heading: "Days 31–60: Build local demand", paragraphs: ["Create pages and campaigns around the areas you can serve profitably. Reach office managers, executive assistants, event planners, medical offices, and local companies with a clear reason to try you."], bullets: ["Build city and neighborhood landing pages", "Set up Google Business Profile catering services", "Launch tightly targeted search campaigns", "Contact qualified local business accounts"] },
      { heading: "Days 61–90: Turn first orders into accounts", paragraphs: ["The strongest catering programs are powered by repeat buyers. Track every inquiry, respond quickly, confirm delivery details, and follow up after the event."], bullets: ["Ask for feedback after delivery", "Schedule a reorder reminder", "Record dietary and delivery preferences", "Review sales, margin, and repeat rate weekly"] },
      { heading: "What to measure", paragraphs: ["Track qualified inquiries, quote-to-order conversion, average order value, food and delivery margin, on-time delivery, repeat-order rate, and revenue by account. More leads are not useful if the operation cannot fulfill them profitably."] }
    ],
    faqs: [
      { question: "How quickly can a restaurant grow catering sales?", answer: "A restaurant can build the foundation in 30–90 days, but sustainable growth depends on market demand, menu fit, capacity, service, and consistent follow-up." },
      { question: "What is the best customer for restaurant catering?", answer: "Recurring business accounts such as offices, medical practices, schools, and event teams are often valuable because they can place repeat group orders." },
      { question: "Do restaurants need catering software?", answer: "A dedicated system becomes valuable when quotes, orders, customer details, payments, deliveries, and follow-up are difficult to manage consistently." }
    ]
  },
  {
    slug: "restaurant-catering-software-checklist",
    title: "Restaurant Catering Software: The Essential Evaluation Checklist",
    description: "What restaurants should look for in catering management software, from ordering and payments to customer follow-up and reporting.",
    date: "2026-08-15", readTime: "6 min read", category: "Catering technology",
    intro: "The right catering software should make buying easier for customers and execution clearer for your team. Use this checklist to evaluate the entire workflow—not just the order screen.",
    sections: [
      { heading: "Customer ordering", paragraphs: ["Buyers should understand packages, portions, dietary options, minimums, delivery windows, and fees without a long email exchange."], bullets: ["Mobile-friendly branded storefront", "Scheduled orders and lead-time rules", "Dietary labels and modifiers", "Quotes, invoices, and secure payments"] },
      { heading: "Restaurant operations", paragraphs: ["Your team needs one reliable source of truth from order acceptance through production and delivery."], bullets: ["Central order calendar", "Kitchen-ready order details", "Delivery instructions and status", "Role-based access and notifications"] },
      { heading: "Growth and reporting", paragraphs: ["Software should help create repeat revenue, not simply record transactions."], bullets: ["Customer and company profiles", "Lead and quote follow-up", "Revenue and order reporting", "Repeat-order and account visibility"] },
      { heading: "Questions to ask before signing", paragraphs: ["Ask who owns the customer data, what implementation requires, how support works, what integrations are available, and how pricing changes as order volume grows."] }
    ],
    faqs: [
      { question: "What does restaurant catering software do?", answer: "It organizes catering menus, quotes, scheduled orders, payments, customer details, production, delivery, and performance reporting." },
      { question: "Can catering software help generate orders?", answer: "Software improves conversion and retention, while demand generation usually also requires local search, advertising, outreach, partnerships, and referrals." },
      { question: "How should a restaurant choose a platform?", answer: "Choose based on the full customer and operating workflow, support quality, data ownership, integrations, economics, and your team’s ability to use it consistently." }
    ]
  },
  {
    slug: "corporate-catering-marketing-guide",
    title: "Corporate Catering Marketing: How Restaurants Win Repeat Office Orders",
    description: "A guide to reaching local offices, converting catering leads, and building repeat corporate catering accounts.",
    date: "2026-08-15", readTime: "7 min read", category: "Corporate catering",
    intro: "Corporate catering buyers value reliability, clarity, and speed. A strong marketing program makes the restaurant easy to discover, easy to evaluate, and safe to choose for an important group order.",
    sections: [
      { heading: "Define the right local accounts", paragraphs: ["Prioritize organizations inside a profitable delivery radius with enough staff and recurring meetings or events."], bullets: ["Corporate and coworking offices", "Medical and professional practices", "Schools and community organizations", "Property managers and event venues"] },
      { heading: "Create a low-risk first order", paragraphs: ["Use clear packages, real food photography, dietary choices, delivery expectations, and social proof. A tasting or first-order offer can help a qualified buyer experience the service." ] },
      { heading: "Combine search with direct outreach", paragraphs: ["Search captures existing intent while thoughtful outreach introduces the restaurant to accounts before their next need. Use role-specific messaging and follow every useful call with a short email." ] },
      { heading: "Build a repeat-order routine", paragraphs: ["Save account preferences, follow up after delivery, and contact buyers ahead of recurring meetings. Consistent service and relevant reminders outperform generic promotions."] }
    ],
    faqs: [
      { question: "Who usually orders corporate catering?", answer: "Office managers, executive assistants, workplace teams, HR teams, event planners, administrators, and department leaders commonly coordinate group food orders." },
      { question: "Should a restaurant call or email catering prospects?", answer: "A short relevant call followed by a concise email often works well. Respect the recipient, personalize the reason for contacting them, and avoid high-volume spam." },
      { question: "How do you get repeat corporate orders?", answer: "Deliver reliably, record preferences, ask for feedback, make reordering simple, and follow up around the customer’s actual meeting and event schedule." }
    ]
  }
];

export function getPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
