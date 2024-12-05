function Portfolio() {
    return (
        <section>
            <div className="text-header">
                <h2>Some things I&apos;ve done:</h2>
                <div/>
            </div>
            <div className="portfolio-container">
                <a href="https://github.com/Tomjp424/employee-tracker" className="portfolio-link">
                    <img src="/assets/employee-tracker.PNG" alt="a link to my employee tracker program" className="portfolio-image"/>
                    <span className="portfolio-link-text">Employee Tracker</span>
                </a>
                <a href="https://github.com/Tomjp424/pet-finder-quiz" className="portfolio-link">
                    <img src="/assets/pet-finder-quiz.PNG" alt="a link to my pet finder quiz site" className="portfolio-image"/>
                    <span className="portfolio-link-text">Pet Finder Quiz</span>
                </a>
                <a href="https://github.com/Tomjp424/readme-generator" className="portfolio-link">
                    <img src="/assets/readme-generator.PNG" alt="a link to my README generator program" className="portfolio-image"/>
                    <span className="portfolio-link-text">Readme Generator</span>
                </a>
                <a href="https://github.com/Tomjp424/marketing-blog" className="portfolio-link">
                    <img src="/assets/marketing-blog.PNG" alt="a link to my marketing blog" className="portfolio-image"/>
                    <span className="portfolio-link-text">Marketing Blog</span>
                </a>
                <a href="https://github.com/Tomjp424/portfolio" className="portfolio-link">
                    <img src="/assets/old-portfolio.PNG" alt="a link to an old version of my portfolio" className="portfolio-image"/>
                    <span className="portfolio-link-text">Old Portfolio</span>
                </a>
                <a href="https://github.com/Tomjp424/typescript-vehicle-builder" className="portfolio-link">
                    <img src="/assets/vehicle-builder.PNG" alt="a link to my vehicle builder program" className="portfolio-image"/>
                    <span className="portfolio-link-text">Vehicle Builder</span>
                </a>
            </div>
        </section>
    )
}
export default Portfolio;