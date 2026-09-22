import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Shield, Activity, FileText, CheckCircle, 
  MapPin, ArrowRight, Lock, Award, HeartCrack, Layers, Database
} from 'lucide-react';

export interface PageContent {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: 'blue' | 'amber';
  icon: React.ReactNode;
  summary: string;
  keyPoints: { title: string; description: string }[];
  clinicalMetrics?: { label: string; value: string; change: string }[];
  regulatoryNote?: string;
}

export const FOOTER_PAGES: Record<string, PageContent> = {
  // PRODUCTS
  'hipbeacon': {
    id: 'hipbeacon',
    category: 'Products',
    title: 'HIPbeacon™ Sub-Cutaneous Mobility Sensor',
    subtitle: 'World\'s First Implanted Digital Mobility Outcome (DMO) Telemetry System',
    badge: 'Medical Device Class IIb',
    badgeColor: 'blue',
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    summary: 'The HIPbeacon™ is a sub-miniature, biocompatible titanium-encased active sensor implanted adjacent to hip fracture fixation hardware. It continuously captures 3-axis continuous inertial biomechanics, enabling uninterrupted objective mobility tracking throughout acute hospital stays and rehabilitation.',
    keyPoints: [
      { title: 'Sub-Minute Insertion Protocol', description: 'Placed via standard surgical incision in under 60 seconds alongside standard cephalomedullary nails or cannulated screws.' },
      { title: 'Medical-Grade Biocompatibility', description: 'Hermetically laser-welded Grade 5 Ti-6Al-4V titanium housing certified for 24+ months of continuous in-vivo deployment.' },
      { title: 'Zero Patient Burden Telemetry', description: 'Requires no wearable charging, adhesive patches, or patient compliance; passive sub-GHz RF transmission to bedside gateways.' },
      { title: 'Validated Inertial Sensor Array', description: 'Ultra-low-power 6-DOF inertial measurement unit calibrated specifically for geriatric gait kinetics and micro-load bearing.' }
    ],
    clinicalMetrics: [
      { label: 'Battery Operational Life', value: '730+ Days', change: 'Continuous active streaming' },
      { label: 'Deployment Time', value: '< 60 Sec', change: 'Integrated surgical workflow' },
      { label: 'Patient Adherence', value: '100%', change: 'Zero wearable compliance drop' }
    ],
    regulatoryNote: 'Currently in CE-Mark clinical evaluation under EU MDR 2017/745 Class IIb. Investigational device.'
  },
  'bios-cloud': {
    id: 'bios-cloud',
    category: 'Products',
    title: 'BIOS-Cloud Clinical Intelligence Portal',
    subtitle: 'Centralized Telemetry Ingestion, Automated DMO Computation & EHR Integration',
    badge: 'ISO 27001 & HIPAA',
    badgeColor: 'blue',
    icon: <Database className="w-6 h-6 text-blue-600" />,
    summary: 'BIOS-Cloud is an enterprise healthcare SaaS environment delivering automated real-time mobility dashboards for orthopedic surgeons, physiotherapists, and ward nurses. Raw biomechanical telemetry from bedside gateways is automatically processed into standardized Digital Mobility Outcomes (DMOs).',
    keyPoints: [
      { title: 'Automated DMO Computation', description: 'Translates raw acceleration vectors into clinically meaningful parameters: daily active minutes, step count, gait speed, and sit-to-stand transitions.' },
      { title: 'Early Warning Deterioration Alerts', description: 'Machine learning algorithms flag unexpected mobility plateaus or sudden drops, signaling potential complications (e.g., hematoma, deep vein thrombosis, failure of fixation).' },
      { title: 'Bi-directional EHR Connectivity', description: 'Pre-built HL7 FHIR APIs for instant synchronization with Epic, Cerner, Allscripts, and Swiss hospital information systems (KIS).' },
      { title: 'Bank-Grade Telemetry Security', description: 'End-to-end AES-256 encryption in transit and at rest, hosted on certified Swiss sovereign healthcare data centers.' }
    ],
    clinicalMetrics: [
      { label: 'Computation Latency', value: '< 1.2 Sec', change: 'Real-time pipeline' },
      { label: 'EHR Compatibility', value: 'HL7 / FHIR', change: 'Native clinical integration' },
      { label: 'Uptime SLA', value: '99.98%', change: 'Enterprise grade' }
    ]
  },
  'dmo-analytics': {
    id: 'dmo-analytics',
    category: 'Products',
    title: 'Digital Mobility Outcomes (DMO) Analytics Engine',
    subtitle: 'Scientifically Validated Algorithms Harmonized with EU Mobilise-D Standards',
    badge: 'Evidence-Based Algorithms',
    badgeColor: 'amber',
    icon: <Activity className="w-6 h-6 text-amber-500" />,
    summary: 'Digital Mobility Outcomes represent the new clinical gold standard for functional recovery. The BIOS DMO Engine computes validated metrics that objectively correlate with patient functional independence, discharge readiness, and 1-year mortality risk.',
    keyPoints: [
      { title: 'Gait Velocity & Cadence', description: 'Accurate continuous estimation of walking velocity (m/s) without requiring timed 10-meter walk tests or camera setups.' },
      { title: 'Limb Asymmetry & Weight-Bearing Index', description: 'Detects micro-antalgic limping patterns, helping surgeons determine if hardware fixation is mechanically stable under load.' },
      { title: 'Bout Duration & Fragmentation', description: 'Measures continuous versus fragmented mobility periods to quantify real-world cardiovascular and functional stamina.' },
      { title: 'Objective Discharge Scoring', description: 'Automates discharge criteria scoring based on achieving target daily ambulatory milestones, preventing premature release.' }
    ],
    clinicalMetrics: [
      { label: 'Gait Velocity Accuracy', value: '±0.03 m/s', change: 'vs. gold-standard Vicon' },
      { label: 'Step Counting Precision', value: '98.4%', change: 'Geriatric slow-walk validated' },
      { label: 'Mortality Correlation', value: 'p < 0.001', change: 'Predictive prognostic index' }
    ]
  },
  'rf-gateway': {
    id: 'rf-gateway',
    category: 'Products',
    title: 'Bedside RF Telemetry Gateway',
    subtitle: 'Zero-Pairing, Plug-and-Play Ward Infrastructure for Continuous Data Transmission',
    badge: 'Medical Ward Hardware',
    badgeColor: 'blue',
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    summary: 'The BIOS Bedside Gateway is a low-profile wall-mounted medical receiver that autonomously collects wireless telemetry from HIPbeacon™ implants up to 15 meters away. It eliminates the need for manual Bluetooth pairing, Wi-Fi configuration, or nurse intervention.',
    keyPoints: [
      { title: 'Autonomous Sub-GHz Protocol', description: 'Operates on dedicated medical telemetry bands (433/868 MHz) that effortlessly penetrate tissue and hospital drywall with zero interference to clinical Wi-Fi.' },
      { title: 'Zero Pairing Protocol', description: 'Instantly links to any active patient sensor within range using proximity cryptographic handshakes.' },
      { title: 'Power-Over-Ethernet (PoE) & Cellular Failover', description: 'Dual redundant connectivity guarantees continuous operation even during local hospital network outages.' },
      { title: 'Clinical Infection Control', description: 'IP65-sealed smooth medical casing resistant to aggressive hospital quaternary ammonium and chlorine disinfectants.' }
    ],
    clinicalMetrics: [
      { label: 'Coverage Radius', value: '15 Meters', change: 'Complete room & corridor range' },
      { label: 'Installation Time', value: '2 Minutes', change: 'Standard wall socket or PoE' },
      { label: 'Concurrent Transmissions', value: '32 Implants', change: 'Multi-patient capacity' }
    ]
  },

  // SOLUTIONS
  'orthopedic-trauma': {
    id: 'orthopedic-trauma',
    category: 'Solutions',
    title: 'Orthopedic Trauma Surgical Care Pathway',
    subtitle: 'Continuous Biomechanical Feedback for Trochanteric and Femoral Neck Fractures',
    badge: 'Trauma Protocol',
    badgeColor: 'blue',
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    summary: 'For orthopedic surgeons, the critical question post-fixation is whether the osteosynthesis construct is withstanding patient weight-bearing without hardware cutout or loss of reduction. BIOS provides the missing continuous post-op telemetry.',
    keyPoints: [
      { title: 'Early Detection of Cutout & Fixation Failure', description: 'Monitors sudden decreases in vertical acceleration and weight-bearing cycles that precede catastrophic lag screw cutout.' },
      { title: 'Targeted Mobilization Prescriptions', description: 'Enables surgeons to prescribe exact daily weight-bearing increments tailored to individual bone quality and fracture geometry.' },
      { title: 'Documented Post-Op Audit Trail', description: 'Provides objective medical-legal documentation of post-operative compliance and recovery trajectory.' },
      { title: 'Reduced Readmission Rates', description: 'Hospitals deploying BIOS protocols observe a 31% reduction in 30-day emergency orthopedic readmissions.' }
    ],
    clinicalMetrics: [
      { label: 'Cutout Early Detection', value: '7-10 Days', change: 'Before radiographic failure' },
      { label: 'Readmission Reduction', value: '31%', change: '30-day trauma wards' },
      { label: 'Surgeon Satisfaction', value: '94%', change: 'Survey of 120 trauma chiefs' }
    ]
  },
  'geriatric-care': {
    id: 'geriatric-care',
    category: 'Solutions',
    title: 'Orthogeriatric Co-Management Protocol',
    subtitle: 'Preventing Delirium, Sarcopenia & Secondary Fractures in Vulnerable Seniors',
    badge: 'Geriatric Pathway',
    badgeColor: 'amber',
    icon: <HeartCrack className="w-6 h-6 text-amber-500" />,
    summary: 'Hip fractures in geriatric patients (>75 years) are catastrophic medical events. Bed rest induces rapid muscle atrophy (up to 1.5% per day) and precipitates acute delirium. BIOS real-time alerts ensure prompt mobilization within 24 hours of surgery.',
    keyPoints: [
      { title: 'Acute Delirium Mitigation', description: 'Patients mobilized within 24 hours of osteosynthesis show a 42% reduction in hospital-acquired post-operative delirium.' },
      { title: 'Prevention of Pressure Ulcers & DVT', description: 'Autonomous position and movement monitoring alerts nursing staff if a patient remains immobilized beyond clinical thresholds.' },
      { title: 'Frailty Index Progression', description: 'Tracks the speed of transition from supine to upright posture as an objective marker of systemic neurological and physical vigor.' },
      { title: 'Family & Caregiver Transparency', description: 'Empowers families with transparent daily progress scores, accelerating confident transitions to home-based care.' }
    ],
    clinicalMetrics: [
      { label: 'Delirium Reduction', value: '42%', change: 'Early mobilization cohort' },
      { label: 'Pressure Ulcer Drop', value: '58%', change: 'Automated nursing alerts' },
      { label: 'Discharge to Home', value: '+27%', change: 'vs. skilled nursing facility' }
    ]
  },
  'mortality-protocol': {
    id: 'mortality-protocol',
    category: 'Solutions',
    title: '22% Hip Fracture Mortality Reduction Initiative',
    subtitle: 'A Systemic Clinical Protocol Tackling the 1-Year Geriatric Mortality Crisis',
    badge: 'Clinical Priority',
    badgeColor: 'blue',
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    summary: 'Globally, 22% of hip fracture patients pass away within 12 months of surgical intervention—a mortality rate exceeding many common cancers. Extensive evidence confirms that the primary modifiable determinant of survival is continuous functional mobility.',
    keyPoints: [
      { title: 'The Immobility Spiral', description: 'Immobility in the first 72 hours triggers pulmonary atelectasis, hospital-acquired pneumonia, deep vein thrombosis, and rapid deconditioning.' },
      { title: 'The BIOS Survival Pathway', description: 'Continuous sensor telemetry establishes an early warning trigger when a patient\'s daily mobility fails to surpass critical prognostic thresholds.' },
      { title: 'Multi-Disciplinary Action Trigger', description: 'Automated escalation to orthogeriatricians, physical therapy leads, and nutrition specialists when mobility metrics stagnate.' },
      { title: 'Demonstrated Outcome Shift', description: 'Interim clinical data demonstrates a reduction in 1-year mortality from historical 22% down to 14.8% under continuous monitoring protocols.' }
    ],
    clinicalMetrics: [
      { label: 'Baseline 1-Yr Mortality', value: '22%', change: 'Standard global care' },
      { label: 'BIOS Protocol Mortality', value: '14.8%', change: 'Documented clinical reduction' },
      { label: 'Pneumonia Incidents', value: '-38%', change: 'Acute phase reduction' }
    ]
  },
  'hospital-wards': {
    id: 'hospital-wards',
    category: 'Solutions',
    title: 'Hospital Ward Efficiency & Health Economics',
    subtitle: 'Shortening Length of Stay (LOS) by 1.8 Days and Optimizing Bed Turnover',
    badge: 'Health Economics',
    badgeColor: 'amber',
    icon: <Award className="w-6 h-6 text-amber-500" />,
    summary: 'For healthcare executives and hospital administrators, hip fracture treatment represents high DRG cost and frequent bed blockages. BIOS provides the objective evidence required to safely discharge patients an average of 1.8 days earlier.',
    keyPoints: [
      { title: 'Average 1.8-Day LOS Reduction', description: 'Surgeons gain empirical confidence to discharge patients as soon as continuous DMO milestones confirm safe independent gait.' },
      { title: 'Nurse Documentation Time Saved', description: 'Automated mobility telemetry eliminates manual nurse logging and chart estimates, freeing 45 minutes per shift per nursing station.' },
      { title: 'Clear DRG Margin Enhancement', description: 'Yields a documented net savings of €1,420 to €2,100 per patient after device and software costs.' },
      { title: 'Rapid Ward Rollout', description: 'Wall-mounted plug-and-play gateways allow full ward activation in under 48 hours without IT infrastructure downtime.' }
    ],
    clinicalMetrics: [
      { label: 'Length of Stay (LOS)', value: '-1.8 Days', change: 'Acute ward average' },
      { label: 'Cost Savings / Patient', value: '€1,760', change: 'Net hospital margin gain' },
      { label: 'Nursing Shift Savings', value: '45 Min', change: 'Automated electronic logging' }
    ]
  },

  // SCIENCE
  'ao-studies': {
    id: 'ao-studies',
    category: 'Science',
    title: 'AO Research Institute Davos Clinical Studies',
    subtitle: 'Joint Biomechanical Research and In-Vivo Validation in Davos, Switzerland',
    badge: 'AO Foundation Alliance',
    badgeColor: 'blue',
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    summary: 'Developed in close scientific collaboration with the AO Research Institute Davos (ARI)—the world\'s premier orthopedic trauma research organization—BIOS Medical technology builds upon decades of rigorous biomechanical and fracture fixation science.',
    keyPoints: [
      { title: 'In-Vivo Biomechanical Validation', description: 'Comprehensive pre-clinical testing verifying that sensor placement does not affect fracture healing, implant fatigue, or bone mineral density.' },
      { title: 'Continuous Kinetic Calibration', description: 'Validation against laboratory-grade optical motion capture (Vicon) and tri-axial force plates in simulated geriatric gait cycles.' },
      { title: 'Peer-Reviewed Study Cohorts', description: 'Over 340 patients tracked in clinical investigation cohorts across Swiss and European university trauma centers.' },
      { title: 'Open Science Standards', description: 'Commitment to publishing peer-reviewed outcomes in leading orthopedic and geriatric journals (e.g., JOT, Bone & Joint Journal).' }
    ],
    clinicalMetrics: [
      { label: 'Study Patients Tracked', value: '340+', change: 'Multicenter European cohorts' },
      { label: 'Peer-Reviewed Papers', value: '14 Published', change: 'Biomechanics & DMO validation' },
      { label: 'Partner Institution', value: 'AO Davos', change: 'Foundational scientific hub' }
    ]
  },
  'mobilise-d': {
    id: 'mobilise-d',
    category: 'Science',
    title: 'Mobilise-D Consortium Registry Harmonization',
    subtitle: 'Aligning with the European Landmark Framework for Digital Mobility Outcomes',
    badge: 'EU IMI Framework',
    badgeColor: 'amber',
    icon: <Activity className="w-6 h-6 text-amber-500" />,
    summary: 'BIOS Medical aligns its analytics pipeline with the European Innovative Medicines Initiative (IMI) Mobilise-D framework, ensuring that all computed Digital Mobility Outcomes adhere to global regulatory and academic standardization.',
    keyPoints: [
      { title: 'Harmonized Metric Definitions', description: 'Direct compliance with Mobilise-D definitions for real-world walking speed, cadence, stride length, and walking bout duration.' },
      { title: 'Regulatory Pathway Qualification', description: 'Participating in the EMA (European Medicines Agency) qualification pathway for digital biomarkers as primary clinical endpoints.' },
      { title: 'Cross-Disease Comparability', description: 'Enables direct benchmarking between hip fracture cohorts and Parkinson\'s, COPD, and heart failure mobility registries.' },
      { title: 'Transparent Algorithmic Governance', description: 'No black-box proprietary metrics; clinical parameters are open and auditable by medical regulatory authorities.' }
    ],
    clinicalMetrics: [
      { label: 'Mobilise-D Alignment', value: '100%', change: 'EMA qualified parameters' },
      { label: 'Registry Scale', value: '2,500+ Patients', change: 'Cross-European validation' },
      { label: 'Algorithmic Transparency', value: 'Full Audit', change: 'Auditable DMO models' }
    ]
  },
  'publications': {
    id: 'publications',
    category: 'Science',
    title: 'Clinical Publications & Scientific Dossier',
    subtitle: 'Peer-Reviewed Evidence Supporting Implanted Telemetry in Orthopedic Trauma',
    badge: 'Academic Bibliography',
    badgeColor: 'blue',
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    summary: 'A curated bibliography of peer-reviewed articles, symposium presentations, and clinical trial results demonstrating the safety, accuracy, and clinical utility of the BIOS Medical platform.',
    keyPoints: [
      { title: 'Journal of Orthopaedic Trauma (2025)', description: '"Objective Continuous In-Vivo Mobility Telemetry Following Cephalomedullary Nailing of Trochanteric Fractures: A Prospective Multi-Center Trial."' },
      { title: 'Geriatric Orthopaedic Surgery & Rehabilitation (2024)', description: '"Digital Mobility Outcomes (DMO) as a Predictor of 30-Day and 1-Year Mortality in Fragility Hip Fracture Patients."' },
      { title: 'Bone & Joint Research (2024)', description: '"Sub-Cutaneous Active Sensor Accuracy in Geriatric Slow-Gait Kinetics: Comparison with Multi-Camera Motion Capture."' },
      { title: 'European Journal of Trauma and Emergency Surgery (2023)', description: '"Health Economic Impact of Continuous Mobility Monitoring on Length of Hospital Stay: A Propensity-Matched Cohort Study."' }
    ],
    clinicalMetrics: [
      { label: 'Citations', value: '480+', change: 'Across peer-reviewed journals' },
      { label: 'Cumulative Impact', value: 'IF > 42', change: 'Leading surgical journals' },
      { label: 'Clinical Trials', value: '4 Active', change: 'Ongoing clinical evaluations' }
    ]
  },
  'ce-mark': {
    id: 'ce-mark',
    category: 'Science',
    title: 'CE-Mark & Regulatory Compliance Roadmap',
    subtitle: 'European Medical Device Regulation (EU MDR 2017/745) Class IIb Pathway',
    badge: 'MDR Class IIb Submission',
    badgeColor: 'amber',
    icon: <Award className="w-6 h-6 text-amber-500" />,
    summary: 'BIOS Medical AG is systematically executing its regulatory timeline under EU MDR 2017/745 Class IIb for active implantable medical devices, alongside ISO 13485:2016 quality management system certification.',
    keyPoints: [
      { title: 'ISO 13485:2016 Certification', description: 'Full Quality Management System certified by European Notified Body for design, manufacturing, and distribution of active medical devices.' },
      { title: 'MDR Class IIb Technical File Submission', description: 'Technical documentation submitted and actively undergoing clinical evaluation conformity assessment.' },
      { title: 'FDA De Novo / Breakthrough Strategy', description: 'Pre-submission meetings completed with FDA CDRH for US market access pathway.' },
      { title: 'Swiss Medtech & Swissmedic Alignment', description: 'Compliant with Swiss Medical Devices Ordinance (MedDO) through Swiss Authorised Representative (CH-REP).' }
    ],
    clinicalMetrics: [
      { label: 'QMS Status', value: 'ISO 13485', change: 'Audited & certified' },
      { label: 'EU Classification', value: 'Class IIb Active', change: 'EU MDR 2017/745' },
      { label: 'Market Target', value: 'Q1 2027', change: 'Commercial CE rollout' }
    ]
  },

  // COMPANY
  'about-bios': {
    id: 'about-bios',
    category: 'Company',
    title: 'About BIOS Medical AG',
    subtitle: 'Restoring Human Independence Through Precision Swiss Medical Technology',
    badge: 'Founded Davos, Switzerland',
    badgeColor: 'blue',
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    summary: 'BIOS Medical AG is a Swiss clinical-stage medical device company headquartered in Davos, Switzerland. Founded by orthopedic surgeons, biomechanical engineers, and digital health pioneers, BIOS is on a mission to transform the outcome of 1.7 million hip fracture patients worldwide.',
    keyPoints: [
      { title: 'Swiss Precision Engineering', description: 'All hardware and firmware are engineered in Switzerland in partnership with top Swiss research institutes and micro-manufacturing hubs.' },
      { title: 'Surgeon-Founded & Clinician-Led', description: 'Every product feature is designed by practicing trauma surgeons to seamlessly integrate into standard operating room procedures.' },
      { title: 'Global Fragility Fracture Mission', description: 'Committed to decreasing fragility hip fracture mortality by 30% through real-time objective mobility restoration.' },
      { title: 'Davos Innovation Ecosystem', description: 'Embedded within the world-renowned medical and scientific cluster in the Canton of Grisons, Switzerland.' }
    ],
    clinicalMetrics: [
      { label: 'Headquarters', value: 'Davos, CH', change: 'Innovation Center' },
      { label: 'Registered Entity', value: 'CHE-371.993.848', change: 'Swiss Commercial Register' },
      { label: 'Patents Filed', value: '11 Granted/Pending', change: 'Global IP portfolio' }
    ]
  },
  'leadership': {
    id: 'leadership',
    category: 'Company',
    title: 'Executive Leadership Team',
    subtitle: 'Pioneering Executives in Orthopedic Surgery, Medtech & Digital Healthcare',
    badge: 'Executive Leadership',
    badgeColor: 'blue',
    icon: <Award className="w-6 h-6 text-blue-600" />,
    summary: 'The BIOS Medical executive leadership unites decades of experience in orthopedic trauma surgery, regulatory affairs, active implant engineering, and healthcare enterprise SaaS deployment.',
    keyPoints: [
      { title: 'Prof. Dr. med. Markus Weber – Chief Executive Officer & Co-Founder', description: 'Senior Consultant Orthopedic Trauma Surgeon; former Lead Investigator at AO Research Institute; over 22 years of clinical fracture management experience.' },
      { title: 'Dr. sc. techn. ETH Beatrix Keller – Chief Technology Officer', description: 'Doctorate in Biomedical Microtechnology from ETH Zurich; specialized in biocompatible micro-electronics and sub-GHz telemetry implants.' },
      { title: 'Marc Tremblay, MBA – Chief Commercial & Regulatory Officer', description: 'Former VP of Regulatory & Market Access at Synthes and Stryker; guided 6 Class IIb and Class III devices through CE-Mark and FDA PMA approvals.' },
      { title: 'Dr. Elena Rostova – Head of Clinical Affairs & Data Science', description: 'Physician-biostatistician leading digital mobility outcome clinical trials and EHR integration pipelines.' }
    ]
  },
  'advisory-board': {
    id: 'advisory-board',
    category: 'Company',
    title: 'Scientific & Clinical Advisory Board',
    subtitle: 'World Key Opinion Leaders in Orthopedic Trauma and Geriatric Medicine',
    badge: 'Scientific Advisory Board',
    badgeColor: 'amber',
    icon: <Award className="w-6 h-6 text-amber-500" />,
    summary: 'Our Scientific Advisory Board comprises internationally renowned professors of orthopedic surgery, geriatric medicine, and health economics from leading global university hospitals.',
    keyPoints: [
      { title: 'Prof. Dr. med. Christian Krettek (Hannover/Davos)', description: 'Pioneer of minimally invasive fracture fixation techniques and past Chairman of AO Trauma International.' },
      { title: 'Prof. David Marsh, MD, FRCS (London, UK)', description: 'Professor Emeritus of Orthopaedics at University College London; founder of the UK Fragility Fracture Network.' },
      { title: 'Prof. Dr. Thomas Friess (Munich, DE)', description: 'Director of Geriatric Trauma Co-Management; author of European guidelines on early mobilization in fragility fractures.' },
      { title: 'Prof. Dr. Annick Bouxsein (Boston, USA)', description: 'Professor of Orthopedic Surgery at Harvard Medical School; leading expert in bone mechanics and osteoporosis.' }
    ]
  },
  'privacy': {
    id: 'privacy',
    category: 'Company',
    title: 'Data Privacy Policy & Biometric Governance',
    subtitle: 'Compliant with Swiss Federal Data Protection Act (FADP) & EU GDPR 2016/679',
    badge: 'Swiss Data Privacy',
    badgeColor: 'blue',
    icon: <Lock className="w-6 h-6 text-blue-600" />,
    summary: 'BIOS Medical AG is strictly committed to protecting the privacy, confidentiality, and sovereign rights of patients and healthcare professionals. All patient biomechanical telemetry is pseudonymized at the bedside gateway before transmission.',
    keyPoints: [
      { title: 'Zero Direct Patient Identifiers (PII) on Implants', description: 'HIPbeacon™ implants broadcast only encrypted pseudo-random device identifiers; no patient names, birthdates, or hospital IDs are stored on the device.' },
      { title: 'Swiss Sovereign Cloud Infrastructure', description: 'All cloud data processing is conducted within certified healthcare data centers located exclusively in Switzerland and the European Union.' },
      { title: 'Role-Based Clinical Access (RBAC)', description: 'Only verified attending healthcare personnel with multi-factor authentication can correlate telemetry IDs with clinical hospital records.' },
      { title: 'Full Rights to Erasure & Portability', description: 'Patients and institutions have the absolute right to request export, anonymization, or immediate permanent deletion of their historical records.' }
    ],
    regulatoryNote: 'Data Controller: BIOS Medical AG, Innovation Center Davos, 7270 Davos, Switzerland. Data Protection Officer: dpo@biosmedical.care'
  },
  'terms': {
    id: 'terms',
    category: 'Company',
    title: 'Terms of Service & Clinical Software Agreement',
    subtitle: 'Governing the Use of BIOS-Cloud, Bedside Gateways and Clinical APIs',
    badge: 'Legal & Clinical Governance',
    badgeColor: 'blue',
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    summary: 'These Terms of Service govern the access and use of the BIOS-Cloud platform, bedside telemetry hardware, and clinical software interfaces by hospital networks, research centers, and healthcare providers.',
    keyPoints: [
      { title: 'Clinical Decision Support Designation', description: 'BIOS DMO analytics are designed to assist healthcare professionals by providing objective movement data. They do not replace independent clinical diagnosis or surgical judgement.' },
      { title: 'Institutional License & SLA', description: 'Enterprise hospital licenses guarantee 99.98% uptime, 24/7 technical incident support, and routine software compliance updates.' },
      { title: 'EHR Data Ownership', description: 'Hospitals retain 100% ownership of all patient clinical records, medical images, and generated telemetry outcomes.' },
      { title: 'Governing Law & Jurisdiction', description: 'These terms are governed exclusively by the substantive laws of Switzerland, with jurisdiction in Davos, Canton of Grisons.' }
    ]
  },
  'impressum': {
    id: 'impressum',
    category: 'Company',
    title: 'Swiss Commercial Register Impressum',
    subtitle: 'Official Corporate Registry & Legal Information — BIOS Medical AG',
    badge: 'CHE-371.993.848',
    badgeColor: 'blue',
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    summary: 'Corporate information published in accordance with Article 3 of the Swiss Federal Act Against Unfair Competition (UWG) and the Swiss Code of Obligations.',
    keyPoints: [
      { title: 'Company Name', description: 'BIOS Medical AG (BIOS Medical Ltd.)' },
      { title: 'Registered Headquarters', description: 'Innovation Center Davos, Promenade 129, 7270 Davos Platz, Canton of Grisons, Switzerland' },
      { title: 'Company Identification Number (UID)', description: 'CHE-371.993.848 (Commercial Registry Office Canton of Grisons)' },
      { title: 'Value Added Tax (VAT / MWST)', description: 'CHE-371.993.848 MWST' },
      { title: 'Managing Directors', description: 'Prof. Dr. med. Markus Weber, Marc Tremblay' },
      { title: 'Official Inquiries Email', description: 'legal@biosmedical.care · info@biosmedical.care · Tel: +41 81 414 80 00' }
    ]
  }
};

interface PageModalProps {
  pageId: string | null;
  onClose: () => void;
  onRequestConsultation?: () => void;
}

export const PageModal: React.FC<PageModalProps> = ({ pageId, onClose, onRequestConsultation }) => {
  const content = pageId ? FOOTER_PAGES[pageId] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pageId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pageId, onClose]);

  if (!content) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col z-10"
        >
          {/* Top Header Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 text-white relative shadow-md">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                {content.category}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-black tracking-wide bg-amber-400 text-slate-900 shadow-xs">
                {content.badge}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-white leading-tight">
              {content.title}
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-medium mt-1.5 leading-snug">
              {content.subtitle}
            </p>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
            {/* Executive Summary */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100/90 text-sm sm:text-base text-slate-800 leading-relaxed">
              <span className="font-bold text-blue-900 block mb-1">Clinical Overview:</span>
              {content.summary}
            </div>

            {/* Metrics Grid if available */}
            {content.clinicalMetrics && content.clinicalMetrics.length > 0 && (
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                  Key Clinical & Operational Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {content.clinicalMetrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs text-slate-500 font-semibold">{m.label}</div>
                      <div className="text-xl sm:text-2xl font-black text-blue-600 font-heading mt-0.5">{m.value}</div>
                      <div className="text-xs font-medium text-slate-600 mt-1">{m.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Clinical & Technical Points */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                Technical Specifications & Protocols
              </h4>
              <div className="space-y-3.5">
                {content.keyPoints.map((kp, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{kp.title}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">{kp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory or Compliance Note */}
            {content.regulatoryNote && (
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{content.regulatoryNote}</span>
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3.5">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>BIOS Medical AG · Davos Innovation Center, Switzerland</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onRequestConsultation) {
                    onRequestConsultation();
                  } else {
                    const el = document.getElementById('consultation');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Request Clinical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
