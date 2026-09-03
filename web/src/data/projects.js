import { withBase } from '../utils'

export const projects = [
  {
    title: 'Car Price Prediction',
    description:
      'Developed a machine learning model to predict car prices based on various features such as mileage, brand, and engine type. The model was deployed using Flask and Streamlit.',
    image: withBase('assets/images/car-price.jpeg?v=3'),
    tags: ['Python', 'Machine Learning', 'Flask', 'Streamlit'],
    href: withBase('projects/car-project'),
  },
  {
    title: 'Olympic Games Data Analysis',
    description:
      'Analyzed historical Olympic data (1896–2022) to uncover insights into hosting patterns, medal distributions, and national performance using statistical analysis and interactive visualizations.',
    image: withBase('assets/images/olympic-data.jpeg?v=3'),
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
    href: withBase('projects/olympic-project'),
  },
  {
    title: 'AWS Healthcare Management',
    description:
      'Designed and deployed a scalable AWS cloud infrastructure for a data pipeline, utilizing S3, Lambda, Glue, and Redshift. Optimized for cost-efficiency and performance, reducing processing time by 40%.',
    image: withBase('assets/images/healthcare-management.jpeg?v=3'),
    tags: ['AWS Services', 'Python', 'Firewalls', 'S3'],
    href: withBase('projects/aws-project'),
  },
  {
    title: 'Heart Stroke Prediction',
    description:
      'Developed a deep learning model using CNN to predict heart strokes based on medical data. The model was trained using TensorFlow and Keras.',
    image: withBase('assets/images/heart-stroke.jpeg?v=3'),
    tags: ['Python', 'Deep Learning', 'TensorFlow', 'Keras'],
    href: withBase('projects/heart-stroke-project'),
  },
  {
    title: 'House Price Prediction',
    description:
      'Built a predictive model for housing market prices using machine learning, focusing on feature engineering and model evaluation for accurate real-estate estimates.',
    image: withBase('assets/images/house-price.jpeg?v=3'),
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    href: withBase('projects/house-price-project'),
  },
  {
    title: 'Job Characteristics on Salaries in the Data Industry',
    description:
      'Analyzed the impact of job characteristics on salaries in the data industry using Power BI. Created interactive dashboards to visualize key metrics like average salary by country, job title, and experience level.',
    image: withBase('assets/images/job-salaries.jpeg?v=3'),
    tags: ['Power BI', 'Data Analysis', 'Dashboard', 'Python'],
    href: withBase('projects/job-salaries-project'),
  },
]
