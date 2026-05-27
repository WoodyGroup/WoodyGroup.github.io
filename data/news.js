/**
 * news.js — Lab news database
 *
 * To add a news item:
 *   1. Copy an entry object and fill in the fields.
 *   2. Add it at the TOP of the array (most recent first).
 *   3. Save — the homepage renders automatically from this file.
 *
 * Fields:
 *   date  — string, e.g. "May 2026"
 *   text  — string, the news headline / description
 *   links — (optional) array of { label, url } for inline links
 */

const NEWS = [
  {
    date: "May 2026",
    text: "\"Calibrating decision robustness via inverse conformal risk control\" (Zhou & Zhu) accepted at ICML 2026.",
    links: []
  },
  {
    date: "May 2026",
    text: "Winner, 2026 IISE QCRE Best Track Paper Competition — \"Score-based change-point detection and region localization for spatio-temporal point processes\" (Zhou, Xie & Zhu).",
    links: []
  },
  {
    date: "May 2026",
    text: "Winner, 2026 IISE DAIS Best Track Paper Competition — Gen-DFL (Wang, Chen, Liang, Fioretto & Zhu), accepted at ICLR 2026.",
    links: []
  },
  {
    date: "Apr 2026",
    text: "\"Global-decision-focused neural ODEs for proactive grid resilience management\" (Chen, Fioretto, Qiu & Zhu) published in IEEE Transactions on Smart Grid, Vol. 17, No. 3.",
    links: []
  },
  {
    date: "Mar 2026",
    text: "1st place, 2026 Clifford Spiegelman Student Paper Competition — \"Generalized Hypercube queuing models with overlapping service regions\" (Xing, Zhu & Xie).",
    links: []
  },
  {
    date: "Jan 2026",
    text: "Two papers accepted at ICLR 2026: \"Conformalized decision risk assessment\" (Zhou, Orfanoudaki & Zhu) and \"Gen-DFL\" (Wang, Chen, Liang, Fioretto & Zhu).",
    links: []
  },
  {
    date: "Jan 2026",
    text: "2nd place, 2026 INFORMS Innovative Applications in Analytics Award — \"Hierarchical probabilistic conformal prediction for distributed energy resources adoption\" (Zhou & Zhu), accepted at Annals of Applied Statistics.",
    links: []
  },
  {
    date: "Dec 2025",
    text: "\"TimeAutoDiff: A unified framework for generation, imputation, and forecasting of time series tabular data\" (Suh, Yang et al.) published in Transactions on Machine Learning Research.",
    links: []
  },
  {
    date: "Sep 2025",
    text: "\"Topology-aware conformal prediction for stream networks\" (Zhang*, Wang* et al.) accepted at NeurIPS 2025.",
    links: []
  },
  {
    date: "Oct 2025",
    text: "Winner, 2025 INFORMS ENRE Best Student Paper Award — \"Enhancing electricity-system resilience with adaptive robust optimization\" (Chen, Zhu & Sioshansi).",
    links: []
  },
  {
    date: "Oct 2025",
    text: "Winner, 2025 YinzOR Poster Competition — \"Conformalized decision risk assessment\" (Zhou, Orfanoudaki & Zhu).",
    links: []
  },
  {
    date: "Oct 2025",
    text: "Runner up, 2025 INFORMS HAS Student Paper Competition — \"Data to dose: Efficient synthetic data generation with expert guidance for personalized dosing\" (Verma, Wiberg, Zhu & Tayur).",
    links: []
  },
  {
    date: "Sep 2025",
    text: "\"Quantifying grid resilience against extreme weather using large-scale customer power outage data\" (Zhu, Yao et al.) online at INFORMS Journal on Data Science.",
    links: []
  },
  {
    date: "Aug 2025",
    text: "Best Paper Award, IEEE Power & Energy Society — \"Hierarchical spatio-temporal uncertainty quantification for distributed energy adoption\" (Zhou, Zhu, Qiu & Wu). Results incorporated into the 2025 AES Indiana Integrated Resource Plan.",
    links: []
  },
  {
    date: "Apr 2025",
    text: "Two papers accepted at KDD 2025: \"Counterfactual fairness through transforming data orthogonal to bias\" and \"Conditional generative modeling for high-dimensional marked temporal point processes.\"",
    links: []
  },
  {
    date: "Jan 2025",
    text: "Two papers accepted at AISTATS 2025: \"Recurrent neural goodness-of-fit test for time series\" and \"New user event prediction through the lens of causal inference.\"",
    links: []
  }
];
