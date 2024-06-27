import GroupDto from "../models/groupDto";
import BookDto from "../models/bookDto";
import elementaryAlgebraImg from "../assets/elementary-algebra.jpg";
import preAlgebraImg from "../assets/pre-algebra.jpg";
import discreteMathStructuresImg from "../assets/discreteMathStructuresImg.jpg";
import concreteMathImg from "../assets/concreteMathImg.jpg";
import discreteMathAppsImg from "../assets/discreteMathAppsImg.jpg";
import discreteCombinatorialImg from "../assets/discreteCombinatorialImg.jpg";
import foundationsHigherMathImg from "../assets/foundationsHigherMathImg.jpg";
import howToProveItImg from "../assets/howToProveItImg.jpg";
import introAbstractMathImg from "../assets/introAbstractMathImg.jpg";
import howToReadDoProofsImg from "../assets/howToReadDoProofsImg.jpg";
import precalculusStewartImg from "../assets/precalculusStewartImg.jpg";
import collegeAlgebraImg from "../assets/collegeAlgebraImg.jpg";
import graphicalApproachImg from "../assets/graphicalApproachImg.jpg";
import algebraTrigonometryStewartImg from "../assets/algebraTrigonometryStewartImg.jpg";
import algebraTrigonometrySullivanImg from "../assets/algebraTrigonometrySullivanImg.jpg";
import trigonometryOutlineImg from "../assets/trigonometryOutlineImg.jpg";
import algebraTrigonometryCameronImg from "../assets/algebraTrigonometryCameronImg.jpg";
import preCalculusShanksImg from "../assets/preCalculusShanksImg.jpg";
import trigonometryMcMullenImg from "../assets/trigonometryMcMullenImg.jpg";
import planeTrigonometryImg from "../assets/planeTrigonometryImg.jpg";
import geometryImg from "../assets/geometryImg.jpg";
import calculusSwokowskiImg from "../assets/calculusSwokowskiImg.jpg";
import calculusLarsonImg from "../assets/calculusLarsonImg.jpg";
import thomasCalculusImg from "../assets/thomasCalculusImg.jpg";
import calculusStewartImg from "../assets/calculusStewartImg.jpg";
import calculusMcMullenImg from "../assets/calculusMcMullenImg.jpg";
import calculusMultipleVariablesImg from "../assets/calculusMultipleVariablesImg.jpg";
import schaumsDEImg from "../assets/schaumsDEImg.jpg";
import diffEquationsNagleImg from "../assets/diffEquationsNagleImg.jpg";
import diffEquationsZillImg from "../assets/diffEquationsZillImg.jpg";
import schaumsProbStatsImg from "../assets/schaumsProbStatsImg.jpg";
import elementaryStatsImg from "../assets/elementaryStatsImg.jpg";
import mathStatsDataAnalysisImg from "../assets/mathStatsDataAnalysisImg.jpg";
import firstCourseProbabilityImg from "../assets/firstCourseProbabilityImg.jpg";
import schaumsLinearAlgebraImg from "../assets/schaumsLinearAlgebraImg.jpg";
import elementaryLinearAlgebraImg from "../assets/elementaryLinearAlgebraImg.jpg";
import linearAlgebraHoffmanImg from "../assets/linearAlgebraHoffmanImg.jpg";
import linearAlgebraFriedbergImg from "../assets/linearAlgebraFriedbergImg.jpg";
import schaumsComplexVariablesImg from "../assets/schaumsComplexVariablesImg.jpg";
import complexVariablesBrownChurchillImg from "../assets/complexVariablesBrownChurchillImg.jpg";
import fundamentalsComplexAnalysisImg from "../assets/fundamentalsComplexAnalysisImg.jpg";
import appliedComplexVariablesImg from "../assets/appliedComplexVariablesImg.jpg";
import complexVariablesAblowitzFokasImg from "../assets/complexVariablesAblowitzFokasImg.jpg";
import introPartialDiffEquationsImg from "../assets/introPartialDiffEquationsImg.jpg";
import partialDiffEquationsStraussImg from "../assets/partialDiffEquationsStraussImg.jpg";
import schaumsPartialDiffEquationsImg from "../assets/schaumsPartialDiffEquationsImg.jpg";
import partialDiffEquationsMillerImg from "../assets/partialDiffEquationsMillerImg.jpg";
import firstCourseAbstractAlgebraImg from "../assets/firstCourseAbstractAlgebraImg.jpg";
import contemporaryAbstractAlgebraImg from "../assets/contemporaryAbstractAlgebraImg.jpg";
import abstractAlgebraSaracinoImg from "../assets/abstractAlgebraSaracinoImg.jpg";
import abstractAlgebraBeachyBlairImg from "../assets/abstractAlgebraBeachyBlairImg.jpg";
import abstractAlgebraDummitFooteImg from "../assets/abstractAlgebraDummitFooteImg.jpg";
import algebraArtinImg from "../assets/algebraArtinImg.jpg";
import algebraLangImg from "../assets/algebraLangImg.jpg";
import principlesMathAnalysisImg from "../assets/principlesMathAnalysisImg.jpg";
import advancedCalculusImg from "../assets/advancedCalculusImg.jpg";
import introRealAnalysisImg from "../assets/introRealAnalysisImg.jpg";
import analysisLangImg from "../assets/analysisLangImg.jpg";
import understandingAnalysisImg from "../assets/understandingAnalysisImg.jpg";
import advancedCalculusBuckImg from "../assets/advancedCalculusBuckImg.jpg";
import numberTheoryLongImg from "../assets/numberTheoryLongImg.jpg";
import numberTheoryAndrewsImg from "../assets/numberTheoryAndrewsImg.jpg";
import numberTheoryDudleyImg from "../assets/numberTheoryDudleyImg.jpg";
import graphTheoryImg from "../assets/graphTheoryImg.jpg";
import schaumsTopologyImg from "../assets/schaumsTopologyImg.jpg";
import topologyMendelsonImg from "../assets/topologyMendelsonImg.jpg";
import topologyGamelineGreeneImg from "../assets/topologyGamelineGreeneImg.jpg";
import topologyMunkresImg from "../assets/topologyMunkresImg.jpg";
import mathYouMissedImg from "../assets/mathYouMissedImg.jpg";
import cryptographyImg from "../assets/cryptographyImg.jpg";
import advancedEngineeringMathImg from "../assets/advancedEngineeringMathImg.jpg";
import realComplexAnalysisImg from "../assets/realComplexAnalysisImg.jpg";
import functionalAnalysisImg from "../assets/functionalAnalysisImg.jpg";
import basicMathImg from "../assets/basicMathImg.jpg";

const algebra = new GroupDto(0, "Algebra", [
  new BookDto("Pre-Algebra Mathematics", preAlgebraImg, 0, 36),
  new BookDto("Elementary Algebra", elementaryAlgebraImg, 0, 50),
]);

const discreteMath = new GroupDto(1, "Discrete Math", [
  new BookDto(
    "Discrete Mathematical Structures",
    discreteMathStructuresImg,
    1,
    35
  ),
  new BookDto("Concrete Mathematics", concreteMathImg, 2, 12),
  new BookDto(
    "Discrete Mathematics and its Applications",
    discreteMathAppsImg,
    2,
    55
  ),
  new BookDto(
    "Discrete and Combinatorial Mathematics",
    discreteCombinatorialImg,
    2,
    55
  ),
]);

const proofWriting = new GroupDto(2, "Proof Writing", [
  new BookDto(
    "An Introduction To Abstract Mathematics",
    introAbstractMathImg,
    3,
    46
  ),
  new BookDto(
    "Foundations of Higher Mathematics",
    foundationsHigherMathImg,
    4,
    8
  ),
  new BookDto("How to Read and Do Proofs", howToReadDoProofsImg, 4, 20),
  new BookDto("How To Prove It", howToProveItImg, 4, 32),
]);

const preCalculusTrigonometry = new GroupDto(3, "Pre-Calculus/Trigonometry", [
  new BookDto("Precalculus", precalculusStewartImg, 5, 52),
  new BookDto("College Algebra", collegeAlgebraImg, 6, 18),
  new BookDto(
    "A Graphical Approach To Algebra and Trigonometry",
    graphicalApproachImg,
    6,
    51
  ),
  new BookDto("Algebra and Trigonometry", algebraTrigonometryStewartImg, 7, 17),
  new BookDto(
    "Algebra and Trigonometry",
    algebraTrigonometrySullivanImg,
    7,
    25
  ),
  new BookDto("Schaum's Outlines Trigonometry", trigonometryOutlineImg, 7, 43),
  new BookDto("Algebra and Trigonometry", algebraTrigonometryCameronImg, 8, 5),
  new BookDto("Pre-Calculus Mathematics", preCalculusShanksImg, 8, 20),
  new BookDto("Trigonometry", trigonometryMcMullenImg, 8, 48),
  new BookDto("Plane Trigonometry", planeTrigonometryImg, 9, 28),
]);

const calculus = new GroupDto(4, "Calculus", [
  new BookDto("Calculus With Analytic Geometry", calculusSwokowskiImg, 10, 17),
  new BookDto("Calculus of a Single Variable", calculusLarsonImg, 10, 39),
  new BookDto("Thomas' Calculus", thomasCalculusImg, 10, 58),
  new BookDto("Calculus", calculusStewartImg, 11, 26),
  new BookDto("Essential Calculus Workbook", calculusMcMullenImg, 12, 0),
  new BookDto(
    "Calculus with Multiple Variables Workbook",
    calculusMultipleVariablesImg,
    9,
    46
  ),
]);

const differentialEquations = new GroupDto(5, "Differential Equations", [
  new BookDto("Schaum's Outlines Differential Equations", schaumsDEImg, 13, 31),
  new BookDto("Differential Equations", diffEquationsNagleImg, 13, 58),
  new BookDto(
    "A First Course in Differential Equations",
    diffEquationsZillImg,
    14,
    21
  ),
]);

const probabilityStatistics = new GroupDto(6, "Probability/Statistics", [
  new BookDto(
    "Schaum's Outlines Probability and Statistics",
    schaumsProbStatsImg,
    14,
    54
  ),
  new BookDto("Elementary Statistics", elementaryStatsImg, 15, 9),
  new BookDto(
    "Mathematical Statistics and Data Analysis",
    mathStatsDataAnalysisImg,
    15,
    32
  ),
  new BookDto(
    "A First Course in Probability",
    firstCourseProbabilityImg,
    15,
    58
  ),
]);

const geometry = new GroupDto(7, "Geometry", [
  new BookDto("Geometry", geometryImg, 16, 20),
]);

const linearAlgebra = new GroupDto(8, "Linear Algebra", [
  new BookDto(
    "Schaum's Outlines Linear Algebra",
    schaumsLinearAlgebraImg,
    16,
    44
  ),
  new BookDto("Elementary Linear Algebra", elementaryLinearAlgebraImg, 17, 9),
  new BookDto("Linear Algebra", linearAlgebraHoffmanImg, 18, 5),
  new BookDto("Linear Algebra", linearAlgebraFriedbergImg, 18, 15),
]);

const complexVariables = new GroupDto(9, "Complex Variables", [
  new BookDto(
    "Schaum's Outlines Complex Variables",
    schaumsComplexVariablesImg,
    18,
    52
  ),
  new BookDto(
    "Complex Variables and Applications",
    complexVariablesBrownChurchillImg,
    19,
    19
  ),
  new BookDto(
    "Fundamentals of Complex Analysis ",
    fundamentalsComplexAnalysisImg,
    19,
    53
  ),
  new BookDto("Applied Complex Variables", appliedComplexVariablesImg, 20, 28),
  new BookDto("Complex Variables", complexVariablesAblowitzFokasImg, 20, 50),
]);

const partialDifferentialEquations = new GroupDto(
  10,
  "Partial Differential Equations",
  [
    new BookDto(
      "Introduction to Partial Differential Equations",
      introPartialDiffEquationsImg,
      21,
      38
    ),
    new BookDto(
      "Partial Differential Equations (Strauss)",
      partialDiffEquationsStraussImg,
      21,
      46
    ),
    new BookDto(
      "Schaum's Outline Partial Differential Equations",
      schaumsPartialDiffEquationsImg,
      21,
      58
    ),
    new BookDto(
      "Partial Differential Equations",
      partialDiffEquationsMillerImg,
      22,
      4
    ),
  ]
);

const abstractAlgebra = new GroupDto(11, "Abstract Algebra", [
  new BookDto(
    "A First Course in Abstract Algebra",
    firstCourseAbstractAlgebraImg,
    22,
    26
  ),
  new BookDto(
    "Contemporary Abstract Algebra",
    contemporaryAbstractAlgebraImg,
    22,
    57
  ),
  new BookDto(
    "Abstract Algebra A First Course",
    abstractAlgebraSaracinoImg,
    23,
    27
  ),
  new BookDto(
    "Abstract Algebra with a Concrete Introduction",
    abstractAlgebraBeachyBlairImg,
    23,
    48
  ),
  new BookDto("Abstact Algebra", algebraArtinImg, 24, 28),
  new BookDto(
    "Abstract Algebra (Dummit and Foote)",
    abstractAlgebraDummitFooteImg,
    24,
    49
  ),
  new BookDto("Graduate Texts in Mathematics", algebraLangImg, 25, 20),
]);

const realAnalysis = new GroupDto(12, "Real Analysis", [
  new BookDto(
    "Principles of Mathematical Analysis",
    principlesMathAnalysisImg,
    25,
    53
  ),
  new BookDto("Advanced Calculus", advancedCalculusImg, 26, 35),
  new BookDto("Introduction to Real Analysis", introRealAnalysisImg, 27, 3),
  new BookDto("Analysis 1", analysisLangImg, 27, 37),
  new BookDto("Understanding Analysis", understandingAnalysisImg, 27, 44),
  new BookDto("Advanced Calculus", advancedCalculusBuckImg, 27, 53),
]);

const numberTheory = new GroupDto(13, "Number Theory", [
  new BookDto(
    "Elementary Introduction to Number Theory",
    numberTheoryLongImg,
    28,
    14
  ),
  new BookDto("Number Theory", numberTheoryAndrewsImg, 28, 14),
  new BookDto("Elementary Number Theory", numberTheoryDudleyImg, 28, 14),
]);

const graphTheory = new GroupDto(14, "Graph Theory", [
  new BookDto("Graph Theory", graphTheoryImg, 28, 50),
]);

const topology = new GroupDto(15, "Topology", [
  new BookDto("Schaum's Outlines Topology", schaumsTopologyImg, 29, 33),
  new BookDto("Introduction to Topology", topologyMendelsonImg, 29, 57),
  new BookDto("Introduction to Topology", topologyGamelineGreeneImg, 30, 12),
  new BookDto("Topology", topologyMunkresImg, 30, 31),
]);

const misc = new GroupDto(16, "Misc", [
  new BookDto("All the Math You Missed", mathYouMissedImg, 31, 35),
  new BookDto("Introduction to Cryptography", cryptographyImg, 32, 25),
  new BookDto(
    "Advanced Engineering Mathematics",
    advancedEngineeringMathImg,
    33,
    0
  ),
  new BookDto("Real and Complex Analysis", realComplexAnalysisImg, 34, 11),
  // proof writing and topology first
  new BookDto(
    "Introductory Functional Analysis",
    functionalAnalysisImg,
    34,
    38
  ),
  new BookDto("Basic Mathematics", basicMathImg, 35, 6),
]);

preCalculusTrigonometry.requires(algebra);
calculus.requires(preCalculusTrigonometry);
differentialEquations.requires(calculus);
partialDifferentialEquations.requires(differentialEquations);

probabilityStatistics.requires(calculus);
//probabilityStatistics.requires(discreteMath);
probabilityStatistics.requires(linearAlgebra);

discreteMath.requires(proofWriting);

linearAlgebra.requires(algebra);

complexVariables.requires(realAnalysis);
//complexVariables.requires(linearAlgebra);

//abstractAlgebra.requires(proofWriting);
abstractAlgebra.requires(discreteMath);
abstractAlgebra.requires(linearAlgebra);

realAnalysis.requires(calculus);
realAnalysis.requires(linearAlgebra);
realAnalysis.requires(proofWriting);

//graphTheory.requires(proofWriting);
// graphTheory.requires(linearAlgebra);
//graphTheory.requires(discreteMath); // maybe
graphTheory.requires(abstractAlgebra);

topology.requires(realAnalysis);
topology.requires(discreteMath); // maybe

numberTheory.requires(abstractAlgebra);

export const subjects = [
  algebra,
  discreteMath,
  proofWriting,
  preCalculusTrigonometry,
  calculus,
  differentialEquations,
  probabilityStatistics,
  geometry,
  linearAlgebra,
  complexVariables,
  partialDifferentialEquations,
  abstractAlgebra,
  realAnalysis,
  numberTheory,
  graphTheory,
  topology,
];
