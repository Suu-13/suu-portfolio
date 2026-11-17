/* ============================================================
   EDIT YOUR INFORMATION HERE. This is the only file you need
   to change for text. Keep the quotes "" and commas , in place.
   ============================================================ */
const SITE = {
  name: "Suu Wutt Yee Hnin",
  initials: "SW",
  roles: ["Data Analyst", "HND Computing student", "Data Science explorer", "AI and ML learner"],  // typed after "I'm a" on the home page
  headline: "Hi, I'm Suu Wutt Yee Hnin.",
  tagline: "Analysis · Research · Statistical Modelling · AI/ML",   // short line of strengths under the role
  available: "Open to opportunities and collaboration",        // green pill at the top of the home page ("" hides it)
  intro: "I'm a Data Analyst at Ace of Data and an HND Computing student at KMD College. I passionate about turning messy data into clear answers using statistics, machine learning and forecasting, and I love research in agriculture, finance and healthcare.",
  photo: "images/Suu_ProPic.PNG", // keep the capital letters exactly as the real file name (leave "" to show your initials)
  email: "suuwuttyeehnin@gmail.com",
  resume: "",                     // e.g. "documents/resume.pdf" (leave "" to hide the button)
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/suu-wutt-yee-hnin-972a9837b", handle: "suu-wutt-yee-hnin", note: "Let's connect and talk about data and AI." },
    { label: "GitHub",   url: "https://github.com/Suu-13", handle: "Suu-13", note: "Browse my code and project work." }
  ],

  skills: ["Data Analysis", "ETL", "Statistical Modeling", "Machine Learning", "Time-Series Forecasting",
           "AI/ML Research", "Systems Analysis", "Networking", "Databases"],

  /* ---------- ABOUT PAGE ---------- */
  summary: {
    who: "I'm Suu Wutt Yee Hnin, a computing student from Yangon, Myanmar. I'm studying for a Bachelor of Information Technology at Technology University (Thanlyin) and a Higher National Diploma in Computing at KMD College.",
    doing: "Right now I'm a Data Analyst at Ace of Data, where I explore research datasets, review academic papers and help with agricultural research across Myanmar and other Asian countries. I'm also building a gold price forecasting model.",
    can: "I passionate about turning messy data into clear answers: I clean and model it, find patterns with statistics and machine learning, and show the results in charts and reports. I can also explain tricky ideas in simple words, which I practised as an assistant lecturer for HND students."
  },

  interests: [
    { icon: "📈", title: "Financial markets & gold", note: "Following what moves gold prices, and why." },
    { icon: "🤖", title: "Machine learning & AI", note: "Teaching models to forecast and classify." },
    { icon: "🩺", title: "AI in healthcare", note: "Trustworthy AI and student mental health." },
    { icon: "🔋", title: "EV batteries & circular economy", note: "Recycling, policy and sustainability." },
    { icon: "🌾", title: "Agricultural research", note: "Farming, soil and markets across Asia." },
    { icon: "📚", title: "Reading research papers", note: "Linking academic ideas to real cases." },
    { icon: "🌐", title: "Web development", note: "Building things people can open and use." },
    { icon: "🎓", title: "Teaching & mentoring", note: "Making hard ideas feel simple." }
  ],

  techSkills: [
    { icon: "📊", group: "Data analysis", skills: ["Exploratory data analysis", "Data cleaning", "Descriptive statistics", "Outlier detection", "Spearman correlation", "Data visualization"] },
    { icon: "🔮", group: "Modelling & AI", skills: ["Time-series forecasting", "Machine learning", "Feature engineering", "Model evaluation", "Data modeling", "Statistical modeling"] },
    { icon: "🛠️", group: "Programming & systems", skills: ["Python", "SQL", "C#", "Web development", "Databases", "ETL", "Systems analysis", "Networking"] },
    { icon: "🔬", group: "Research", skills: ["Literature review", "Research paper analysis", "Research presentations", "Report writing"] }
  ],

  softSkills: [
    { icon: "🤝", title: "Teamwork", proof: "Worked on collaborative data projects and with the AOD research team." },
    { icon: "🎤", title: "Presenting", proof: "Led an EV battery recycling webinar as main presenter and gave several research presentations." },
    { icon: "🧑‍🏫", title: "Explaining & mentoring", proof: "Guided HND students as an assistant lecturer, turning hard topics into simple steps." },
    { icon: "🔍", title: "Critical thinking", proof: "Compared methods and findings across international research papers." },
    { icon: "📝", title: "Clear reporting", proof: "Turned statistical findings into reports with practical recommendations." },
    { icon: "🌱", title: "Self-driven learning", proof: "Earned an IBM data analytics certificate alongside my degree studies." }
  ],

  /* ---------- EXPERIENCE: copy a { ... }, block to add a job.
     points = bold label + description. location is shown under the organization ---------- */
  experience: [
    {
      role: "Data Analyst",
      org: "Ace of Data (AOD)",
      location: "Remote",
      dates: "May 2026 - Present",
      points: [
        { label: "Data Analysis & EDA", text: "Exploring research datasets with descriptive statistics, careful data inspection and visual analysis to see what the numbers are really saying." },
        { label: "Statistical Research", text: "Using statistical methods and quantitative thinking to test the patterns, relationships and trends behind each research question." },
        { label: "Agricultural Research", text: "Supporting an ongoing study of farming practices, soil health, farm inputs, productivity and market conditions in Myanmar and other Asian countries." },
        { label: "Research Paper Reviews", text: "Reading international academic papers, comparing their methods and findings, and linking their ideas to real cases and data." },
        { label: "Research Communication", text: "Working with fellow AOD members on research presentations, webinars and knowledge-sharing sessions." }
      ]
    },
    {
      role: "Assistant Lecturer (HND)",
      org: "KMD College",
      location: "Yangon, Myanmar",
      dates: "June 2025 - April 2026",
      points: [
        { label: "Student Guidance", text: "Acted as a guide for HND students, answering their questions and helping them stay on track with their studies." },
        { label: "Learning Support", text: "Helped students understand their lessons by explaining difficult topics in simpler, everyday terms." },
        { label: "Assignment Support", text: "Supported students with their assignments, from understanding the brief to completing and refining their work." }
      ]
    }
  ],

  /* ---------- EDUCATION: copy a { ... }, block to add one. status = "In progress" or "Completed" ---------- */
  education: [
    {
      degree: "Bachelor of Information Technology (BEIT)",
      school: "Technology University (Thanlyin) (TTU)",
      dates: "2024 - 2029",
      status: "In progress",
      note: "A five-year bachelor's degree programme in information technology."
    },
    {
      degree: "Higher National Diploma (HND) in Computing",
      school: "KMD College",
      dates: "2025 - 2027",
      status: "In progress",
      note: "Computing studies covering programming, databases, data science and web development."
    },
    {
      degree: "IBM Data Analytics Certificate",
      school: "IBM SkillsBuild",
      dates: "2026",
      status: "Completed",
      note: "Professional certificate in data analytics."
    }
  ],

  /* ---------- RESEARCH: paper-reading experience. Copy a { ... }, block to add a card.
     meta  = type and date shown under the title
     papers = the papers you read, shown when the card is opened ---------- */
  research: [
    {
      icon: "📈",
      title: "Gold Price Drivers & Market Behaviour",
      meta: "Literature Review (August 2026)",
      desc: "Reviewed four papers on what moves gold prices: a response-surface study of six macro factors (dollar index, federal funds rate, CPI, exchange rate, oil and the S&P 500), a causality-in-quantiles test of economic policy uncertainty across eight countries, a wavelet analysis of dynamic correlations between gold, oil and stocks, and an explanation of why gold works as a safe haven in market stress.",
      tags: ["Macroeconomics", "Time Series Analysis", "Causality", "Machine Learning"],
      papers: [
        "Qian, Ralescu & Zhang (2019). The analysis of factors affecting global gold price. Resources Policy 64.",
        "Raza, Shah & Shahbaz (2018). Does economic policy uncertainty influence gold prices? A nonparametric causality-in-quantiles approach. Resources Policy.",
        "Baruník, Kočenda & Vácha (2015). Gold, Oil, and Stocks: Dynamic Correlations. CESifo Working Paper 5333.",
        "Baur & McDermott (2016). Why is gold a safe haven? Journal of Behavioral and Experimental Finance."
      ]
    },
    {
      icon: "🔋",
      title: "EV Battery Recycling Webinar: Technology, Economics & Logistics",
      meta: "Main presenter (September 2026)",
      desc: "Compared recycling routes for lithium-ion batteries (pyrometallurgy, hydrometallurgy, solvometallurgy and direct recycling) and the supply risks of critical metals. Followed how costs and logistics decide whether recycling pays.",
      tags: ["Lithium-ion Batteries", "Critical Metals", "Techno-economics", "Reverse Logistics", "Black Mass"],
      papers: [
        "Zhao & Kaur (2025). The future of recycling for critical metals: the example of EV batteries. Geosystems and Geoenvironment 4.",
        "Soldan Cattani et al. (2025). Economic and structural challenges of lithium-ion battery recycling in Europe: a stakeholder-based assessment. Waste Management 205.",
        "Slattery, Dunn & Kendall (2021). Transportation of electric vehicle lithium-ion batteries at end-of-life: a literature review. Resources, Conservation & Recycling 174.",
        "Zhang et al. (2025). Harmonizing global hazardous-waste classifications for lithium-ion battery black mass. Environmental Science & Technology 59."
      ]
    },
    {
      icon: "♻️",
      title: "Circular Economy & Policy for EV Batteries",
      meta: "Research presentation (September 2026)",
      desc: "Studied how policy and system design shape battery circularity: a material flow model of lithium and nickel for Finland's EV fleet, the tension between life extension and recycled-content targets, China's informal recycling problem and how coordinated extended producer responsibility could move most batteries into formal channels, a game-theory comparison of recycling models under carbon trading, and second-life batteries powering a remote off-grid community.",
      tags: ["Circular Economy", "Material Flow Analysis", "EPR Policy", "Game Theory", "Second-life Batteries"],
      papers: [
        "Slotte et al. (2025). Effect of life extension strategies on demand and recycling of EV batteries: material flow analysis of Li and Ni for the Finnish EV fleet by 2055. Resources, Conservation & Recycling 215.",
        "Wang et al. (2026). The urgency to regulate informal EV battery recycling in China. Engineering.",
        "Wang et al. (2026). Strategic extended producer responsibility can double China's formal electric vehicle battery recycling with improved sustainability. One Earth 9.",
        "Han, Li, Wei & Liu (2026). Reseller or join? Recycling model selection in the EV power battery closed-loop supply chain under carbon trading. Sustainable Operations and Computers 7.",
        "Nedjalkov et al. (2019). Blueprint and implementation of rural stand-alone power grids with second-life lithium ion vehicle traction battery systems. Materials."
      ]
    },
    {
      icon: "🩺",
      title: "AI in Healthcare & Mental Health",
      meta: "Research presentation (October 2026)",
      desc: "Read about trust in healthcare AI from three angles: a usability test of three AI symptom-checker apps (ADA, Mediktor and WebMD) that found gaps in explainability and error handling, the FUTURE-AI guideline of six principles (fairness, universality, traceability, usability, robustness, explainability), and a framework for ethical, trustworthy clinical AI. Added WHO global estimates of depression and anxiety as public-health background.",
      tags: ["Healthcare AI", "Explainable AI", "AI Ethics", "Usability", "Mental Health"],
      papers: [
        "Alduhailan, Alshamari & Wahsheh (2025). A comprehensive comparison and evaluation of AI-powered healthcare mobile applications' usability. Healthcare 13.",
        "Lekadir et al. (2025). FUTURE-AI: international consensus guideline for trustworthy and deployable artificial intelligence in healthcare. BMJ 388.",
        "Goktas & Grzybowski (2025). Shaping the future of healthcare: ethical clinical challenges and pathways to trustworthy AI.",
        "World Health Organization (2017). Depression and other common mental disorders: global health estimates."
      ]
    },
    {
      icon: "🧠",
      title: "AI, Optimization & Risk Modelling Methods",
      meta: "Research presentation (July 2026)",
      desc: "Looked at how machine learning and mathematical modelling are applied to real decisions: AI for underwriting, claims and fraud detection in US trucking insurance (mixed methods, 300 participants), and a water quality framework that predicts the index with ANFIS and classifies it with an attention-based bidirectional GRU tuned by quantum differential evolution, which beat six baseline classifiers.",
      tags: ["Machine Learning", "Deep Learning", "Optimization", "Risk Management", "Fuzzy Logic"],
      papers: [
        "Nuur et al. (2026). Transforming the future of finance and business management with AI: mathematical modeling, automation, risk management, and data-driven decision making. Scientific African 33.",
        "Abdel-Khalek et al. (2026). Quantum differential evolution-optimized deep learning for water quality prediction in smart cities. Alexandria Engineering Journal 143."
      ]
    }
  ],

  /* ---------- PROJECTS: every project has the same shape.
     status = "Completed" or "Ongoing". Leave link "" if there is none.
     sections = the blocks shown inside "Project details". Each block can have:
       text, bullets, chips, or soon (a dashed "coming soon" note) ---------- */
  projects: [
    {
      icon: "🧠",
      title: "Student Mental Health & Academic Pressure Analysis",
      year: "2025",
      status: "Completed",
      type: "Collaborative project",
      desc: "Investigated how academic pressure relates to student mental health by turning raw survey and academic data into analysis-ready datasets.",
      overview: "An independent data analysis project investigating the relationship between academic pressure and student mental health outcomes. The project focuses on transforming raw survey and academic data into structured, analysis-ready datasets to identify patterns, correlations, and factors influencing students' mental well-being.",
      tags: ["ETL", "Data Cleaning", "Data Modeling", "EDA", "Data Visualization"],
      link: "",
      sections: [
        { heading: "My Roles & Responsibilities", bullets: [
          "Performed data cleaning and standardization to handle missing values, inconsistencies, and outliers.",
          "Built data models to organize relationships between academic pressure indicators and mental health metrics.",
          "Conducted exploratory data analysis (EDA) to identify correlations, trends, and behavioral patterns.",
          "Developed data visualizations to communicate analytical findings effectively.",
          "Produced a final report translating statistical findings into practical recommendations."
        ] },
        { heading: "Methodology", chips: ["ETL", "Data Cleaning", "Data Modeling", "EDA", "Data Visualization"] },
        { heading: "Key Findings", bullets: [
          "Most students feel academic stress only \"sometimes\" (36 male and 28 female respondents), so it is common but occasional for the majority.",
          "Gender differs at the extremes: 21 male students reported constant stress (\"always\") and no female students did, while more female students (9) than male (6) reported stress \"often\".",
          "Exams are the biggest cause of academic stress (43%), followed by financial conditions (about a quarter of responses). Difficulty understanding subjects (9%) and other reasons (6%) follow, and the remaining causes are about 3% each.",
          "Most students who sleep 7 to 8 hours are stressed only sometimes, but a few still feel stress always or often, so sleep matters but is not the only factor.",
          "College students report the highest pressure (level 4 for both male and female), while university students sit mostly around level 3.",
          "Most stressed respondents are aged 15 to 18 (61 of 100), though students under 15 and over 27 also report stress.",
          "Recommendation: schools should offer stress management programmes and stronger academic support."
        ] },
        { heading: "Tools & Technology", chips: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis", "Correlation Analysis"] }
      ]
    },
    {
      icon: "📈",
      title: "Gold Price Forecasting Model",
      year: "2026",
      status: "Ongoing",
      type: "Collaborative project",
      desc: "An end-to-end forecasting project that uses statistical and machine learning models to predict gold price movements from historical market data.",
      overview: "An end-to-end quantitative forecasting project aimed at analyzing historical gold market data and predicting future gold price movements using statistical and machine learning techniques. The project explores financial time-series patterns and predictive modeling to support data-driven market analysis.",
      tags: ["Time-Series Forecasting", "Machine Learning", "Feature Engineering", "ETL", "Model Evaluation"],
      link: "",
      sections: [
        { heading: "What I Have Done", bullets: [
          "Performed data cleaning and standardization to address inconsistencies in financial time-series datasets.",
          "Conducted feature selection and feature engineering, incorporating technical indicators to strengthen model inputs."
        ] },
        { heading: "Key Activities To Do", bullets: [
          "Apply statistical and machine learning models to forecast gold price movements.",
          "Evaluate predictive performance using appropriate model evaluation techniques.",
          "Create visualizations comparing actual and predicted prices.",
          "Write up the results and findings."
        ] },
        { heading: "Methodology", chips: ["Time-Series Forecasting", "Machine Learning", "Feature Engineering", "ETL", "Model Evaluation"] },
        { heading: "Tools & Techniques", chips: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Technical Indicators", "Statistical Models"] }
      ]
    },
    {
      icon: "🎓",
      title: "College Major & Institution ROI Analysis",
      year: "2026",
      status: "Completed",
      type: "Collaborative project",
      desc: "Explored the financial return on a college education across majors, institution tiers and regions, using data from 30,000 graduates and 18 variables.",
      overview: "A collaborative exploratory data analysis project examining the financial return on investment (ROI) of college education across different academic major categories, institution tiers, and geographical regions. Using data from 30,000 college graduates and 18 variables, the project investigates how educational choices and institutional characteristics relate to graduates' financial outcomes.",
      tags: ["EDA", "Descriptive Statistics", "Outlier Detection", "Spearman Correlation", "Data Visualization"],
      link: "",
      sections: [
        { heading: "My Roles & Responsibilities", bullets: [
          "Explored and profiled a dataset of 30,000 graduates with 18 variables, and validated data integrity by checking the relationships between earnings, education costs, and net ROI.",
          "Assessed data quality using percentile truncation and IQR-based outlier detection, keeping legitimate extreme values.",
          "Ran descriptive and distribution analysis (mean, median, histograms, skewness).",
          "Compared Net ROI across seven major categories, institution tiers, student debt and regional costs using comparative analysis and heatmaps, and applied Spearman correlation to GPA and financial outcomes.",
          "Built the visualizations (histograms, pie, bar charts, heatmaps) and prepared the analytical report with findings, interpretations, and limitations."
        ] },
        { heading: "Methodology", chips: ["EDA", "Descriptive Statistics", "Outlier Detection", "Spearman Correlation", "Data Visualization"] },
        { heading: "Key Findings", bullets: [
          "Major matters most. STEM (avg net ROI $446,999), Health ($350,828) and Business ($346,099) earn the most, with 98% or more of graduates seeing a positive ROI.",
          "Arts and Humanities show negative average net ROI, and only about 11% of Arts graduates have a positive ROI.",
          "Net ROI falls with institution tier: Ivy Elite $380,610, Top Public $328,415, Mid-Tier $278,175, Regional $244,433 and For Profit $102,770.",
          "Ivy Elite graduates carry the highest debt (over $70k) but still lead on net ROI, and 38.47% of them reach the high-ROI group.",
          "Ivy Elite with STEM is the best combination (about $593,900), while For Profit schools with Arts or Humanities show negative ROI.",
          "Cost is not what separates majors: average net cost is within about 2% across all seven major categories ($87,935 to $89,832), so differences come from added earnings.",
          "Region has little effect (about a $17k gap within STEM), and cost depends on school tier rather than region.",
          "GPA has almost no link to ROI (Spearman correlation 0.02), so major choice matters more than grades.",
          "Limitations: the data shows patterns, not cause (for example, family background may explain part of the Ivy Elite advantage), and it covers only 10 years of earnings."
        ] },
        { heading: "Tools & Technology", chips: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "IQR Outlier Detection", "Spearman Correlation"] }
      ]
    },
    {
      icon: "🌾",
      title: "Agricultural Research & Data Analytics in Myanmar",
      year: "2026",
      dates: "August 2026 - Present",
      status: "Ongoing",
      type: "Research project",
      desc: "A cross-disciplinary study of how farming methods, soil conditions, inputs, crop yields and climate shape agriculture in selected Asian countries.",
      overview: "A cross-disciplinary study of how farming methods, soil conditions, inputs, crop yields and climate shape agriculture in Myanmar, compared with India, Vietnam and Thailand.",
      tags: ["Agricultural Data", "Soil Analysis", "Climate Data", "Python"],
      link: "",
      repoSoon: true,          // shows "GitHub repository: coming soon". Set link above when it is ready.
      sections: [
        { heading: "Key Activities", bullets: [
          "Reviewing literature on agriculture in Myanmar, India, Vietnam and Thailand.",
          "Extracting and analysing climate data.",
          "Collecting and analysing secondary agricultural data.",
          "Interviewing farmers and gathering first-hand data.",
          "Comparing findings across countries."
        ] },
        { heading: "Research Areas", bullets: [
          "Soil health and soil moisture levels.",
          "Rainfall patterns and climate variability.",
          "Crop varieties and the way they are grown.",
          "Use of fertilizers and pesticides.",
          "Crop productivity and market conditions."
        ] },
        { heading: "Methodology", text: "Literature review, collecting secondary data, analysing agricultural and climate data, comparing countries, and gathering primary data through farmer interviews." },
        { heading: "Tools & Techniques", chips: ["Python", "NASA POWER API", "Pandas", "NumPy", "Excel", "Statistical Analysis"] }
      ]
    }
  ]
};