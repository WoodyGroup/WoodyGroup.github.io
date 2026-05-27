/**
 * publications.js — Lab publication database
 *
 * To add a paper:
 *   1. Find the right section (or create a new year section).
 *   2. Copy a paper object and fill in the fields.
 *   3. Save — the page renders automatically from this file.
 *
 * Fields:
 *   title   — string, required
 *   authors — string, required. Use * for equal contribution.
 *   venue   — string, leave "" for preprints
 *   links   — array of { label, url }
 *             common labels: "arXiv", "PDF", "Code", "Slides", "Poster", "News", "Data"
 *   awards  — array of strings (prize / competition recognitions)
 *   notes   — array of strings (workshop versions, acceptance rates, etc.)
 */

const PUBLICATIONS = {
  sections: [

    /* ── Preprints ──────────────────────────────────────────────────────── */
    {
      label: "Preprints and Working Papers",
      papers: [
        {
          title: "Learning polyhedral conformal sets for robust optimization.",
          authors: "S. Chen*, W. Zhou*, and S. Zhu.",
          venue: "",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Learning to Test: Physics-informed representation for dynamical instability detection.",
          authors: "M. Zheng, Z. Deng, L. Xie, and S. Zhu.",
          venue: "",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Large-scale resilience planning for wildfire-prone electricity-system via adaptive robust optimization.",
          authors: "S. Chen, S. Zhu, and R. Sioshansi.",
          venue: "",
          links: [
            { label: "Slides", url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Should humans be in the loop? Human-AI collaboration paradox and automation cliffs.",
          authors: "W. Gu, M. L. Li, and S. Zhu.",
          venue: "",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Score-based change-point detection and region localization for spatio-temporal point processes.",
          authors: "W. Zhou, L. Xie, and S. Zhu.",
          venue: "",
          links: [
            { label: "Code", url: "#" }
          ],
          awards: [
            "Winner, 2026 IISE QCRE Best Track Paper Competition"
          ],
          notes: []
        },
        {
          title: "Impact of power outages on the adoption of residential solar photovoltaics in a changing climate.",
          authors: "J. Zhu, W. Zhou, L. Diaz Anadon, and S. Zhu.",
          venue: "",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Data to dose: Efficient synthetic data generation with expert guidance for personalized dosing.",
          authors: "H. S. Verma, H. Wiberg, S. Zhu, and S. Tayur.",
          venue: "",
          links: [],
          awards: [
            "Runner up, 2025 INFORMS HAS Student Paper Competition"
          ],
          notes: [
            "A short version is accepted by 2025 NeurIPS ML×OR Workshop."
          ]
        },
        {
          title: "Enhancing electricity-system resilience with adaptive robust optimization.",
          authors: "S. Chen, S. Zhu, and R. Sioshansi.",
          venue: "",
          links: [
            { label: "News", url: "#" }
          ],
          awards: [
            "Winner, 2025 INFORMS ENRE Best Student Paper Award"
          ],
          notes: []
        },
        {
          title: "Generative conformal prediction with vectorized non-conformity scores.",
          authors: "M. Zheng and S. Zhu.",
          venue: "",
          links: [
            { label: "Code", url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Balancing optimality and diversity: Human-centered decision-making through generative curation.",
          authors: "M. L. Li and S. Zhu.",
          venue: "",
          links: [
            { label: "Slides", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Generalized Hypercube queuing models with overlapping service regions.",
          authors: "W. Xing, S. Zhu, and Y. Xie.",
          venue: "",
          links: [
            { label: "Code", url: "#" }
          ],
          awards: [
            "1st place, 2026 Clifford Spiegelman Student Paper Competition"
          ],
          notes: []
        }
      ]
    },

    /* ── 2026 ───────────────────────────────────────────────────────────── */
    {
      label: "2026",
      papers: [
        {
          title: "Hierarchical probabilistic conformal prediction for distributed energy resources adoption.",
          authors: "W. Zhou and S. Zhu.",
          venue: "Annals of Applied Statistics. Accepted, 2026.",
          links: [
            { label: "News", url: "#" }
          ],
          awards: [
            "2nd place, 2026 INFORMS Innovative Applications in Analytics Award",
            "Runner up, 2025 INFORMS Data Mining Best Applied Paper"
          ],
          notes: []
        },
        {
          title: "Calibrating decision robustness via inverse conformal risk control.",
          authors: "W. Zhou and S. Zhu.",
          venue: "International Conference on Machine Learning (ICML), 2026.",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Conformalized decision risk assessment.",
          authors: "W. Zhou, A. Orfanoudaki, and S. Zhu.",
          venue: "International Conference on Learning Representations (ICLR), 2026.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Slides", url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [
            "Winner, 2025 YinzOR Poster Competition"
          ],
          notes: [
            "A short version is accepted by 2025 NeurIPS ML×OR Workshop."
          ]
        },
        {
          title: "Gen-DFL: Decision-focused generative learning for robust decision making.",
          authors: "P. Z. Wang, S. Chen, J. Liang, F. Fioretto, and S. Zhu.",
          venue: "International Conference on Learning Representations (ICLR), 2026.",
          links: [
            { label: "arXiv", url: "#" }
          ],
          awards: [
            "Winner, 2026 IISE DAIS Best Track Paper Competition"
          ],
          notes: []
        },
        {
          title: "Global-decision-focused neural ODEs for proactive grid resilience management.",
          authors: "S. Chen, F. Fioretto, F. Qiu, and S. Zhu.",
          venue: "IEEE Transactions on Smart Grid. Vol. 17, No. 3, Pages 2506–2516, May 2026.",
          links: [
            { label: "arXiv", url: "#" },
            { label: "Code",  url: "#" }
          ],
          awards: [],
          notes: []
        }
      ]
    },

    /* ── 2025 ───────────────────────────────────────────────────────────── */
    {
      label: "2025",
      papers: [
        {
          title: "TimeAutoDiff: A unified framework for generation, imputation, and forecasting of time series tabular data.",
          authors: "N. Suh, Y. Yang, D. Y. Hsieh, Q. Luan, S. Xu, S. Zhu, and G. Cheng.",
          venue: "Transactions on Machine Learning Research (TMLR), Dec 2025.",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Topology-aware conformal prediction for stream networks.",
          authors: "J. Zhang*, F. Wang*, Z. Song, P. S. Yu, K. Ding, and S. Zhu.",
          venue: "Annual Conference on Neural Information Processing Systems (NeurIPS), 2025.",
          links: [
            { label: "arXiv", url: "#" },
            { label: "Code",  url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Sequential change point detection via denoising score matching.",
          authors: "W. Zhou, L. Xie, Z. Peng, and S. Zhu.",
          venue: "Allerton Conference on Communication, Control, and Computing, 2025.",
          links: [
            { label: "arXiv", url: "#" },
            { label: "Code",  url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Quantifying grid resilience against extreme weather using large-scale customer power outage data.",
          authors: "S. Zhu, R. Yao, Y. Xie, F. Qiu, Y. Qiu, and X. Wu.",
          venue: "INFORMS Journal on Data Science. Ahead of Print, Sep 2025.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" },
            { label: "News",   url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Counterfactual fairness through transforming data orthogonal to bias.",
          authors: "S. Chen and S. Zhu.",
          venue: "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD), 2025.",
          links: [
            { label: "arXiv", url: "#" },
            { label: "Code",  url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Conditional generative modeling for high-dimensional marked temporal point processes.",
          authors: "Z. Dong, Z. Fan, and S. Zhu.",
          venue: "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD), 2025.",
          links: [
            { label: "arXiv", url: "#" },
            { label: "Code",  url: "#" }
          ],
          awards: [],
          notes: [
            "A short version is accepted by NeurIPS 2023 Workshop on SyntheticData4ML."
          ]
        },
        {
          title: "Hierarchical spatio-temporal uncertainty quantification for distributed energy adoption.",
          authors: "W. Zhou, S. Zhu, F. Qiu, and X. Wu.",
          venue: "IEEE Power & Energy Society General Meeting (PESGM), 2025.",
          links: [],
          awards: [
            "Best Paper Award, IEEE Power & Energy Society"
          ],
          notes: [
            "The results were incorporated into the 2025 AES Indiana Integrated Resource Plan (Vol 3)."
          ]
        },
        {
          title: "Recurrent neural goodness-of-fit test for time series.",
          authors: "A. Zhang, W. Zhou, L. Xie, and S. Zhu.",
          venue: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2025.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "New user event prediction through the lens of causal inference.",
          authors: "H. S. Yuchi, S. Zhu, L. Dong, Y. M. Arisoy, and M. C. Spencer.",
          venue: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2025.",
          links: [
            { label: "arXiv", url: "#" },
            { label: "Data",  url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Uncertainty-aware robust learning on noisy graphs.",
          authors: "S. Chen, K. Ding, and S. Zhu.",
          venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [],
          notes: []
        },
        {
          title: "Black-box optimization with implicit constraints for public policy.",
          authors: "W. Xing, J. Lee, C. Liu, and S. Zhu.",
          venue: "The AAAI Conference on Artificial Intelligence (AAAI), 2025.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [],
          notes: [
            "A short version is accepted as a referred paper for 2024 INFORMS Optimization Society Conference.",
            "Oral presentation (Special Track on AI for Social Impact), acceptance rate: 23/469 = 4.9%."
          ]
        }
      ]
    },

    /* ── 2023–2024 ──────────────────────────────────────────────────────── */
    {
      label: "2023 – 2024",
      papers: [
        {
          title: "Counterfactual generative models for time-varying treatments.",
          authors: "S. Wu, W. Zhou, M. Chen, and S. Zhu.",
          venue: "ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD), 2024.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Slides", url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [
            "Spotlight, DGM4H Workshop at NeurIPS 2023 (5 out of 44 accepted papers)",
            "Winner, 2023 YinzOR Poster Competition"
          ],
          notes: [
            "A short version is accepted by Causal Representation Learning Workshop at NeurIPS 2023."
          ]
        },
        {
          title: "Assessing electricity service unfairness with transfer counterfactual learning.",
          authors: "S. Wei, X. Kong, A. Santos Xavier, S. Zhu, Y. Xie, and F. Qiu.",
          venue: "Causal Representation Learning Workshop at NeurIPS 2023.",
          links: [],
          awards: [],
          notes: []
        },
        {
          title: "Non-stationary spatio-temporal point process modeling for high-resolution COVID-19 data.",
          authors: "Z. Dong, S. Zhu, Y. Xie, J. Mateu, and F. J. Rodríguez-Cortés.",
          venue: "Journal of the Royal Statistical Society, Series C. Vol. 72, Issue 2, Pages 368–386, May 2023.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Poster", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [
            "Winner, 2022 INFORMS Data Mining Best Applied Paper",
            "Runner up, 2022 INFORMS Poster Competition"
          ],
          notes: [
            "Accepted for presentation at 2022 INFORMS Workshop on Data Science."
          ]
        },
        {
          title: "Sequential adversarial anomaly detection for one-class event data.",
          authors: "S. Zhu, H. S. Yuchi, M. Zhang, and Y. Xie.",
          venue: "INFORMS Journal on Data Science. Vol. 2, No. 1, Pages 45–59, Mar 2023.",
          links: [
            { label: "arXiv",  url: "#" },
            { label: "Slides", url: "#" },
            { label: "Code",   url: "#" }
          ],
          awards: [
            "Runner up, Best Applied Paper Competition at 2020 INFORMS DMDA Workshop"
          ],
          notes: []
        },
        {
          title: "Multi-resolution spatio-temporal prediction with application to wind power generation.",
          authors: "Z. Dong, H. Zhang, S. Zhu, Y. Xie, and P. Van Hentenryck.",
          venue: "",
          links: [
            { label: "Slides", url: "#" },
            { label: "Poster", url: "#" }
          ],
          awards: [
            "Finalist, 2023 QSR Best Student Paper Competition",
            "Finalist, Best Applied Paper Competition at 2023 INFORMS DMDA Workshop",
            "Best Student Paper Nominee & full presentation at 2022 INFORMS Workshop on Data Science"
          ],
          notes: []
        }
      ]
    }

  ] /* end sections */
}; /* end PUBLICATIONS */
