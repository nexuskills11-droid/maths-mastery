const formulas = [
  // ============================================================
  // REAL NUMBERS (topicId: 'real-numbers')
  // ============================================================
  {
    id: 1,
    topicId: 'real-numbers',
    name: "Euclid's Division Lemma",
    formula: 'a = bq + r, \\; 0 \\leq r < b',
    description:
      'For any positive integer a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.',
    category: 'theorem',
  },
  {
    id: 2,
    topicId: 'real-numbers',
    name: 'Fundamental Theorem of Arithmetic',
    formula:
      'n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}',
    description:
      'Every composite number can be expressed as a product of prime numbers in a unique way, apart from the order of factors.',
    category: 'theorem',
  },
  {
    id: 3,
    topicId: 'real-numbers',
    name: 'HCF × LCM Property',
    formula: '\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b',
    description:
      'For any two positive integers a and b, the product of their HCF and LCM equals the product of the two numbers.',
    category: 'property',
  },
  {
    id: 4,
    topicId: 'real-numbers',
    name: 'Irrationality of √2',
    formula: '\\sqrt{2} \\neq \\frac{p}{q}, \\; \\gcd(p, q) = 1',
    description:
      '√2 is irrational — it cannot be expressed in the form p/q where p and q are co-prime integers.',
    category: 'theorem',
  },
  {
    id: 5,
    topicId: 'real-numbers',
    name: 'Terminating Decimal Condition',
    formula:
      '\\frac{p}{q} \\text{ terminates} \\iff q = 2^m \\times 5^n',
    description:
      'A rational number p/q has a terminating decimal expansion if and only if the prime factorisation of q is of the form 2ᵐ × 5ⁿ.',
    category: 'theorem',
  },

  // ============================================================
  // POLYNOMIALS (topicId: 'polynomials')
  // ============================================================
  {
    id: 6,
    topicId: 'polynomials',
    name: 'Sum of Zeros (Quadratic)',
    formula:
      '\\alpha + \\beta = -\\frac{b}{a}',
    description:
      'For a quadratic polynomial ax² + bx + c, the sum of its zeros α and β equals −b/a.',
    category: 'property',
  },
  {
    id: 7,
    topicId: 'polynomials',
    name: 'Product of Zeros (Quadratic)',
    formula:
      '\\alpha \\beta = \\frac{c}{a}',
    description:
      'For a quadratic polynomial ax² + bx + c, the product of its zeros α and β equals c/a.',
    category: 'property',
  },
  {
    id: 8,
    topicId: 'polynomials',
    name: 'Quadratic Polynomial from Zeros',
    formula:
      'p(x) = x^2 - (\\alpha + \\beta)x + \\alpha\\beta',
    description:
      'A quadratic polynomial whose zeros are α and β can be written as x² − (sum of zeros)x + (product of zeros).',
    category: 'formula',
  },
  {
    id: 9,
    topicId: 'polynomials',
    name: 'Algebraic Identity — Square of Sum',
    formula: '(a + b)^2 = a^2 + 2ab + b^2',
    description:
      'The square of the sum of two terms equals the sum of their squares plus twice their product.',
    category: 'identity',
  },
  {
    id: 10,
    topicId: 'polynomials',
    name: 'Algebraic Identity — Square of Difference',
    formula: '(a - b)^2 = a^2 - 2ab + b^2',
    description:
      'The square of the difference of two terms equals the sum of their squares minus twice their product.',
    category: 'identity',
  },
  {
    id: 11,
    topicId: 'polynomials',
    name: 'Algebraic Identity — Difference of Squares',
    formula: 'a^2 - b^2 = (a + b)(a - b)',
    description:
      'The difference of two squares can be factored as the product of their sum and difference.',
    category: 'identity',
  },
  {
    id: 12,
    topicId: 'polynomials',
    name: 'Remainder Theorem',
    formula: '\\text{Remainder} = p(a), \\; \\text{when } p(x) \\div (x - a)',
    description:
      'When a polynomial p(x) is divided by (x − a), the remainder is p(a).',
    category: 'theorem',
  },
  {
    id: 13,
    topicId: 'polynomials',
    name: 'Factor Theorem',
    formula: '(x - a) \\text{ is a factor of } p(x) \\iff p(a) = 0',
    description:
      '(x − a) is a factor of polynomial p(x) if and only if p(a) = 0.',
    category: 'theorem',
  },
  {
    id: 14,
    topicId: 'polynomials',
    name: 'Division Algorithm for Polynomials',
    formula: 'p(x) = g(x) \\cdot q(x) + r(x)',
    description:
      'If p(x) and g(x) are polynomials with g(x) ≠ 0, then there exist polynomials q(x) and r(x) such that p(x) = g(x)·q(x) + r(x), where degree of r(x) < degree of g(x).',
    category: 'theorem',
  },
  {
    id: 15,
    topicId: 'polynomials',
    name: 'Cubic — Sum of Zeros',
    formula:
      '\\alpha + \\beta + \\gamma = -\\frac{b}{a}',
    description:
      'For a cubic polynomial ax³ + bx² + cx + d, the sum of zeros equals −b/a.',
    category: 'property',
  },
  {
    id: 16,
    topicId: 'polynomials',
    name: 'Cubic — Sum of Product of Zeros (pairwise)',
    formula:
      '\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}',
    description:
      'For a cubic polynomial ax³ + bx² + cx + d, the sum of the products of zeros taken two at a time equals c/a.',
    category: 'property',
  },
  {
    id: 17,
    topicId: 'polynomials',
    name: 'Cubic — Product of Zeros',
    formula:
      '\\alpha\\beta\\gamma = -\\frac{d}{a}',
    description:
      'For a cubic polynomial ax³ + bx² + cx + d, the product of all three zeros equals −d/a.',
    category: 'property',
  },

  // ============================================================
  // LINEAR EQUATIONS (topicId: 'linear-equations')
  // ============================================================
  {
    id: 18,
    topicId: 'linear-equations',
    name: 'General Form of Linear Pair',
    formula:
      'a_1x + b_1y + c_1 = 0 \\;\\text{ and }\\; a_2x + b_2y + c_2 = 0',
    description:
      'A pair of linear equations in two variables x and y in the standard form.',
    category: 'formula',
  },
  {
    id: 19,
    topicId: 'linear-equations',
    name: 'Consistent — Unique Solution',
    formula:
      '\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}',
    description:
      'The system has exactly one (unique) solution; the lines intersect at a single point.',
    category: 'property',
  },
  {
    id: 20,
    topicId: 'linear-equations',
    name: 'Dependent — Infinitely Many Solutions',
    formula:
      '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}',
    description:
      'The system has infinitely many solutions; the lines are coincident (overlap).',
    category: 'property',
  },
  {
    id: 21,
    topicId: 'linear-equations',
    name: 'Inconsistent — No Solution',
    formula:
      '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}',
    description:
      'The system has no solution; the lines are parallel and never intersect.',
    category: 'property',
  },
  {
    id: 22,
    topicId: 'linear-equations',
    name: 'Cross-Multiplication Method',
    formula:
      '\\frac{x}{b_1c_2 - b_2c_1} = \\frac{y}{c_1a_2 - c_2a_1} = \\frac{1}{a_1b_2 - a_2b_1}',
    description:
      'A direct formula to solve a pair of linear equations using cross-multiplication of coefficients.',
    category: 'formula',
  },

  // ============================================================
  // QUADRATIC EQUATIONS (topicId: 'quadratic-equations')
  // ============================================================
  {
    id: 23,
    topicId: 'quadratic-equations',
    name: 'Standard Form',
    formula: 'ax^2 + bx + c = 0, \\; a \\neq 0',
    description:
      'The general form of a quadratic equation where a, b, c are real numbers and a ≠ 0.',
    category: 'formula',
  },
  {
    id: 24,
    topicId: 'quadratic-equations',
    name: 'Quadratic Formula (Shreedharacharya)',
    formula:
      'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description:
      'Gives the roots of a quadratic equation ax² + bx + c = 0 directly using the coefficients.',
    category: 'formula',
  },
  {
    id: 25,
    topicId: 'quadratic-equations',
    name: 'Discriminant',
    formula: 'D = b^2 - 4ac',
    description:
      'The discriminant determines the nature and number of roots of a quadratic equation.',
    category: 'formula',
  },
  {
    id: 26,
    topicId: 'quadratic-equations',
    name: 'Nature of Roots — Two Distinct Real Roots',
    formula: 'D > 0 \\implies \\text{Two distinct real roots}',
    description:
      'When the discriminant is positive, the quadratic has two distinct (unequal) real roots.',
    category: 'property',
  },
  {
    id: 27,
    topicId: 'quadratic-equations',
    name: 'Nature of Roots — Two Equal Real Roots',
    formula: 'D = 0 \\implies \\text{Two equal real roots}',
    description:
      'When the discriminant is zero, the quadratic has two equal (repeated) real roots: x = −b/(2a).',
    category: 'property',
  },
  {
    id: 28,
    topicId: 'quadratic-equations',
    name: 'Nature of Roots — No Real Roots',
    formula: 'D < 0 \\implies \\text{No real roots}',
    description:
      'When the discriminant is negative, the quadratic has no real roots (roots are imaginary).',
    category: 'property',
  },
  {
    id: 29,
    topicId: 'quadratic-equations',
    name: 'Sum of Roots',
    formula: '\\alpha + \\beta = -\\frac{b}{a}',
    description:
      'The sum of the roots of ax² + bx + c = 0 equals −b/a.',
    category: 'property',
  },
  {
    id: 30,
    topicId: 'quadratic-equations',
    name: 'Product of Roots',
    formula: '\\alpha \\beta = \\frac{c}{a}',
    description:
      'The product of the roots of ax² + bx + c = 0 equals c/a.',
    category: 'property',
  },

  // ============================================================
  // ARITHMETIC PROGRESSIONS (topicId: 'arithmetic-progressions')
  // ============================================================
  {
    id: 31,
    topicId: 'arithmetic-progressions',
    name: 'Common Difference',
    formula: 'd = a_{n} - a_{n-1}',
    description:
      'The common difference d of an AP is the difference between any term and its preceding term.',
    category: 'formula',
  },
  {
    id: 32,
    topicId: 'arithmetic-progressions',
    name: 'nth Term of an AP',
    formula: 'a_n = a + (n - 1)d',
    description:
      'The nth term of an AP with first term a and common difference d.',
    category: 'formula',
  },
  {
    id: 33,
    topicId: 'arithmetic-progressions',
    name: 'Sum of First n Terms',
    formula: 'S_n = \\frac{n}{2}\\left[2a + (n - 1)d\\right]',
    description:
      'The sum of the first n terms of an AP with first term a and common difference d.',
    category: 'formula',
  },
  {
    id: 34,
    topicId: 'arithmetic-progressions',
    name: 'Sum of n Terms (using last term)',
    formula: 'S_n = \\frac{n}{2}(a + l)',
    description:
      'An alternative formula for the sum when the last term l is known. Here a is the first term.',
    category: 'formula',
  },
  {
    id: 35,
    topicId: 'arithmetic-progressions',
    name: 'nth Term from Sum',
    formula: 'a_n = S_n - S_{n-1}',
    description:
      'The nth term of an AP can be found by subtracting the sum of first (n−1) terms from the sum of first n terms.',
    category: 'formula',
  },
  {
    id: 36,
    topicId: 'arithmetic-progressions',
    name: 'Sum of First n Natural Numbers',
    formula: 'S = \\frac{n(n + 1)}{2}',
    description:
      'The sum of the first n natural numbers 1, 2, 3, …, n.',
    category: 'formula',
  },

  // ============================================================
  // TRIANGLES (topicId: 'triangles')
  // ============================================================
  {
    id: 37,
    topicId: 'triangles',
    name: 'Basic Proportionality Theorem (BPT / Thales)',
    formula:
      '\\frac{AD}{DB} = \\frac{AE}{EC}',
    description:
      'If a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.',
    category: 'theorem',
  },
  {
    id: 38,
    topicId: 'triangles',
    name: 'Converse of BPT',
    formula:
      '\\frac{AD}{DB} = \\frac{AE}{EC} \\implies DE \\parallel BC',
    description:
      'If a line divides two sides of a triangle in the same ratio, then the line is parallel to the third side.',
    category: 'theorem',
  },
  {
    id: 39,
    topicId: 'triangles',
    name: 'AA Similarity Criterion',
    formula:
      '\\angle A = \\angle P, \\; \\angle B = \\angle Q \\implies \\triangle ABC \\sim \\triangle PQR',
    description:
      'If two angles of one triangle are equal to two angles of another, the triangles are similar.',
    category: 'theorem',
  },
  {
    id: 40,
    topicId: 'triangles',
    name: 'SSS Similarity Criterion',
    formula:
      '\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{CA}{RP} \\implies \\triangle ABC \\sim \\triangle PQR',
    description:
      'If the corresponding sides of two triangles are proportional, the triangles are similar.',
    category: 'theorem',
  },
  {
    id: 41,
    topicId: 'triangles',
    name: 'SAS Similarity Criterion',
    formula:
      '\\frac{AB}{PQ} = \\frac{AC}{PR}, \\; \\angle A = \\angle P \\implies \\triangle ABC \\sim \\triangle PQR',
    description:
      'If one angle is equal and the sides including that angle are proportional, the triangles are similar.',
    category: 'theorem',
  },
  {
    id: 42,
    topicId: 'triangles',
    name: 'Area Ratio of Similar Triangles',
    formula:
      '\\frac{\\text{ar}(\\triangle ABC)}{\\text{ar}(\\triangle PQR)} = \\frac{AB^2}{PQ^2} = \\frac{BC^2}{QR^2} = \\frac{CA^2}{RP^2}',
    description:
      'The ratio of areas of two similar triangles equals the square of the ratio of their corresponding sides.',
    category: 'theorem',
  },
  {
    id: 43,
    topicId: 'triangles',
    name: 'Pythagoras Theorem',
    formula: 'AC^2 = AB^2 + BC^2',
    description:
      'In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.',
    category: 'theorem',
  },
  {
    id: 44,
    topicId: 'triangles',
    name: 'Converse of Pythagoras Theorem',
    formula:
      'AC^2 = AB^2 + BC^2 \\implies \\angle B = 90°',
    description:
      'If the square of one side equals the sum of the squares of the other two sides, the angle between those two sides is 90°.',
    category: 'theorem',
  },

  // ============================================================
  // CIRCLES (topicId: 'circles')
  // ============================================================
  {
    id: 45,
    topicId: 'circles',
    name: 'Tangent Perpendicular to Radius',
    formula: 'OA \\perp PA \\; (\\text{at point of contact } A)',
    description:
      'A tangent to a circle is perpendicular to the radius drawn to the point of contact.',
    category: 'theorem',
  },
  {
    id: 46,
    topicId: 'circles',
    name: 'Tangent Lengths from External Point',
    formula: 'PA = PB',
    description:
      'The lengths of two tangents drawn from an external point to a circle are equal.',
    category: 'theorem',
  },
  {
    id: 47,
    topicId: 'circles',
    name: 'Angle Between Tangent and Chord',
    formula:
      '\\angle \\text{(tangent, chord)} = \\angle \\text{(in alternate segment)}',
    description:
      'The angle between a tangent and a chord at the point of contact equals the angle in the alternate segment.',
    category: 'theorem',
  },
  {
    id: 48,
    topicId: 'circles',
    name: 'Arc Length',
    formula: 'l = \\frac{\\theta}{360°} \\times 2\\pi r',
    description:
      'The length of an arc that subtends angle θ at the centre of a circle with radius r.',
    category: 'formula',
  },
  {
    id: 49,
    topicId: 'circles',
    name: 'Area of Sector',
    formula: 'A = \\frac{\\theta}{360°} \\times \\pi r^2',
    description:
      'The area of a sector with central angle θ and radius r.',
    category: 'formula',
  },
  {
    id: 50,
    topicId: 'circles',
    name: 'Area of Segment',
    formula:
      'A = \\frac{\\theta}{360°} \\times \\pi r^2 - \\frac{1}{2} r^2 \\sin\\theta',
    description:
      'Area of a segment = Area of sector − Area of the corresponding triangle.',
    category: 'formula',
  },
  {
    id: 51,
    topicId: 'circles',
    name: 'Circumference of a Circle',
    formula: 'C = 2\\pi r',
    description:
      'The total length of the boundary (perimeter) of a circle with radius r.',
    category: 'formula',
  },
  {
    id: 52,
    topicId: 'circles',
    name: 'Area of a Circle',
    formula: 'A = \\pi r^2',
    description:
      'The area enclosed by a circle of radius r.',
    category: 'formula',
  },

  // ============================================================
  // TRIGONOMETRY (topicId: 'trigonometry')
  // ============================================================
  {
    id: 53,
    topicId: 'trigonometry',
    name: 'Sine Ratio',
    formula:
      '\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}',
    description:
      'The sine of an angle equals the ratio of the side opposite to the angle to the hypotenuse.',
    category: 'formula',
  },
  {
    id: 54,
    topicId: 'trigonometry',
    name: 'Cosine Ratio',
    formula:
      '\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}',
    description:
      'The cosine of an angle equals the ratio of the adjacent side to the hypotenuse.',
    category: 'formula',
  },
  {
    id: 55,
    topicId: 'trigonometry',
    name: 'Tangent Ratio',
    formula:
      '\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin\\theta}{\\cos\\theta}',
    description:
      'The tangent of an angle equals the ratio of the opposite side to the adjacent side.',
    category: 'formula',
  },
  {
    id: 56,
    topicId: 'trigonometry',
    name: 'Cosecant Ratio',
    formula:
      '\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{\\text{Hypotenuse}}{\\text{Opposite}}',
    description:
      'The cosecant is the reciprocal of sine.',
    category: 'formula',
  },
  {
    id: 57,
    topicId: 'trigonometry',
    name: 'Secant Ratio',
    formula:
      '\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{\\text{Hypotenuse}}{\\text{Adjacent}}',
    description:
      'The secant is the reciprocal of cosine.',
    category: 'formula',
  },
  {
    id: 58,
    topicId: 'trigonometry',
    name: 'Cotangent Ratio',
    formula:
      '\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\text{Adjacent}}{\\text{Opposite}}',
    description:
      'The cotangent is the reciprocal of tangent.',
    category: 'formula',
  },
  {
    id: 59,
    topicId: 'trigonometry',
    name: 'Pythagorean Identity I',
    formula: '\\sin^2\\theta + \\cos^2\\theta = 1',
    description:
      'The most fundamental trigonometric identity — valid for all values of θ.',
    category: 'identity',
  },
  {
    id: 60,
    topicId: 'trigonometry',
    name: 'Pythagorean Identity II',
    formula: '1 + \\tan^2\\theta = \\sec^2\\theta',
    description:
      'Derived from dividing the first identity by cos²θ. Valid when cos θ ≠ 0.',
    category: 'identity',
  },
  {
    id: 61,
    topicId: 'trigonometry',
    name: 'Pythagorean Identity III',
    formula: '1 + \\cot^2\\theta = \\csc^2\\theta',
    description:
      'Derived from dividing the first identity by sin²θ. Valid when sin θ ≠ 0.',
    category: 'identity',
  },
  {
    id: 62,
    topicId: 'trigonometry',
    name: 'Complementary Angle — sin / cos',
    formula:
      '\\sin(90° - \\theta) = \\cos\\theta, \\quad \\cos(90° - \\theta) = \\sin\\theta',
    description:
      'Sine of an angle equals cosine of its complement and vice versa.',
    category: 'property',
  },
  {
    id: 63,
    topicId: 'trigonometry',
    name: 'Complementary Angle — tan / cot',
    formula:
      '\\tan(90° - \\theta) = \\cot\\theta, \\quad \\cot(90° - \\theta) = \\tan\\theta',
    description:
      'Tangent of an angle equals cotangent of its complement and vice versa.',
    category: 'property',
  },
  {
    id: 64,
    topicId: 'trigonometry',
    name: 'Complementary Angle — sec / csc',
    formula:
      '\\sec(90° - \\theta) = \\csc\\theta, \\quad \\csc(90° - \\theta) = \\sec\\theta',
    description:
      'Secant of an angle equals cosecant of its complement and vice versa.',
    category: 'property',
  },
  {
    id: 65,
    topicId: 'trigonometry',
    name: 'Standard Values Table',
    formula:
      '\\sin 0° = 0,\\; \\sin 30° = \\tfrac{1}{2},\\; \\sin 45° = \\tfrac{\\sqrt{2}}{2},\\; \\sin 60° = \\tfrac{\\sqrt{3}}{2},\\; \\sin 90° = 1',
    description:
      'Standard values of sin θ for θ = 0°, 30°, 45°, 60°, 90°. Other ratios can be derived from these.',
    category: 'property',
  },

  // ============================================================
  // COORDINATE GEOMETRY (topicId: 'coordinate-geometry')
  // ============================================================
  {
    id: 66,
    topicId: 'coordinate-geometry',
    name: 'Distance Formula',
    formula:
      'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}',
    description:
      'The distance between two points (x₁, y₁) and (x₂, y₂) in a Cartesian plane.',
    category: 'formula',
  },
  {
    id: 67,
    topicId: 'coordinate-geometry',
    name: 'Section Formula (Internal Division)',
    formula:
      '\\left(\\frac{m x_2 + n x_1}{m + n}, \\; \\frac{m y_2 + n y_1}{m + n}\\right)',
    description:
      'Coordinates of the point dividing the line segment joining (x₁,y₁) and (x₂,y₂) internally in the ratio m:n.',
    category: 'formula',
  },
  {
    id: 68,
    topicId: 'coordinate-geometry',
    name: 'Midpoint Formula',
    formula:
      'M = \\left(\\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2}\\right)',
    description:
      'The midpoint of the line segment joining (x₁,y₁) and (x₂,y₂). A special case of the section formula with m:n = 1:1.',
    category: 'formula',
  },
  {
    id: 69,
    topicId: 'coordinate-geometry',
    name: 'Area of a Triangle (Coordinate)',
    formula:
      'A = \\frac{1}{2} \\left| x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \\right|',
    description:
      'Area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃). If area = 0, the points are collinear.',
    category: 'formula',
  },
  {
    id: 70,
    topicId: 'coordinate-geometry',
    name: 'Collinearity Condition',
    formula:
      'x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) = 0',
    description:
      'Three points are collinear (lie on the same line) if the area of the triangle formed by them is zero.',
    category: 'property',
  },
  {
    id: 71,
    topicId: 'coordinate-geometry',
    name: 'Centroid of a Triangle',
    formula:
      'G = \\left(\\frac{x_1 + x_2 + x_3}{3}, \\; \\frac{y_1 + y_2 + y_3}{3}\\right)',
    description:
      'The centroid (intersection of medians) of a triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃).',
    category: 'formula',
  },

  // ============================================================
  // SURFACE AREAS & VOLUMES (topicId: 'surface-areas-volumes')
  // ============================================================
  {
    id: 72,
    topicId: 'surface-areas-volumes',
    name: 'Cylinder Curved Surface Area',
    formula: '\\text{CSA} = 2\\pi rh',
    description: 'The curved surface area of a cylinder of radius r and height h.',
    category: 'formula',
  },
  {
    id: 73,
    topicId: 'surface-areas-volumes',
    name: 'Cylinder Volume',
    formula: 'V = \\pi r^2 h',
    description: 'The volume of a cylinder of radius r and height h.',
    category: 'formula',
  },
  {
    id: 74,
    topicId: 'surface-areas-volumes',
    name: 'Cone Slant Height',
    formula: 'l = \\sqrt{r^2 + h^2}',
    description: 'The slant height of a cone of radius r and height h.',
    category: 'formula',
  },
  {
    id: 75,
    topicId: 'surface-areas-volumes',
    name: 'Cone Curved Surface Area',
    formula: '\\text{CSA} = \\pi rl',
    description: 'The curved surface area of a cone of radius r and slant height l.',
    category: 'formula',
  },
  {
    id: 76,
    topicId: 'surface-areas-volumes',
    name: 'Cone Volume',
    formula: 'V = \\frac{1}{3}\\pi r^2 h',
    description: 'The volume of a cone of radius r and height h.',
    category: 'formula',
  },
  {
    id: 77,
    topicId: 'surface-areas-volumes',
    name: 'Sphere Surface Area',
    formula: 'A = 4\\pi r^2',
    description: 'The surface area of a sphere of radius r.',
    category: 'formula',
  },
  {
    id: 78,
    topicId: 'surface-areas-volumes',
    name: 'Sphere Volume',
    formula: 'V = \\frac{4}{3}\\pi r^3',
    description: 'The volume of a sphere of radius r.',
    category: 'formula',
  },
  {
    id: 79,
    topicId: 'surface-areas-volumes',
    name: 'Hemisphere Curved Surface Area',
    formula: '\\text{CSA} = 2\\pi r^2',
    description: 'The curved surface area of a hemisphere of radius r.',
    category: 'formula',
  },
  {
    id: 80,
    topicId: 'surface-areas-volumes',
    name: 'Hemisphere Volume',
    formula: 'V = \\frac{2}{3}\\pi r^3',
    description: 'The volume of a hemisphere of radius r.',
    category: 'formula',
  },

  // ============================================================
  // STATISTICS (topicId: 'statistics')
  // ============================================================
  {
    id: 81,
    topicId: 'statistics',
    name: 'Mean — Direct Method',
    formula: '\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}',
    description: 'The arithmetic mean of grouped data using the direct method, where xᵢ are class marks and fᵢ are frequencies.',
    category: 'formula',
  },
  {
    id: 82,
    topicId: 'statistics',
    name: 'Mean — Assumed Mean Method',
    formula: '\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i}, \\quad d_i = x_i - a',
    description: 'Mean using assumed mean a, where dᵢ = xᵢ − a are deviations from the assumed mean.',
    category: 'formula',
  },
  {
    id: 83,
    topicId: 'statistics',
    name: 'Mean — Step-Deviation Method',
    formula: '\\bar{x} = a + h \\cdot \\frac{\\sum f_i u_i}{\\sum f_i}, \\quad u_i = \\frac{x_i - a}{h}',
    description: 'Most efficient method for large values. Here h is the class width, a is the assumed mean, and uᵢ = (xᵢ − a)/h.',
    category: 'formula',
  },
  {
    id: 84,
    topicId: 'statistics',
    name: 'Median of Grouped Data',
    formula: '\\text{Median} = l + \\left(\\frac{\\frac{n}{2} - cf}{f}\\right) \\times h',
    description: 'l = lower limit of median class, n = total frequency, cf = cumulative frequency before median class, f = frequency of median class, h = class width.',
    category: 'formula',
  },
  {
    id: 85,
    topicId: 'statistics',
    name: 'Mode of Grouped Data',
    formula: '\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h',
    description: 'l = lower limit of modal class, f₁ = frequency of modal class, f₀ = frequency of class before modal, f₂ = frequency of class after modal, h = class width.',
    category: 'formula',
  },
  {
    id: 86,
    topicId: 'statistics',
    name: 'Empirical Relationship',
    formula: '3 \\times \\text{Median} = \\text{Mode} + 2 \\times \\text{Mean}',
    description: 'An approximate empirical relationship between the three measures of central tendency for moderately skewed distributions.',
    category: 'formula',
  },

  // ============================================================
  // PROBABILITY (topicId: 'probability')
  // ============================================================
  {
    id: 87,
    topicId: 'probability',
    name: 'Probability of an Event',
    formula: 'P(E) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of outcomes}}',
    description: 'The theoretical (classical) probability of an event E, where all outcomes are equally likely.',
    category: 'formula',
  },
  {
    id: 88,
    topicId: 'probability',
    name: 'Complementary Probability',
    formula: 'P(\\bar{E}) = 1 - P(E)',
    description: 'The probability that event E does NOT occur equals 1 minus the probability that it does occur.',
    category: 'property',
  },
  {
    id: 89,
    topicId: 'probability',
    name: 'Probability Range',
    formula: '0 \\leq P(E) \\leq 1',
    description: 'The probability of any event always lies between 0 (impossible) and 1 (certain), inclusive.',
    category: 'property',
  },
  {
    id: 90,
    topicId: 'probability',
    name: 'Sum of Probabilities',
    formula: 'P(E) + P(\\bar{E}) = 1',
    description: 'The sum of the probabilities of an event and its complement is always 1.',
    category: 'property',
  }
];
