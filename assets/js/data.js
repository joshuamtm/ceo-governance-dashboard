// CEO IT Governance Dashboard - Data Module

const dashboardData = {
    // Priority Items for Decision Tracking
    priorityItems: [
        {
            priority: 1,
            item: "Gemini Rollout & ChatGPT Sunset",
            currentStatus: "ChatGPT termination notice due Oct 1 for Nov 1 sunset; Gemini rollout planning underway",
            statusType: "urgent",
            decision: "Approve phased Gemini rollout plan with Gmail-only initial deployment",
            owner: "Claire + Bill + Dane",
            targetDate: "Sept 20",
            successMetric: "Gemini training completed for initial 70 users by Sept 20"
        },
        {
            priority: 1,
            item: "Google Drive Access Control Audit",
            currentStatus: "Security audit needed before enabling Gemini for Drive to prevent data exposure",
            statusType: "critical",
            decision: "Complete access control audit and remediation plan",
            owner: "James + Ryan",
            targetDate: "Sept 15",
            successMetric: "Audit complete with documented access controls"
        },
        {
            priority: 1,
            item: "AI Working Group Reestablishment",
            currentStatus: "Group non-functional; needs to be reestablished under IT Governance Committee",
            statusType: "stuck",
            decision: "Reestablish working group with clear charter and decision authority",
            owner: "Dane (lead) + Bill",
            targetDate: "Sept 8",
            successMetric: "First meeting held with documented charter"
        },
        {
            priority: 2,
            item: "Anthropic Partnership Decision",
            currentStatus: "6-month trial request pending; leadership pressure for partnership",
            statusType: "in-progress",
            decision: "Define use cases and governance for Anthropic trial",
            owner: "Bill + Yuri + Dane",
            targetDate: "Sept 15",
            successMetric: "Written decision with approved use cases"
        },
        {
            priority: 2,
            item: "AI Policy Update & Training",
            currentStatus: "Policy needs update to address AI tools specifically; training materials incomplete",
            statusType: "in-progress",
            decision: "Approve updated policy addendum and comprehensive training program",
            owner: "Joshua + Claire",
            targetDate: "Sept 8",
            successMetric: "Updated policy published with training launched"
        },
        {
            priority: 3,
            item: "Vinton Security Assessment",
            currentStatus: "Request pending security review; needs proper vetting process",
            statusType: "stuck",
            decision: "Complete security assessment and Go/No-Go decision",
            owner: "Joshua + IT Team",
            targetDate: "Sept 15",
            successMetric: "Security assessment documented with recommendation"
        }
    ],

    // Key Quotes from Leadership
    keyQuotes: [
        {
            text: "Water is going to find a way downhill... the question is not whether AI is going to be in use at CEO, the question is how we shape and manage it.",
            attribution: "Joshua Peskay, vCISO",
            context: "August 21 meeting - AI adoption inevitability"
        },
        {
            text: "We're worried about three or four different platforms all at the same time... we need somebody who has the driver's license to sit in the driver's seat.",
            attribution: "Yuri Okumura, Legal",
            context: "August 21 meeting - Need for consolidated AI governance"
        },
        {
            text: "Between 50% and 80% of the 630 staff not using ChatGPT are probably using AI without our knowledge.",
            attribution: "Joshua Peskay, vCISO",
            context: "August 21 meeting - Shadow AI usage reality"
        },
        {
            text: "CEO must first audit and validate appropriate Google Drive access controls before enabling Gemini for Drive.",
            attribution: "Joshua Peskay, vCISO",
            context: "August 26 email - Critical security requirement"
        }
    ],

    // Risk Register Context
    riskContext: {
        aiGovernanceRisk: {
            rank: 2,
            score: 20.8,
            mitigation: "17%",
            description: "Insufficient AI Governance",
            impact: "High exposure to data leakage, compliance violations, and shadow IT"
        },
        shadowITRisk: {
            rank: 3,
            score: 18.8,
            mitigation: "23%",
            description: "Shadow IT Activities",
            impact: "Unmanaged technology adoption creating security vulnerabilities"
        },
        dataProtectionRisk: {
            rank: 5,
            score: 16.2,
            mitigation: "31%",
            description: "Data Protection Gaps",
            impact: "Potential for unauthorized data exposure through AI tools"
        }
    },

    // Decision Patterns Observed
    decisionPatterns: [
        {
            title: "Analysis Paralysis",
            description: "Extended discussions without concrete decisions, often spanning multiple meetings on the same topic"
        },
        {
            title: "Committee Formation",
            description: "Creating committees or working groups as a mechanism to defer immediate decisions"
        },
        {
            title: "Stakeholder Gaps",
            description: "Postponing decisions due to missing stakeholders rather than establishing interim authority"
        },
        {
            title: "Timeline Flexibility",
            description: "Commitments made without firm deadlines or accountability mechanisms"
        }
    ],

    // AI Policy Content
    policyContent: {
        overview: {
            title: "AI Tool Usage Policy - DRAFT ADDENDUM",
            content: `This addendum to the Data Privacy and Information Security Policy establishes comprehensive guidelines for AI tool usage at CEO. 
            It enables controlled AI adoption while maintaining security and compliance standards, addressing our #2 organizational risk.`,
            effectiveDate: "Target: September 20, 2025",
            replaces: "Updates existing Data Privacy and Information Security Policy (Oct 2023)",
            status: "DRAFT - Pending IT Governance Committee Approval"
        },
        approvedTools: {
            primary: [
                {
                    name: "Gemini (within Google Workspace ONLY)",
                    description: "Primary AI assistant - Initially Gmail only, Drive pending audit",
                    access: "Training-gated through organizational units (OUs)"
                }
            ],
            future: [
                {
                    name: "Anthropic Claude (6-month trial)",
                    description: "Limited to IT team and BAMs for specific use cases",
                    access: "Pending use case definition and governance framework"
                }
            ],
            transition: "ChatGPT sunset by November 1, 2025 (termination notice due October 1)"
        },
        dataGuidelines: {
            permitted: [
                "All information stored in CEO's Google Workspace",
                "Operational data and non-sensitive organizational information",
                "Publicly available information and external research"
            ],
            restricted: [
                "Data from external systems (Salesforce, CORE) unless migrated to Google Workspace",
                "Information under legal holds or retention requirements",
                "Data explicitly marked as restricted from AI processing"
            ],
            important: "AI tools must be limited to CEO Google Workspace Gemini and Notebook LM accounts only"
        },
        implementation: {
            phases: [
                {
                    phase: "Immediate Actions",
                    dates: "By September 20, 2025",
                    activities: "Complete Google Drive audit, train initial 70 ChatGPT users on Gemini, establish AI Working Group"
                },
                {
                    phase: "ChatGPT Transition",
                    dates: "September 20 - October 1, 2025",
                    activities: "Submit ChatGPT termination notice, complete GPT to Gems migration, Gmail-only Gemini deployment"
                },
                {
                    phase: "Controlled Expansion",
                    dates: "October - November 2025",
                    activities: "Expand Gemini access based on training completion, monitor usage patterns, assess Anthropic trial"
                },
                {
                    phase: "Full Deployment",
                    dates: "December 2025",
                    activities: "Enable Gemini for Drive (post-audit), complete staff training, quarterly effectiveness review"
                }
            ],
            criticalDates: {
                "Sept 8": "AI Working Group first meeting",
                "Sept 15": "Google Drive audit complete",
                "Sept 20": "Initial 70 users trained on Gemini",
                "Oct 1": "ChatGPT termination notice deadline",
                "Nov 1": "ChatGPT access ends",
                "Dec 1": "Target for full Gemini deployment"
            }
        }
    },

    // Leadership Brief Content
    briefContent: {
        executiveSummary: `We recommend updating CEO's AI policy to enable broader, safer AI adoption while maintaining security controls. 
        This addresses our #2 organizational risk (Insufficient AI Governance, 20.8 residual risk score) and positions CEO for improved operational efficiency.`,
        
        currentChallenges: [
            {
                title: "Limited Coverage",
                description: "Only ~70 staff (10%) have sanctioned AI access via ChatGPT Enterprise"
            },
            {
                title: "Organic Demand",
                description: "Industry data suggests 80%+ of nonprofit staff are interested in AI tools"
            },
            {
                title: "Cost Opportunity",
                description: "Paying for ChatGPT while having included Gemini licenses available"
            },
            {
                title: "Security Gaps",
                description: "Unmanaged AI usage creates data governance vulnerabilities"
            }
        ],

        businessBenefits: [
            {
                category: "Risk Reduction",
                benefits: [
                    "Move from uncontrolled to managed AI usage",
                    "Enhanced data protection through Google Workspace controls",
                    "Established incident response procedures",
                    "Auditable usage patterns and compliance"
                ]
            },
            {
                category: "Operational Efficiency",
                benefits: [
                    "Cost savings of ~$2,100/month from ChatGPT licenses",
                    "Expand AI access from 70 to 700+ staff",
                    "Productivity gains across all departments",
                    "Systematic capability building"
                ]
            }
        ],

        resourceRequirements: {
            budget: "Cost neutral to positive (eliminates ChatGPT licensing)",
            staffing: "60 hours initial setup, 2 hours/week ongoing",
            technology: "Existing Google Workspace infrastructure",
            timeline: "3-month implementation (Sept-Dec 2025)"
        }
    },

    // Training Program Content
    trainingContent: {
        overview: {
            purpose: "Enable safe and effective AI use rather than discourage adoption",
            duration: "60 minutes self-paced online",
            assessment: "80% pass rate required",
            platform: "CEO Learning Management System"
        },
        modules: [
            {
                title: "Module 1: AI Fundamentals & CEO Context",
                duration: "15 minutes",
                objectives: [
                    "Understand AI capabilities and limitations",
                    "Learn CEO's strategic approach to AI",
                    "Overview of approved tools (Gemini in Google Workspace)"
                ],
                activities: "Interactive assessments, tool demonstrations, leadership message",
                keyPoints: "AI is inevitable - we must shape its use; Only CEO-licensed enterprise platforms allowed"
            },
            {
                title: "Module 2: Data Classification & What Can/Cannot Be Input",
                duration: "20 minutes",
                objectives: [
                    "Understand PII handling in approved AI platforms",
                    "Learn data classification rules that apply to AI",
                    "Recognize restricted data types (legal holds, external systems)"
                ],
                activities: "15 realistic scenarios, decision tree exercises, case studies",
                keyPoints: "PII allowed ONLY in approved enterprise AI with security controls; Never use personal/consumer AI tools"
            },
            {
                title: "Module 3: Output Validation & Preventing AI Hallucinations",
                duration: "15 minutes",
                objectives: [
                    "Critical evaluation of AI-generated content",
                    "Verification techniques for accuracy",
                    "When NOT to use AI (legal, medical, financial advice)"
                ],
                activities: "Hallucination detection exercises, fact-checking practice",
                keyPoints: "All AI outputs must be validated before official use; Never use for final decisions without human review"
            },
            {
                title: "Module 4: Transparency Requirements & GPT to Gems Migration",
                duration: "10 minutes",
                objectives: [
                    "When and how to disclose AI use",
                    "Migrate custom GPTs to Gemini Gems",
                    "Effective prompting techniques"
                ],
                activities: "GPT migration walkthrough, transparency scenarios",
                keyPoints: "Disclose AI use when transparency matters to stakeholders; ChatGPT users must transition by Nov 1"
            }
        ],
        assessment: {
            format: "Multiple choice, scenario-based, true/false, short answer",
            passingScore: "80%",
            retakes: "Unlimited with additional support",
            completion: "Required for AI tool access"
        },
        metrics: {
            completion: "95% of staff within 30 days",
            satisfaction: "4.0+ rating on usefulness",
            compliance: "<5% AI-related incidents in first 6 months",
            adoption: "75% active usage within 60 days"
        }
    },

    // Decision Framework
    decisionFramework: {
        decisionCriteria: [
            {
                criterion: "Risk Impact",
                description: "How does this decision affect our organizational risk profile?",
                evaluation: "High/Medium/Low impact on risk register items"
            },
            {
                criterion: "Resource Requirements",
                description: "What resources (time, budget, staff) are needed?",
                evaluation: "Clearly defined resource needs with budget impact"
            },
            {
                criterion: "Timeline Urgency",
                description: "What are the consequences of delaying this decision?",
                evaluation: "Specific impacts of 30/60/90 day delays"
            },
            {
                criterion: "Stakeholder Readiness",
                description: "Do we have the right people and information to decide?",
                evaluation: "Required stakeholders identified and consulted"
            },
            {
                criterion: "Success Measurement",
                description: "How will we know if this decision was successful?",
                evaluation: "Clear, measurable success metrics defined"
            }
        ],

        accountabilityTemplate: {
            format: "RACI Matrix for Decision Implementation",
            components: [
                {
                    role: "Responsible",
                    definition: "Person(s) who will do the work",
                    example: "Bill Reese for technical implementation"
                },
                {
                    role: "Accountable",
                    definition: "Person ultimately answerable for delivery",
                    example: "Claire Brown for policy compliance"
                },
                {
                    role: "Consulted",
                    definition: "People whose input is needed",
                    example: "Legal, HR, affected departments"
                },
                {
                    role: "Informed",
                    definition: "People who need to know the outcome",
                    example: "All staff for policy changes"
                }
            ],
            tracking: [
                "Decision logged with date and rationale",
                "Owner confirmed and accepts accountability",
                "Timeline established with specific milestones",
                "Check-in schedule defined (weekly/biweekly)",
                "Success metrics documented and agreed"
            ]
        },

        successMetrics: {
            governance: [
                {
                    metric: "Decision Velocity",
                    target: "Priority items resolved within 2 meetings",
                    current: "Average 3+ meetings per decision"
                },
                {
                    metric: "Commitment Follow-Through",
                    target: "90% of commitments met on time",
                    current: "To be measured going forward"
                },
                {
                    metric: "Risk Mitigation Progress",
                    target: "Reduce top 5 risks by 25% in 6 months",
                    current: "AI Governance at 17% mitigation"
                }
            ],
            meeting: [
                {
                    metric: "Action Items Completed",
                    description: "Percentage of action items completed by next meeting"
                },
                {
                    metric: "Decision Documentation",
                    description: "All decisions documented with rationale within 24 hours"
                },
                {
                    metric: "Stakeholder Attendance",
                    description: "Required decision-makers present for critical items"
                }
            ]
        },

        meetingNorms: {
            principles: [
                {
                    norm: "Decision-First Mindset",
                    practice: "Each agenda item should result in a decision or specific next steps with owners and dates"
                },
                {
                    norm: "Time-boxed Discussions",
                    practice: "Set time limits for each topic; if more time needed, identify what's blocking decision"
                },
                {
                    norm: "Documentation Standard",
                    practice: "All decisions recorded with rationale, owner, timeline, and success criteria"
                },
                {
                    norm: "Accountability Check-ins",
                    practice: "Begin each meeting reviewing commitments from previous meeting"
                },
                {
                    norm: "Risk-Aware Decision Making",
                    practice: "Consider risk impact for all significant decisions"
                }
            ],
            guidelines: [
                "Come prepared with pre-read materials reviewed",
                "Identify decision authority before discussing",
                "Escalate blockers immediately, not at deadlines",
                "Celebrate completed commitments and learn from delays",
                "Focus on outcomes, not just activities"
            ]
        }
    }
};

// Last updated timestamp
dashboardData.lastUpdated = "August 28, 2025 (v1.2) - Updated with GRC vCISO Check-in and Policy Drafts";