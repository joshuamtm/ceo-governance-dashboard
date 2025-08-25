# CEO IT Governance Dashboard

A comprehensive web-based dashboard for CEO IT governance meetings that tracks priority decisions, provides AI policy documentation, and includes meeting facilitation tools.

## Overview

This dashboard addresses decision paralysis in IT governance by providing:
- Priority decision tracking with clear accountability
- Complete AI policy documentation ready for approval
- Executive-ready communication materials
- Training program specifications
- Diplomatic meeting facilitation tools

## Features

### 1. Priority Dashboard
- Real-time decision tracking table
- Risk context display showing organizational impact
- Color-coded priority levels and status indicators
- Key quotes from leadership meetings

### 2. AI Policy Documentation
- Complete revised AI Acceptable Use Policy
- Implementation timeline with clear milestones
- Training requirements and compliance framework
- Downloadable policy document

### 3. Leadership Brief
- Executive summary and business case
- Current state challenges analysis
- Business benefits and ROI
- Resource requirements breakdown
- Downloadable executive brief

### 4. Training Program
- Four-module comprehensive training outline
- Assessment framework and success metrics
- Implementation plan with timeline
- Downloadable training program specification

### 5. Meeting Facilitation Tools
- Diplomatic talking points for decision momentum
- Response strategies for common objections
- Commitment framework for accountability
- Meeting scripts for effective facilitation

## Repository

**GitHub:** https://github.com/joshuamtm/ceo-governance-dashboard  
**Live Site:** https://ceo-governance-dashboard-1756129302.netlify.app

## Quick Start

### Local Development
1. Clone the repository: `git clone https://github.com/joshuamtm/ceo-governance-dashboard.git`
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JS

### Deployment to Netlify
- **Automatic:** Connected to GitHub - pushes to `main` branch auto-deploy
- **Manual:** Run `npx netlify-cli deploy --prod --dir=.`
- **Configuration:** Settings in `netlify.toml`

## File Structure

```
ceo-governance-dashboard/
├── index.html              # Main application
├── assets/
│   ├── css/
│   │   ├── main.css       # Primary styles
│   │   └── print.css      # Print optimization
│   ├── js/
│   │   ├── main.js        # Core functionality
│   │   └── data.js        # Dashboard data
│   └── downloads/         # Downloadable documents
├── netlify.toml           # Deployment configuration
└── README.md              # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Features

### Responsive Design
- Desktop-optimized with mobile compatibility
- Print-friendly CSS for physical handouts
- Accessible navigation and content

### Data Management
- All data stored in `assets/js/data.js`
- Easy updates without database dependencies
- Version control through Git

### Security
- No backend or database requirements
- Static site with security headers via Netlify
- No sensitive data storage

## Updating Content

### Priority Items
Edit the `priorityItems` array in `assets/js/data.js`:
```javascript
priorityItems: [
    {
        priority: 1,
        item: "Item Name",
        currentStatus: "Current status description",
        statusType: "stuck|in-progress|complete",
        decision: "Decision needed",
        owner: "Owner names",
        targetDate: "Date",
        successMetric: "Success criteria"
    }
]
```

### Adding Documents
1. Place markdown files in `downloads/` directory
2. Update download links in `main.js`
3. Deploy changes

## Performance

- Initial load: <2 seconds
- No external dependencies
- Optimized assets with caching headers
- Minimal JavaScript for maximum compatibility

## Maintenance

### Regular Updates
- Update priority items after each governance meeting
- Refresh quotes and context as needed
- Review and update policy content quarterly

### Monitoring
- Check Netlify analytics for usage patterns
- Monitor browser console for any errors
- Test print functionality regularly

## Support

For questions or issues:
- Primary User: Joshua Peskay, vCISO
- Technical Support: Internal IT team

## License

Internal use only - Center for Employment Opportunities

## Version History

- v1.0 (August 25, 2025) - Initial release with core dashboard functionality