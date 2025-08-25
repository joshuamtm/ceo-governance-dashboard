// CEO IT Governance Dashboard - Data Module

const dashboardData = {
    // Priority Items for Decision Tracking
    priorityItems: [
        {
            priority: 1,
            item: "AI Policy Implementation",
            currentStatus: "AI policy ratified in 2024... still in early stages with growth to come",
            statusType: "stuck",
            decision: "Approve Gemini/Notebook LM policy & training plan",
            owner: "Claire + Bill",
            targetDate: "Sept 8",
            successMetric: "Policy published, training launched"
        },
        {
            priority: 1,
            item: "Vinton Risk Decision",
            currentStatus: "would have to go to risk committee... they're going to meet, I think they're supposed to meet this Friday",
            statusType: "stuck",
            decision: "Go/No-Go with documented rationale",
            owner: "Yuri + Risk Committee",
            targetDate: "Sept 8",
            successMetric: "Written decision with next steps"
        },
        {
            priority: 2,
            item: "IT Governance Structure",
            currentStatus: "currently being overhauled in view of IT governance structures",
            statusType: "in-progress",
            decision: "Define committee structure & meeting cadence",
            owner: "Bill + Claire",
            targetDate: "Sept 15",
            successMetric: "Published governance framework"
        },
        {
            priority: 2,
            item: "Crosswalk Project Scope",
            currentStatus: "we don't have all the stakeholders here... maybe we need to pull up that internal media",
            statusType: "stuck",
            decision: "Clarify requirements & budget authority",
            owner: "Bill + Yuri",
            targetDate: "Sept 15",
            successMetric: "Approved project charter"
        },
        {
            priority: 3,
            item: "Third-Party Risk Process",
            currentStatus: "we need to do a better job of vetting stuff before it goes to you",
            statusType: "in-progress",
            decision: "Define intake & approval workflow",
            owner: "Joshua + Bill",
            targetDate: "Sept 22",
            successMetric: "Documented process with templates"
        }
    ],

    // Key Quotes from Leadership
    keyQuotes: [
        {
            text: "feels like we've been talking about the same thing for, like, three meetings now. So just let us know what we can do to support to make sure we're, like, moving forward on the right track.",
            attribution: "Claire Brown, Legal & Compliance",
            context: "Opportunity to accelerate decision-making on AI policy"
        },
        {
            text: "I think we need to do a better job of vetting stuff before it goes to you, because some things shouldn't be this far along until they've gotten an internal, a better internal vetting, like a kicking of the tires.",
            attribution: "Bill Reese, IT Director",
            context: "Recognition of process improvement opportunity"
        },
        {
            text: "AI tools offer tremendous productivity gains, potentially if used effectively",
            attribution: "Leadership Team Consensus",
            context: "Shared vision for AI enablement"
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
            title: "Policy Purpose",
            content: `This policy establishes guidelines for safe and effective use of AI tools at Center for Employment Opportunities. 
            The policy enables broader, safer AI adoption while maintaining security controls and addressing our #2 organizational risk.`,
            effectiveDate: "September 15, 2025",
            replaces: "ChatGPT License Ethics Pledge (Dec 2024)"
        },
        approvedTools: {
            primary: [
                {
                    name: "Gemini (Google Workspace Integration)",
                    description: "Primary AI assistant for CEO staff",
                    access: "Training-gated through Google Workspace"
                },
                {
                    name: "Notebook LM",
                    description: "Document analysis and synthesis tool",
                    access: "Training-gated through Google Workspace"
                }
            ],
            transition: "Existing ChatGPT Enterprise users transition to Gemini by December 1, 2025"
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
                    phase: "Foundation",
                    dates: "September 2025",
                    activities: "Policy approval, training program launch, pilot group (25 users)"
                },
                {
                    phase: "Rollout",
                    dates: "October-November 2025",
                    activities: "Department-by-department expansion to all staff"
                },
                {
                    phase: "Transition",
                    dates: "December 2025",
                    activities: "ChatGPT sunset, policy effectiveness review"
                }
            ]
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
                    "Overview of approved tools and access"
                ],
                activities: "Interactive assessments, tool demonstrations, leadership message"
            },
            {
                title: "Module 2: Data Handling & Privacy",
                duration: "20 minutes",
                objectives: [
                    "Apply data classification in AI use",
                    "Understand platform restrictions",
                    "Recognize when to seek guidance"
                ],
                activities: "15 realistic scenarios, decision tree exercises, case studies"
            },
            {
                title: "Module 3: Output Validation & Critical Thinking",
                duration: "15 minutes",
                objectives: [
                    "Develop skills to evaluate AI outputs",
                    "Learn verification techniques",
                    "Identify when not to trust AI"
                ],
                activities: "Accuracy assessment, source verification, error identification"
            },
            {
                title: "Module 4: Practical Applications & Best Practices",
                duration: "10 minutes",
                objectives: [
                    "Apply AI tools in daily work",
                    "Learn effective prompting techniques",
                    "Understand transparency guidelines"
                ],
                activities: "Prompt writing, use case practice, troubleshooting"
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
dashboardData.lastUpdated = "August 25, 2025 (v1.1)";