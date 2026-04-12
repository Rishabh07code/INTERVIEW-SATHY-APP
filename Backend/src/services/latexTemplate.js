module.exports = `
%-------------------------
% Resume in LaTeX
% Author : Rishabh Kumar
% Optimized for: ASSA ABLOY - Associate Software Engineer
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}
\\input{glyphtounicode}

% Hyperref with blue links
\\usepackage[colorlinks=true, linkcolor=blue, urlcolor=blue, citecolor=blue]{hyperref}

\\usepackage{fancyhdr}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Fix for footer warning
\\setlength{\\footskip}{10pt}

% Adjust margins - Carefully balanced for 1 page
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.95in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-10pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-7pt}]

\\pdfgentounicode=1

% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-5pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{1.0\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & \\textbf{\\small #2}\\\\
    \\end{tabular*}\\vspace{-6pt}
}

\\newcommand{\\resumeItemListStart}{\\begin{itemize}[label=\\raisebox{0.4ex}{\\tiny$\\bullet$}, leftmargin=*]}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-12pt}}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}\\vspace{-3pt}}

\\begin{document}

%----------HEADING----------
\\begin{center}
    {\\Huge \\scshape Rishabh Kumar} \\\\ \\vspace{4pt}
    \\small 
    \\raisebox{-0.1\\height}\\faPhone\\ +91 95089 71070 ~ 
    \\raisebox{-0.2\\height}\\faGithub\\ \\href{https://github.com/Rishabh07code}{github.in} ~ 
    \\raisebox{-0.2\\height}\\faEnvelope\\ \\href{mailto:rishabhkumar.dev07@gmail.com}{rishabhkumar.dev07@gmail.com} ~ 
    \\raisebox{-0.2\\height}\\faLinkedin\\ \\href{https://www.linkedin.com/in/rishabh-kumar-5b109a301}{LinkedIn} ~ 
    \\raisebox{-0.1\\height}\\faMapMarker\\ Haldia, West Bengal, India 721657
    \\vspace{-10pt} 
\\end{center}

%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Haldia Institute Of Technology}{2022 -- 2026}
      {B.Tech. - Electronics \\& Communication Engineering; CGPA: 7.39/10}{Haldia, West Bengal}
    \\resumeSubheading
      {DAV Public School Urimari}{2021}
      {12th CBSE; Percentage: 86.40\\%}{Hazaribagh, Jharkhand}
    \\resumeSubheading
      {DAV Public School Urimari}{2019}
      {10th CBSE; Percentage: 84.80\\%}{Hazaribagh, Jharkhand}
  \\resumeSubHeadingListEnd

%-----------INTERNSHIPS-----------
\\section{Internships}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Capsitech IT Services Private Limited}{July 2025 -- Aug 2025}
      {Full Stack Developer Intern}{Jodhpur, Rajasthan}
      \\resumeItemListStart
        \\resumeItem{Assisted in solution design and implementation by translating requirements into UI flows, API contracts, and database schema updates for a billing module.}
        \\resumeItem{Implemented and integrated \\textbf{RESTful APIs} (Node.js/Express.js) with validations and error handling; used \\textbf{Postman} for testing/debugging and collaborated via peer reviews and daily updates.}
        \\resumeItem{Worked with \\textbf{MySQL} for CRUD operations, joins, and data queries to support feature delivery and basic documentation/handover.}
      \\resumeItemListEnd

      \\vspace{4pt}

    \\resumeSubheading
      {Deloitte Australia -- Cyber Job Simulation}{Forage}
      {Cyber Security Training}{Remote}
      \\resumeItemListStart
        \\resumeItem{Applied log analysis to identify suspicious user behavior and understand patterns in web activity during a cybersecurity simulation.}
        \\resumeItem{Gained exposure to incident response by supporting a simulated breach and applying structured problem-solving to real-world scenarios.}
      \\resumeItemListEnd

      \\vspace{4pt}

    \\resumeSubheading
      {GenAI Powered Data Analytics Job Simulation -- TATA}{Forage}
      {Data Analytics Training}{Remote}
      \\resumeItemListStart
        \\resumeItem{Applied EDA and GenAI tools to analyze data, identify risk patterns, and design a basic predictive approach for customer risk assessment.}
        \\resumeItem{Gained exposure to AI-driven strategy using agentic workflows, understanding predictive modeling, automation, and ethical decision-making concepts.}
      \\resumeItemListEnd
  \\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
      
      \\resumeProjectHeading
      {\\textbf{Recruitment Management Platform} $|$ \\emph{REST APIs, OAuth, Dashboards, Secure Coding} $|$ \\href{https://gdghit.site/}{\\textbf{Link}}}{2025}
      \\resumeItemListStart
        \\resumeItem{Built a recruitment management platform with OAuth-based authentication and REST APIs following secure coding practices.}
        \\resumeItem{Gained exposure to CI/CD deployment workflows and cloud-based environments while adhering to code review guidelines.}
      \\resumeItemListEnd

      \\vspace{4pt}

      \\resumeProjectHeading
      {\\textbf{Portfolio Website} $|$ \\emph{ReactJS, JavaScript, Framer Motion, Lenis, Vercel} $|$ \\href{https://rishabh-portfolio-gilt.vercel.app/}{\\textbf{Live}}}{2025}
      \\resumeItemListStart
        \\resumeItem{Built a responsive portfolio to showcase projects and experience; implemented reusable React components and a clean information architecture.}
        \\resumeItem{Enhanced UX with Framer Motion animations and Lenis smooth scrolling; tested accessibility and cross-browser compatibility for consistent performance.}
      \\end{itemize}\\vspace{-12pt}

    \\resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Programming:} C++, Python, JavaScript, TypeScript, C\\#/.NET (familiar). \\\\
     \\textbf{Frontend/Backend:} ReactJS; Node.js/Express.js; Angular (basic); HTML5, CSS3; RESTful APIs; JWT/OAuth. \\\\
     \\textbf{Database:} SQL, Oracle (basic). \\\\
     \\textbf{Data Management \\& Analytics:} Excel; Pandas, NumPy; KNIME (basic); Reporting/Dashboards (basic). \\\\
     \\textbf{Cloud \\& Automation:} AWS (basic); GCP (Cloud Run); Docker; CI/CD; Git; Postman. \\\\
     \\textbf{Core Skills:} Analytical \\& Problem Solving; Communication (English); Excel; PowerPoint; Self-disciplined \\& self-motivated; Innovation; Relationship building; Independent work with minimal supervision.
    }}
 \\end{itemize}

%-----------POSITIONS OF RESPONSIBILITY-----------
\\section{Positions of Responsibility}
\\begin{itemize}[label=\\raisebox{0.4ex}{\\tiny$\\bullet$}, leftmargin=*, itemsep=-1pt]
  \\resumeItem{Led and scaled the \\textbf{GDG On Campus} community with support from Google’s GenAI initiatives, mentoring \\textbf{300+ students} through GenAI programs and \\textbf{Google Arcade 2025}.}
  \\resumeItem{Organized campus technical events through external sponsorships and co-conducted \\textbf{DevFest Ranchi} to drive community growth and certifications.}
\\resumeItemListEnd

%-----------ACHIEVEMENTS \\& CERTIFICATIONS-----------
\\vspace{2pt}
\\section{Achievements \\& Certifications}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Achievements}: Selected globally in \\textbf{Google Solution Challenge Hackathon 2025 (Top 105)}. \\\\
     \\textbf{Certifications}: \\textbf{Python Coder Certification (Google/Kaggle)}; \\textbf{Postman API Student Expert}; \\textbf{OCI 2025 Associate}; \\textbf{Deloitte Cyber Simulation}; \\textbf{Tata GenAI Data Analytics Simulation}.
    }}
 \\end{itemize}

\\end{document}
`;
