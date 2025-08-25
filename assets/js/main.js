// CEO IT Governance Dashboard - Main Application

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
    renderInitialContent();
    updateLastUpdated();
});

// Initialize dashboard
function initializeDashboard() {
    // Set initial active section
    showSection('dashboard');
    
    // Check for hash navigation
    if (window.location.hash) {
        const section = window.location.hash.substring(1);
        const validSections = ['dashboard', 'policy', 'brief', 'training', 'framework', 'tools'];
        if (validSections.includes(section)) {
            showSection(section);
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            showSection(event.state.section, false);
        }
    });
}

// Show specific section
function showSection(sectionId, updateHistory = true) {
    // Handle legacy 'tools' section ID
    if (sectionId === 'tools') {
        sectionId = 'framework';
    }
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-section') === sectionId) {
            button.classList.add('active');
        }
    });

    // Update browser history
    if (updateHistory) {
        history.pushState(
            { section: sectionId },
            '',
            `#${sectionId}`
        );
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Render initial content
function renderInitialContent() {
    renderPriorityTable();
    renderKeyQuotes();
    renderRiskContext();
    renderDecisionPatterns();
    renderPolicyContent();
    renderBriefContent();
    renderTrainingContent();
    renderDecisionFramework();
}

// Render priority table
function renderPriorityTable() {
    const container = document.getElementById('priorityTable');
    if (!container || !dashboardData.priorityItems) return;

    let html = `
        <table class="priority-table">
            <thead>
                <tr>
                    <th>Priority</th>
                    <th>Item</th>
                    <th>Current Status</th>
                    <th>Decision Needed</th>
                    <th>Owner</th>
                    <th>Target Date</th>
                    <th>Success Metric</th>
                </tr>
            </thead>
            <tbody>
    `;

    dashboardData.priorityItems.forEach(item => {
        const priorityClass = item.priority === 1 ? '' : 'medium';
        const dateClass = isDateUrgent(item.targetDate) ? 'urgent' : '';
        
        html += `
            <tr>
                <td><span class="priority-badge ${priorityClass}">${item.priority}</span></td>
                <td><strong>${item.item}</strong></td>
                <td>
                    <span class="status-indicator ${item.statusType}">${item.statusType.toUpperCase()}</span>
                    <div style="margin-top: 5px; font-size: 13px; color: var(--gray-medium);">
                        "${item.currentStatus}"
                    </div>
                </td>
                <td>${item.decision}</td>
                <td><span class="owner-tag">${item.owner}</span></td>
                <td><span class="date-tag ${dateClass}">${item.targetDate}</span></td>
                <td>${item.successMetric}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    container.innerHTML = html;
}

// Render key quotes
function renderKeyQuotes() {
    const container = document.getElementById('keyQuotes');
    if (!container || !dashboardData.keyQuotes) return;

    let html = '';
    dashboardData.keyQuotes.forEach(quote => {
        html += `
            <div class="quote-item">
                <div class="quote-text">"${quote.text}"</div>
                <div class="quote-attribution">— ${quote.attribution}</div>
                <div class="quote-context">${quote.context}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render risk context
function renderRiskContext() {
    const container = document.getElementById('riskContext');
    if (!container || !dashboardData.riskContext) return;

    let html = '';
    Object.values(dashboardData.riskContext).forEach(risk => {
        html += `
            <div class="risk-item">
                <span class="risk-rank">#${risk.rank}</span>
                <div style="flex: 1;">
                    <div class="risk-description">${risk.description}</div>
                    <div style="font-size: 13px; color: var(--gray-medium); margin-top: 4px;">
                        ${risk.impact}
                    </div>
                </div>
                <div style="text-align: right;">
                    <div class="risk-score">${risk.score}</div>
                    <div class="risk-mitigation">${risk.mitigation} mitigated</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render decision patterns
function renderDecisionPatterns() {
    const container = document.getElementById('patterns');
    if (!container || !dashboardData.decisionPatterns) return;

    let html = '';
    dashboardData.decisionPatterns.forEach(pattern => {
        html += `
            <div class="pattern-item">
                <div class="pattern-title">${pattern.title}</div>
                <div class="pattern-description">${pattern.description}</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Render policy content
function renderPolicyContent() {
    // Overview
    const overviewContainer = document.getElementById('policyOverview');
    if (overviewContainer && dashboardData.policyContent) {
        let html = `
            <div class="content-section">
                <h4>${dashboardData.policyContent.overview.title}</h4>
                <p>${dashboardData.policyContent.overview.content}</p>
                <p><strong>Effective Date:</strong> ${dashboardData.policyContent.overview.effectiveDate}</p>
                <p><strong>Replaces:</strong> ${dashboardData.policyContent.overview.replaces}</p>
            </div>
            <div class="content-section">
                <h4>Approved Tools</h4>
                <ul>
        `;
        
        dashboardData.policyContent.approvedTools.primary.forEach(tool => {
            html += `<li><strong>${tool.name}:</strong> ${tool.description}</li>`;
        });
        
        html += `
                </ul>
                <p style="margin-top: 10px; padding: 10px; background: var(--light-blue); border-radius: 4px;">
                    <strong>Transition Note:</strong> ${dashboardData.policyContent.approvedTools.transition}
                </p>
            </div>
            <div style="margin-top: 20px;">
                <a href="https://drive.google.com/file/d/1sq5CugEfIA5GF8MmtefVtj14nWPWV_-q/view?usp=sharing" target="_blank" class="download-btn">
                    📄 View Full Policy Document (PDF)
                </a>
            </div>
        `;
        
        overviewContainer.innerHTML = html;
    }

    // Implementation
    const implementationContainer = document.getElementById('policyImplementation');
    if (implementationContainer && dashboardData.policyContent) {
        let html = `
            <div class="content-section">
                <h4>Data Guidelines</h4>
                <div style="margin-bottom: 15px;">
                    <h5 style="color: var(--status-success);">✓ Permitted Data</h5>
                    <ul>
        `;
        
        dashboardData.policyContent.dataGuidelines.permitted.forEach(item => {
            html += `<li>${item}</li>`;
        });
        
        html += `
                    </ul>
                </div>
                <div>
                    <h5 style="color: var(--status-urgent);">✗ Restricted Data</h5>
                    <ul>
        `;
        
        dashboardData.policyContent.dataGuidelines.restricted.forEach(item => {
            html += `<li>${item}</li>`;
        });
        
        html += `
                    </ul>
                </div>
                <p style="margin-top: 15px; padding: 10px; background: var(--status-warning); border-radius: 4px;">
                    <strong>⚠️ Important:</strong> ${dashboardData.policyContent.dataGuidelines.important}
                </p>
            </div>
        `;
        
        implementationContainer.innerHTML = html;
    }

    // Compliance
    const complianceContainer = document.getElementById('policyCompliance');
    if (complianceContainer && dashboardData.policyContent) {
        let html = `
            <div class="content-section">
                <h4>Implementation Timeline</h4>
        `;
        
        dashboardData.policyContent.implementation.phases.forEach(phase => {
            html += `
                <div class="module-card">
                    <div class="module-title">${phase.phase}</div>
                    <div class="module-duration">${phase.dates}</div>
                    <div class="module-objectives">${phase.activities}</div>
                </div>
            `;
        });
        
        html += `</div>`;
        complianceContainer.innerHTML = html;
    }
}

// Render brief content
function renderBriefContent() {
    // Executive Summary
    const summaryContainer = document.getElementById('execSummary');
    if (summaryContainer && dashboardData.briefContent) {
        summaryContainer.innerHTML = `
            <div class="content-section">
                <p>${dashboardData.briefContent.executiveSummary}</p>
                <div style="margin-top: 20px;">
                    <a href="https://drive.google.com/file/d/1W2IFguXt7ljw4olwwWwS_pbiTAGhCPOm/view?usp=drive_link" target="_blank" class="download-btn">
                        📊 View Executive Brief (PDF)
                    </a>
                </div>
            </div>
        `;
    }

    // Current Challenges
    const challengesContainer = document.getElementById('currentChallenges');
    if (challengesContainer && dashboardData.briefContent) {
        let html = '<div class="content-section">';
        dashboardData.briefContent.currentChallenges.forEach(challenge => {
            html += `
                <div class="pattern-item">
                    <div class="pattern-title">${challenge.title}</div>
                    <div class="pattern-description">${challenge.description}</div>
                </div>
            `;
        });
        html += '</div>';
        challengesContainer.innerHTML = html;
    }

    // Business Benefits
    const benefitsContainer = document.getElementById('businessBenefits');
    if (benefitsContainer && dashboardData.briefContent) {
        let html = '<div class="content-section">';
        dashboardData.briefContent.businessBenefits.forEach(category => {
            html += `
                <h4>${category.category}</h4>
                <ul>
            `;
            category.benefits.forEach(benefit => {
                html += `<li>${benefit}</li>`;
            });
            html += '</ul>';
        });
        html += '</div>';
        benefitsContainer.innerHTML = html;
    }

    // Resource Requirements
    const resourcesContainer = document.getElementById('resourceRequirements');
    if (resourcesContainer && dashboardData.briefContent) {
        const req = dashboardData.briefContent.resourceRequirements;
        resourcesContainer.innerHTML = `
            <div class="content-section">
                <div class="risk-item">
                    <span style="font-weight: 600;">Budget Impact</span>
                    <span>${req.budget}</span>
                </div>
                <div class="risk-item">
                    <span style="font-weight: 600;">Staff Requirements</span>
                    <span>${req.staffing}</span>
                </div>
                <div class="risk-item">
                    <span style="font-weight: 600;">Technology</span>
                    <span>${req.technology}</span>
                </div>
                <div class="risk-item">
                    <span style="font-weight: 600;">Timeline</span>
                    <span>${req.timeline}</span>
                </div>
            </div>
        `;
    }
}

// Render training content
function renderTrainingContent() {
    // Modules
    const modulesContainer = document.getElementById('trainingModules');
    if (modulesContainer && dashboardData.trainingContent) {
        let html = '<div class="content-section">';
        dashboardData.trainingContent.modules.forEach(module => {
            html += `
                <div class="module-card">
                    <div class="module-title">${module.title}</div>
                    <div class="module-duration">${module.duration}</div>
                    <div class="module-objectives">
                        <strong>Objectives:</strong>
                        <ul style="margin-top: 5px;">
            `;
            module.objectives.forEach(obj => {
                html += `<li>${obj}</li>`;
            });
            html += `
                        </ul>
                        <p style="margin-top: 10px;"><strong>Activities:</strong> ${module.activities}</p>
                    </div>
                </div>
            `;
        });
        html += `
            <div style="margin-top: 20px;">
                <a href="https://drive.google.com/file/d/1VTKQRSOwNh27mKMqrU4cRM1HnCv7EgkP/view?usp=drive_link" target="_blank" class="download-btn">
                    🎓 View Training Program Outline (PDF)
                </a>
            </div>
        </div>`;
        modulesContainer.innerHTML = html;
    }

    // Assessment
    const assessmentContainer = document.getElementById('assessmentFramework');
    if (assessmentContainer && dashboardData.trainingContent) {
        const assessment = dashboardData.trainingContent.assessment;
        assessmentContainer.innerHTML = `
            <div class="content-section">
                <p><strong>Format:</strong> ${assessment.format}</p>
                <p><strong>Passing Score:</strong> ${assessment.passingScore}</p>
                <p><strong>Retakes:</strong> ${assessment.retakes}</p>
                <p><strong>Completion:</strong> ${assessment.completion}</p>
            </div>
        `;
    }

    // Implementation
    const implContainer = document.getElementById('trainingImplementation');
    if (implContainer && dashboardData.trainingContent) {
        const overview = dashboardData.trainingContent.overview;
        implContainer.innerHTML = `
            <div class="content-section">
                <p><strong>Purpose:</strong> ${overview.purpose}</p>
                <p><strong>Duration:</strong> ${overview.duration}</p>
                <p><strong>Assessment:</strong> ${overview.assessment}</p>
                <p><strong>Platform:</strong> ${overview.platform}</p>
            </div>
        `;
    }

    // Metrics
    const metricsContainer = document.getElementById('trainingMetrics');
    if (metricsContainer && dashboardData.trainingContent) {
        const metrics = dashboardData.trainingContent.metrics;
        metricsContainer.innerHTML = `
            <div class="content-section">
                <div class="risk-item">
                    <span>Completion Target</span>
                    <span>${metrics.completion}</span>
                </div>
                <div class="risk-item">
                    <span>Satisfaction Target</span>
                    <span>${metrics.satisfaction}</span>
                </div>
                <div class="risk-item">
                    <span>Compliance Target</span>
                    <span>${metrics.compliance}</span>
                </div>
                <div class="risk-item">
                    <span>Adoption Target</span>
                    <span>${metrics.adoption}</span>
                </div>
            </div>
        `;
    }
}

// Render decision framework
function renderDecisionFramework() {
    // Decision Criteria
    const criteriaContainer = document.getElementById('decisionCriteria');
    if (criteriaContainer && dashboardData.decisionFramework) {
        let html = '<div class="content-section">';
        dashboardData.decisionFramework.decisionCriteria.forEach(item => {
            html += `
                <div class="pattern-item">
                    <div class="pattern-title">${item.criterion}</div>
                    <div class="pattern-description">${item.description}</div>
                    <div style="margin-top: 8px; font-size: 13px; color: var(--gray-medium);">
                        <strong>Evaluation:</strong> ${item.evaluation}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        criteriaContainer.innerHTML = html;
    }

    // Accountability Template
    const accountabilityContainer = document.getElementById('accountabilityTemplate');
    if (accountabilityContainer && dashboardData.decisionFramework) {
        const template = dashboardData.decisionFramework.accountabilityTemplate;
        let html = `
            <div class="content-section">
                <h4>${template.format}</h4>
                <div style="margin-bottom: 20px;">
        `;
        
        template.components.forEach(component => {
            html += `
                <div class="risk-item">
                    <div style="flex: 1;">
                        <strong>${component.role}:</strong> ${component.definition}
                        <div style="font-size: 13px; color: var(--gray-medium); margin-top: 4px;">
                            Example: ${component.example}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
                <h4>Tracking Requirements</h4>
                <ol>
        `;
        template.tracking.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ol></div>';
        accountabilityContainer.innerHTML = html;
    }

    // Success Metrics
    const metricsContainer = document.getElementById('successMetrics');
    if (metricsContainer && dashboardData.decisionFramework) {
        const metrics = dashboardData.decisionFramework.successMetrics;
        let html = `
            <div class="content-section">
                <h4>Governance Metrics</h4>
        `;
        
        metrics.governance.forEach(metric => {
            html += `
                <div class="risk-item">
                    <div style="flex: 1;">
                        <strong>${metric.metric}</strong>
                        <div style="font-size: 13px; margin-top: 4px;">
                            <span style="color: var(--status-success);">Target:</span> ${metric.target}<br>
                            <span style="color: var(--gray-medium);">Current:</span> ${metric.current}
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += `
                <h4 style="margin-top: 20px;">Meeting Effectiveness</h4>
        `;
        
        metrics.meeting.forEach(metric => {
            html += `
                <div class="pattern-item">
                    <div class="pattern-title">${metric.metric}</div>
                    <div class="pattern-description">${metric.description}</div>
                </div>
            `;
        });
        
        html += '</div>';
        metricsContainer.innerHTML = html;
    }

    // Meeting Norms
    const normsContainer = document.getElementById('meetingNorms');
    if (normsContainer && dashboardData.decisionFramework) {
        const norms = dashboardData.decisionFramework.meetingNorms;
        let html = `
            <div class="content-section">
                <h4>Agreed Principles</h4>
        `;
        
        norms.principles.forEach(principle => {
            html += `
                <div class="module-card">
                    <div class="module-title">${principle.norm}</div>
                    <div class="module-objectives">${principle.practice}</div>
                </div>
            `;
        });
        
        html += `
                <h4 style="margin-top: 20px;">Meeting Guidelines</h4>
                <ul>
        `;
        
        norms.guidelines.forEach(guideline => {
            html += `<li>${guideline}</li>`;
        });
        
        html += '</ul></div>';
        normsContainer.innerHTML = html;
    }
}

// Utility function to check if date is urgent
function isDateUrgent(dateStr) {
    const targetDate = new Date(dateStr + ', 2025');
    const today = new Date();
    const daysUntil = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
    return daysUntil <= 14;
}

// Update last updated timestamp
function updateLastUpdated() {
    const element = document.getElementById('lastUpdated');
    if (element && dashboardData.lastUpdated) {
        element.textContent = dashboardData.lastUpdated;
    }
}

// Add download button styles
const style = document.createElement('style');
style.textContent = `
    .download-btn {
        display: inline-block;
        padding: 10px 20px;
        background: var(--accent-blue);
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 500;
        transition: var(--transition);
    }
    
    .download-btn:hover {
        background: var(--secondary-blue);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }
`;
document.head.appendChild(style);