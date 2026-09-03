import { withBase } from '../utils'

export const experience = [
  {
    company: 'Sriya.AI',
    location: 'Georgia, United States',
    duration: 'May 2026 – Present',
    logo: withBase('assets/logo/sriya-logo.png'),
    roles: [
      {
        title: 'Data Scientist',
        date: 'July 2026 – Present',
        highlights: [
          'Building **production-ready AI and ML solutions** for website auditing, customer intelligence, and GA4-driven business insights.',
          'Developing **end-to-end ML and Generative AI workflows**, including LLM-powered reporting, recommendations, and automated analytics.',
          'Building scalable backend and cloud integrations with **Django, REST APIs, PostgreSQL, BigQuery, and Google Analytics APIs**.',
        ],
        focus: 'Machine Learning · GenAI · LLMs · Analytics · MLOps',
      },
      {
        title: 'Data Scientist Intern',
        date: 'May 2026 – July 2026',
        highlights: [
          'Developed **AI-powered Website Audit and GA4 analytics workflows** using Python, Django, OpenAI, and Google Analytics APIs.',
          'Built customer intelligence solutions using **RFM Analysis, K-Means, KNN, and customer segmentation**.',
          'Created production-ready datasets and **LLM-powered reporting workflows** for automated business insights and recommendations.',
        ],
        focus: 'Data Science · Customer Analytics · GenAI · LLMs · Data Engineering',
      },
    ],
  },
  {
    company: 'Suzlon Energy Limited',
    location: 'Hengelo, Netherlands',
    duration: 'March 2025 – September 2025',
    logo: withBase('assets/logo/suzlon-logo.png'),
    roles: [
      {
        title: 'Machine Learning Engineer Intern',
        date: 'March 2025 – September 2025',
        highlights: [
          'Built **XGBoost and Physics-Informed Neural Network (PINN)** models to forecast wind turbine fatigue life with **73% accuracy**.',
          'Reduced model features from **15 to 8** using SHAP-based analysis and optimized training with Optuna.',
          'Built **Docker and GitHub Actions** workflows for automated model retraining, monitoring, and deployment.',
        ],
        focus: 'Predictive ML · PINNs · MLOps · Predictive Maintenance · Explainable AI',
      },
    ],
  },
]

export const education = [
  {
    school: 'EPITA University',
    duration: 'September 2023 – March 2025',
    logo: withBase('assets/logo/epita-logo.webp'),
    programs: [
      {
        title: 'M.Sc. Data Science and Analytics',
        date: 'September 2023 – March 2025',
        thesis:
          'Developed a Deep Learning model for heart stroke prediction, leveraging CNN to analyze heart images and medical data.',
      },
    ],
  },
  {
    school: 'University of Mumbai',
    duration: 'August 2018 – June 2022',
    logo: withBase('assets/logo/mumbai-logo.png'),
    programs: [
      {
        title: 'B.E. Information Technology',
        date: 'August 2018 – June 2022',
        thesis:
          "Innovated a detection system for fake social media profiles using Twitter's database, leveraging Python and Machine Learning models.",
      },
    ],
  },
]
