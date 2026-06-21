// ============================================================================
// Math Mastery 10 — Complete NCERT Class 10 Topics Data
// ============================================================================

const topics = [
  // ========================================================================
  // 1. REAL NUMBERS
  // ========================================================================
  {
    id: 'real-numbers',
    name: 'Real Numbers',
    icon: '🔢',
    color: '#C1E8FF',
    description:
      'Explore the fundamental building blocks of mathematics — Euclid\'s division algorithm, the Fundamental Theorem of Arithmetic, and proofs of irrationality.',
    chapters: 'Chapter 1',
    theory: [
      {
        title: "Euclid's Division Lemma",
        content: `For any two positive integers \\(a\\) and \\(b\\), there exist unique integers \\(q\\) and \\(r\\) such that:

\\[a = bq + r, \\quad 0 \\le r < b\\]

This lemma is the foundation of **Euclid's Division Algorithm**, which is used to compute the **HCF** (Highest Common Factor) of two positive integers.

**Algorithm steps:**
1. Apply the division lemma to \\(a\\) and \\(b\\) to get \\(a = bq + r\\).
2. If \\(r = 0\\), then \\(b\\) is the HCF.
3. If \\(r \\ne 0\\), apply the lemma to \\(b\\) and \\(r\\), and repeat until the remainder is 0.
4. The divisor at the last step (when remainder becomes 0) is the HCF.`,
      },
      {
        title: 'The Fundamental Theorem of Arithmetic',
        content: `Every composite number can be expressed as a product of prime factors, and this factorisation is **unique** (apart from the order of factors).

\\[n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}\\]

**Applications:**
- **HCF:** Take the product of the **smallest powers** of all common prime factors.
- **LCM:** Take the product of the **greatest powers** of all prime factors (common or not).

**Important relation:**
\\[\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b\\]

This holds for any two positive integers \\(a\\) and \\(b\\).`,
      },
      {
        title: 'Irrationality Proofs',
        content: `A number is **irrational** if it cannot be written in the form \\(\\frac{p}{q}\\) where \\(p\\) and \\(q\\) are integers and \\(q \\ne 0\\).

**Theorem:** \\(\\sqrt{2}\\), \\(\\sqrt{3}\\), \\(\\sqrt{5}\\) are irrational numbers.

**Proof technique (for \\(\\sqrt{2}\\)):** Assume \\(\\sqrt{2} = \\frac{p}{q}\\) where \\(p, q\\) are co-prime. Then \\(2q^2 = p^2\\), so \\(p^2\\) is even, hence \\(p\\) is even. Let \\(p = 2k\\). Then \\(2q^2 = 4k^2\\), giving \\(q^2 = 2k^2\\), so \\(q\\) is also even. This contradicts our assumption that \\(p, q\\) are co-prime. Hence \\(\\sqrt{2}\\) is irrational.

**Key results:**
- If \\(p\\) is prime and \\(p\\) divides \\(a^2\\), then \\(p\\) divides \\(a\\).
- The sum or difference of a rational and an irrational number is irrational.
- The product or quotient of a non-zero rational with an irrational number is irrational.`,
      },
      {
        title: 'Decimal Expansions of Rational Numbers',
        content: `A rational number \\(\\frac{p}{q}\\) (in lowest terms) has a **terminating** decimal expansion if and only if the prime factorisation of \\(q\\) is of the form \\(2^m \\times 5^n\\), where \\(m, n\\) are non-negative integers.

If \\(q\\) has prime factors other than 2 and 5, the decimal expansion is **non-terminating repeating**.

**Examples:**
- \\(\\frac{7}{8} = \\frac{7}{2^3}\\) → Terminating
- \\(\\frac{3}{20} = \\frac{3}{2^2 \\times 5}\\) → Terminating
- \\(\\frac{1}{3}\\) → Non-terminating repeating (since \\(3 \\ne 2^m \\times 5^n\\))
- \\(\\frac{1}{7}\\) → Non-terminating repeating`,
      },
    ],
    examples: [
      {
        title: 'Finding HCF using Euclid\'s Algorithm',
        problem: 'Find the HCF of 455 and 42 using Euclid\'s division algorithm.',
        steps: [
          'Step 1: Since 455 > 42, apply the division lemma: \\(455 = 42 \\times 10 + 35\\)',
          'Step 2: Since remainder \\(35 \\ne 0\\), apply lemma to 42 and 35: \\(42 = 35 \\times 1 + 7\\)',
          'Step 3: Since remainder \\(7 \\ne 0\\), apply lemma to 35 and 7: \\(35 = 7 \\times 5 + 0\\)',
          'Step 4: The remainder is now 0, so the HCF is the divisor at this step = 7.',
        ],
        answer: '\\(\\text{HCF}(455, 42) = 7\\)',
      },
      {
        title: 'HCF and LCM using Prime Factorisation',
        problem: 'Find the HCF and LCM of 96 and 404 by prime factorisation.',
        steps: [
          'Step 1: Prime factorise 96: \\(96 = 2^5 \\times 3\\)',
          'Step 2: Prime factorise 404: \\(404 = 2^2 \\times 101\\)',
          'Step 3: HCF = product of smallest powers of common primes = \\(2^2 = 4\\)',
          'Step 4: LCM = product of greatest powers of all primes = \\(2^5 \\times 3 \\times 101 = 9696\\)',
          'Step 5: Verify: \\(\\text{HCF} \\times \\text{LCM} = 4 \\times 9696 = 38784 = 96 \\times 404\\) ✓',
        ],
        answer: '\\(\\text{HCF} = 4\\), \\(\\text{LCM} = 9696\\)',
      },
      {
        title: 'Proving Irrationality',
        problem: 'Prove that \\(3 + 2\\sqrt{5}\\) is irrational.',
        steps: [
          'Step 1: Assume, to the contrary, that \\(3 + 2\\sqrt{5}\\) is rational.',
          'Step 2: Then \\(3 + 2\\sqrt{5} = \\frac{a}{b}\\) where \\(a, b\\) are integers, \\(b \\ne 0\\).',
          'Step 3: Rearranging: \\(\\sqrt{5} = \\frac{a - 3b}{2b}\\)',
          'Step 4: Since \\(a\\) and \\(b\\) are integers, \\(\\frac{a - 3b}{2b}\\) is rational.',
          'Step 5: This means \\(\\sqrt{5}\\) is rational, which contradicts the fact that \\(\\sqrt{5}\\) is irrational.',
          'Step 6: Therefore, our assumption is wrong, and \\(3 + 2\\sqrt{5}\\) is irrational.',
        ],
        answer: '\\(3 + 2\\sqrt{5}\\) is irrational (proved by contradiction).',
      },
      {
        title: 'Decimal Expansion Classification',
        problem:
          'Without actually performing long division, determine whether \\(\\frac{13}{3125}\\) has a terminating or non-terminating repeating decimal expansion.',
        steps: [
          'Step 1: Factorise the denominator: \\(3125 = 5^5\\)',
          'Step 2: The denominator is of the form \\(2^0 \\times 5^5 = 5^5\\).',
          'Step 3: Since the denominator is of the form \\(2^m \\times 5^n\\), the decimal expansion terminates.',
          'Step 4: To find the expansion: \\(\\frac{13}{3125} = \\frac{13 \\times 2^5}{5^5 \\times 2^5} = \\frac{416}{10^5} = 0.00416\\)',
        ],
        answer: 'Terminating decimal expansion: \\(0.00416\\)',
      },
    ],
    commonMistakes: [
      'Confusing HCF and LCM — HCF uses smallest powers, LCM uses greatest powers of prime factors.',
      'Forgetting to check that \\(p\\) and \\(q\\) are co-prime in irrationality proofs.',
      'Assuming that all square roots are irrational — \\(\\sqrt{4} = 2\\) is rational!',
      'Not verifying the HCF × LCM = product of the two numbers relationship.',
      'Incorrectly classifying decimal expansions by not fully factorising the denominator.',
    ],
    keyConceptCount: 5,
    exampleCount: 4,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 2. POLYNOMIALS
  // ========================================================================
  {
    id: 'polynomials',
    name: 'Polynomials',
    icon: '📈',
    color: '#9ec7f5',
    description:
      'Understand the relationship between zeroes and coefficients of polynomials, and master the division algorithm for polynomials.',
    chapters: 'Chapter 2',
    theory: [
      {
        title: 'Zeroes of a Polynomial',
        content: `A **zero** (or root) of a polynomial \\(p(x)\\) is a value \\(k\\) such that \\(p(k) = 0\\).

**Geometrically**, the zeroes of a polynomial are the x-coordinates of the points where the graph of \\(y = p(x)\\) intersects the x-axis.

- A **linear polynomial** \\(ax + b\\) has exactly **one** zero: \\(x = -\\frac{b}{a}\\).
- A **quadratic polynomial** \\(ax^2 + bx + c\\) has at most **two** zeroes.
- A **cubic polynomial** \\(ax^3 + bx^2 + cx + d\\) has at most **three** zeroes.

In general, a polynomial of degree \\(n\\) has at most \\(n\\) zeroes.`,
      },
      {
        title: 'Relationship Between Zeroes and Coefficients',
        content: `For a **quadratic polynomial** \\(ax^2 + bx + c\\) with zeroes \\(\\alpha\\) and \\(\\beta\\):

\\[\\alpha + \\beta = -\\frac{b}{a}\\]
\\[\\alpha \\cdot \\beta = \\frac{c}{a}\\]

The polynomial can be written as: \\(a\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right]\\)

For a **cubic polynomial** \\(ax^3 + bx^2 + cx + d\\) with zeroes \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\):

\\[\\alpha + \\beta + \\gamma = -\\frac{b}{a}\\]
\\[\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}\\]
\\[\\alpha \\cdot \\beta \\cdot \\gamma = -\\frac{d}{a}\\]`,
      },
      {
        title: 'Division Algorithm for Polynomials',
        content: `If \\(p(x)\\) and \\(g(x)\\) are any two polynomials with \\(g(x) \\ne 0\\), then we can find polynomials \\(q(x)\\) and \\(r(x)\\) such that:

\\[p(x) = g(x) \\times q(x) + r(x)\\]

where \\(r(x) = 0\\) or \\(\\deg(r(x)) < \\deg(g(x))\\).

Here \\(p(x)\\) is the **dividend**, \\(g(x)\\) is the **divisor**, \\(q(x)\\) is the **quotient**, and \\(r(x)\\) is the **remainder**.

**Application:** If two zeroes of a cubic polynomial are known, the third zero can be found by dividing the polynomial by the factor corresponding to the known zeroes.`,
      },
    ],
    examples: [
      {
        title: 'Finding Zeroes of a Quadratic Polynomial',
        problem:
          'Find the zeroes of the polynomial \\(p(x) = 6x^2 - 3 - 7x\\) and verify the relationship between zeroes and coefficients.',
        steps: [
          'Step 1: Rewrite in standard form: \\(p(x) = 6x^2 - 7x - 3\\)',
          'Step 2: Factorise: \\(6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3)\\)',
          'Step 3: Set each factor to zero: \\(x = -\\frac{1}{3}\\) or \\(x = \\frac{3}{2}\\)',
          'Step 4: Verify sum of zeroes: \\(-\\frac{1}{3} + \\frac{3}{2} = \\frac{-2 + 9}{6} = \\frac{7}{6} = -\\frac{(-7)}{6} = -\\frac{b}{a}\\) ✓',
          'Step 5: Verify product of zeroes: \\(-\\frac{1}{3} \\times \\frac{3}{2} = -\\frac{1}{2} = \\frac{-3}{6} = \\frac{c}{a}\\) ✓',
        ],
        answer:
          'Zeroes are \\(x = -\\frac{1}{3}\\) and \\(x = \\frac{3}{2}\\)',
      },
      {
        title: 'Forming a Quadratic Polynomial from Zeroes',
        problem:
          'Find a quadratic polynomial whose sum and product of zeroes are \\(-3\\) and \\(2\\) respectively.',
        steps: [
          'Step 1: Let the zeroes be \\(\\alpha\\) and \\(\\beta\\). Given: \\(\\alpha + \\beta = -3\\) and \\(\\alpha \\beta = 2\\).',
          'Step 2: The quadratic polynomial is \\(k\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right]\\)',
          'Step 3: Substituting: \\(k\\left[x^2 - (-3)x + 2\\right] = k(x^2 + 3x + 2)\\)',
          'Step 4: Taking \\(k = 1\\): \\(p(x) = x^2 + 3x + 2\\)',
        ],
        answer: '\\(p(x) = x^2 + 3x + 2\\)',
        alternateMethod:
          'We can verify by factoring: \\(x^2 + 3x + 2 = (x + 1)(x + 2)\\), zeroes are \\(-1\\) and \\(-2\\), sum \\(= -3\\), product \\(= 2\\). ✓',
      },
      {
        title: 'Polynomial Division Algorithm',
        problem:
          'Divide \\(3x^3 + x^2 + 2x + 5\\) by \\(1 + 2x + x^2\\) and verify the division algorithm.',
        steps: [
          'Step 1: Arrange divisor in standard form: \\(x^2 + 2x + 1\\)',
          'Step 2: Divide leading term: \\(\\frac{3x^3}{x^2} = 3x\\). Multiply: \\(3x(x^2 + 2x + 1) = 3x^3 + 6x^2 + 3x\\)',
          'Step 3: Subtract: \\((3x^3 + x^2 + 2x + 5) - (3x^3 + 6x^2 + 3x) = -5x^2 - x + 5\\)',
          'Step 4: Divide: \\(\\frac{-5x^2}{x^2} = -5\\). Multiply: \\(-5(x^2 + 2x + 1) = -5x^2 - 10x - 5\\)',
          'Step 5: Subtract: \\((-5x^2 - x + 5) - (-5x^2 - 10x - 5) = 9x + 10\\)',
          'Step 6: Quotient \\(= 3x - 5\\), Remainder \\(= 9x + 10\\)',
          'Step 7: Verify: \\((x^2 + 2x + 1)(3x - 5) + (9x + 10) = 3x^3 + x^2 + 2x + 5\\) ✓',
        ],
        answer:
          'Quotient \\(= 3x - 5\\), Remainder \\(= 9x + 10\\)',
      },
    ],
    commonMistakes: [
      'Sign errors when applying the sum and product formulae — remember the minus sign in \\(-\\frac{b}{a}\\).',
      'Not writing the polynomial in standard (descending power) form before dividing.',
      'Confusing the zeroes of the polynomial with the coefficients.',
      'Forgetting the constant multiplier \\(k\\) when constructing a polynomial from its zeroes.',
    ],
    keyConceptCount: 4,
    exampleCount: 3,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 3. PAIR OF LINEAR EQUATIONS IN TWO VARIABLES
  // ========================================================================
  {
    id: 'linear-equations',
    name: 'Pair of Linear Equations in Two Variables',
    icon: '📊',
    color: '#7DA0CA',
    description:
      'Solve systems of two linear equations using graphical, substitution, elimination, and cross-multiplication methods.',
    chapters: 'Chapter 3',
    theory: [
      {
        title: 'General Form and Graphical Representation',
        content: `A pair of linear equations in two variables \\(x\\) and \\(y\\) is of the form:

\\[a_1 x + b_1 y + c_1 = 0\\]
\\[a_2 x + b_2 y + c_2 = 0\\]

**Graphically**, each equation represents a straight line. The solution is the point of intersection.

**Three possibilities:**
1. **Intersecting lines** → Exactly one solution (consistent & independent)
2. **Coincident lines** → Infinitely many solutions (consistent & dependent)
3. **Parallel lines** → No solution (inconsistent)`,
      },
      {
        title: 'Conditions for Consistency',
        content: `For the pair of equations \\(a_1 x + b_1 y + c_1 = 0\\) and \\(a_2 x + b_2 y + c_2 = 0\\):

| Condition | Type of Lines | Solutions |
|---|---|---|
| \\(\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}\\) | Intersecting | Unique solution |
| \\(\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}\\) | Parallel | No solution |
| \\(\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}\\) | Coincident | Infinitely many |`,
      },
      {
        title: 'Algebraic Methods of Solving',
        content: `**1. Substitution Method:**
- Express one variable in terms of the other from one equation.
- Substitute into the second equation to get a single-variable equation.
- Solve and back-substitute.

**2. Elimination Method:**
- Multiply equations by suitable constants to make the coefficients of one variable equal.
- Add or subtract the equations to eliminate that variable.
- Solve and back-substitute.

**3. Cross-Multiplication Method:**
For \\(a_1 x + b_1 y + c_1 = 0\\) and \\(a_2 x + b_2 y + c_2 = 0\\):

\\[\\frac{x}{b_1 c_2 - b_2 c_1} = \\frac{y}{c_1 a_2 - c_2 a_1} = \\frac{1}{a_1 b_2 - a_2 b_1}\\]`,
      },
    ],
    examples: [
      {
        title: 'Solving by Substitution Method',
        problem:
          'Solve the pair of equations: \\(x + y = 14\\) and \\(x - y = 4\\)',
        steps: [
          'Step 1: From the first equation: \\(x = 14 - y\\)',
          'Step 2: Substitute into the second equation: \\((14 - y) - y = 4\\)',
          'Step 3: Simplify: \\(14 - 2y = 4\\), so \\(2y = 10\\), giving \\(y = 5\\)',
          'Step 4: Back-substitute: \\(x = 14 - 5 = 9\\)',
          'Step 5: Verify in both equations: \\(9 + 5 = 14\\) ✓ and \\(9 - 5 = 4\\) ✓',
        ],
        answer: '\\(x = 9,\\; y = 5\\)',
      },
      {
        title: 'Solving by Elimination Method',
        problem:
          'Solve: \\(3x + 4y = 10\\) and \\(2x - 2y = 2\\)',
        steps: [
          'Step 1: Label the equations. Eq(1): \\(3x + 4y = 10\\), Eq(2): \\(2x - 2y = 2\\)',
          'Step 2: Multiply Eq(2) by 2: \\(4x - 4y = 4\\) ... Eq(3)',
          'Step 3: Add Eq(1) and Eq(3): \\(3x + 4y + 4x - 4y = 10 + 4\\)',
          'Step 4: Simplify: \\(7x = 14\\), so \\(x = 2\\)',
          'Step 5: Substitute \\(x = 2\\) in Eq(2): \\(4 - 2y = 2\\), so \\(y = 1\\)',
          'Step 6: Verify in Eq(1): \\(3(2) + 4(1) = 6 + 4 = 10\\) ✓',
        ],
        answer: '\\(x = 2,\\; y = 1\\)',
      },
      {
        title: 'Word Problem — Ages',
        problem:
          'The sum of a two-digit number and the number obtained by reversing the digits is 66. If the digits differ by 2, find the number.',
        steps: [
          'Step 1: Let the tens digit be \\(x\\) and the units digit be \\(y\\). The number is \\(10x + y\\).',
          'Step 2: Reversed number = \\(10y + x\\).',
          'Step 3: Given: \\((10x + y) + (10y + x) = 66\\), which gives \\(11x + 11y = 66\\), so \\(x + y = 6\\) ... (i)',
          'Step 4: Given: digits differ by 2, so \\(x - y = 2\\) or \\(y - x = 2\\) ... (ii)',
          'Step 5: Case 1: \\(x + y = 6\\) and \\(x - y = 2\\). Adding: \\(2x = 8\\), \\(x = 4\\), \\(y = 2\\). Number = 42.',
          'Step 6: Case 2: \\(x + y = 6\\) and \\(y - x = 2\\). Adding: \\(2y = 8\\), \\(y = 4\\), \\(x = 2\\). Number = 24.',
        ],
        answer: 'The number is 42 or 24.',
      },
      {
        title: 'Checking Consistency of a System',
        problem:
          'Determine whether the following pair of linear equations is consistent: \\(3x + 2y = 5\\) and \\(2x - 3y = 7\\)',
        steps: [
          'Step 1: Here \\(a_1 = 3, b_1 = 2, c_1 = -5\\) and \\(a_2 = 2, b_2 = -3, c_2 = -7\\)',
          'Step 2: Compute \\(\\frac{a_1}{a_2} = \\frac{3}{2}\\) and \\(\\frac{b_1}{b_2} = \\frac{2}{-3} = -\\frac{2}{3}\\)',
          'Step 3: Since \\(\\frac{3}{2} \\ne -\\frac{2}{3}\\), we have \\(\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}\\).',
          'Step 4: The lines are intersecting. The system is consistent with a unique solution.',
        ],
        answer: 'The system is consistent (has a unique solution).',
      },
    ],
    commonMistakes: [
      'Sign errors when multiplying equations for elimination — always track negative signs carefully.',
      'Forgetting to verify the solution in BOTH original equations.',
      'Confusing the conditions for parallel and coincident lines.',
      'In word problems, not defining variables clearly before forming equations.',
      'Dividing by zero when cross-multiplication denominator \\(a_1 b_2 - a_2 b_1 = 0\\).',
    ],
    keyConceptCount: 5,
    exampleCount: 4,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 4. QUADRATIC EQUATIONS
  // ========================================================================
  {
    id: 'quadratic-equations',
    name: 'Quadratic Equations',
    icon: '✖️',
    color: '#5483B3',
    description:
      'Master solving quadratic equations by factorisation, completing the square, and the quadratic formula. Understand the discriminant and nature of roots.',
    chapters: 'Chapter 4',
    theory: [
      {
        title: 'Standard Form and Methods of Solving',
        content: `A **quadratic equation** in variable \\(x\\) is of the form:

\\[ax^2 + bx + c = 0, \\quad a \\ne 0\\]

**Three methods to solve:**

**1. Factorisation (Splitting the middle term):**
Find two numbers whose product is \\(ac\\) and sum is \\(b\\). Split the middle term and factorise.

**2. Completing the Square:**
Rewrite \\(ax^2 + bx + c = 0\\) as \\(\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}\\)

**3. Quadratic Formula:**
\\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]

This formula is derived by completing the square on the general form.`,
      },
      {
        title: 'Nature of Roots — The Discriminant',
        content: `The expression \\(D = b^2 - 4ac\\) is called the **discriminant** of the quadratic equation \\(ax^2 + bx + c = 0\\).

The discriminant determines the **nature of roots**:

| Discriminant | Nature of Roots |
|---|---|
| \\(D > 0\\) | Two distinct real roots |
| \\(D = 0\\) | Two equal real roots (repeated root) |
| \\(D < 0\\) | No real roots (complex roots) |

When \\(D = 0\\), the equal root is \\(x = -\\frac{b}{2a}\\).

When \\(D > 0\\) and is a **perfect square**, the roots are rational and the equation can be solved by factorisation.`,
      },
      {
        title: 'Forming Quadratic Equations from Roots',
        content: `If \\(\\alpha\\) and \\(\\beta\\) are the roots of a quadratic equation, then the equation can be written as:

\\[x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0\\]

**Sum of roots:** \\(\\alpha + \\beta = -\\frac{b}{a}\\)

**Product of roots:** \\(\\alpha \\cdot \\beta = \\frac{c}{a}\\)

This is very useful for forming equations when the roots are given, and for solving problems where the roots have a specific relationship (e.g., one root is double the other).`,
      },
    ],
    examples: [
      {
        title: 'Solving by Factorisation',
        problem: 'Solve: \\(2x^2 - 5x + 3 = 0\\)',
        steps: [
          'Step 1: Find two numbers whose product = \\(2 \\times 3 = 6\\) and sum = \\(-5\\). These are \\(-2\\) and \\(-3\\).',
          'Step 2: Split the middle term: \\(2x^2 - 2x - 3x + 3 = 0\\)',
          'Step 3: Group and factorise: \\(2x(x - 1) - 3(x - 1) = 0\\)',
          'Step 4: Factor out \\((x - 1)\\): \\((x - 1)(2x - 3) = 0\\)',
          'Step 5: Set each factor to zero: \\(x = 1\\) or \\(x = \\frac{3}{2}\\)',
        ],
        answer: '\\(x = 1\\) or \\(x = \\frac{3}{2}\\)',
      },
      {
        title: 'Using the Quadratic Formula',
        problem: 'Solve: \\(x^2 + 4x + 2 = 0\\) using the quadratic formula.',
        steps: [
          'Step 1: Identify \\(a = 1\\), \\(b = 4\\), \\(c = 2\\)',
          'Step 2: Compute discriminant: \\(D = b^2 - 4ac = 16 - 8 = 8\\)',
          'Step 3: Since \\(D > 0\\), two distinct real roots exist.',
          'Step 4: Apply the formula: \\(x = \\frac{-4 \\pm \\sqrt{8}}{2} = \\frac{-4 \\pm 2\\sqrt{2}}{2}\\)',
          'Step 5: Simplify: \\(x = -2 \\pm \\sqrt{2}\\)',
        ],
        answer: '\\(x = -2 + \\sqrt{2}\\) or \\(x = -2 - \\sqrt{2}\\)',
      },
      {
        title: 'Nature of Roots using Discriminant',
        problem:
          'Find the nature of roots of \\(3x^2 - 4\\sqrt{3}x + 4 = 0\\). If real roots exist, find them.',
        steps: [
          'Step 1: Identify \\(a = 3\\), \\(b = -4\\sqrt{3}\\), \\(c = 4\\)',
          'Step 2: Compute discriminant: \\(D = (-4\\sqrt{3})^2 - 4(3)(4) = 48 - 48 = 0\\)',
          'Step 3: Since \\(D = 0\\), the equation has two equal real roots.',
          'Step 4: The root is \\(x = \\frac{-b}{2a} = \\frac{4\\sqrt{3}}{6} = \\frac{2\\sqrt{3}}{3} = \\frac{2}{\\sqrt{3}}\\)',
        ],
        answer:
          'Two equal roots: \\(x = \\frac{2\\sqrt{3}}{3}\\)',
      },
      {
        title: 'Word Problem — Quadratic Equation',
        problem:
          'A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less. Find the speed of the train.',
        steps: [
          'Step 1: Let the speed of the train be \\(x\\) km/h.',
          'Step 2: Time taken = \\(\\frac{360}{x}\\) hours.',
          'Step 3: With increased speed: time = \\(\\frac{360}{x + 5}\\) hours.',
          'Step 4: Given: \\(\\frac{360}{x} - \\frac{360}{x + 5} = 1\\)',
          'Step 5: Simplify: \\(\\frac{360(x + 5) - 360x}{x(x + 5)} = 1\\), so \\(\\frac{1800}{x^2 + 5x} = 1\\)',
          'Step 6: This gives: \\(x^2 + 5x - 1800 = 0\\)',
          'Step 7: Factorise: \\((x + 45)(x - 40) = 0\\), so \\(x = 40\\) or \\(x = -45\\)',
          'Step 8: Since speed cannot be negative, \\(x = 40\\) km/h.',
        ],
        answer: 'Speed of the train = 40 km/h',
      },
    ],
    commonMistakes: [
      'Forgetting that \\(a \\ne 0\\) in a quadratic equation — if \\(a = 0\\), it becomes linear.',
      'Errors in computing the discriminant — be careful with \\((-b)^2\\) vs \\(-b^2\\).',
      'In word problems, forgetting to reject negative roots when the context demands a positive answer.',
      'Not simplifying the roots after applying the quadratic formula.',
      'Sign errors when splitting the middle term for factorisation.',
    ],
    keyConceptCount: 4,
    exampleCount: 4,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 5. ARITHMETIC PROGRESSIONS
  // ========================================================================
  {
    id: 'arithmetic-progressions',
    name: 'Arithmetic Progressions',
    icon: '🔗',
    color: '#396494',
    description:
      'Study sequences with a constant common difference. Learn to find the nth term, sum of n terms, and solve AP-based problems.',
    chapters: 'Chapter 5',
    theory: [
      {
        title: 'Definition and Common Difference',
        content: `An **Arithmetic Progression (AP)** is a sequence of numbers in which each term after the first is obtained by adding a fixed number called the **common difference** (\\(d\\)) to the preceding term.

General AP: \\(a,\\; a + d,\\; a + 2d,\\; a + 3d,\\; \\ldots\\)

Here \\(a\\) is the **first term** and \\(d\\) is the **common difference**.

\\[d = a_2 - a_1 = a_3 - a_2 = \\ldots = a_n - a_{n-1}\\]

- If \\(d > 0\\), the AP is **increasing**.
- If \\(d < 0\\), the AP is **decreasing**.
- If \\(d = 0\\), all terms are equal (constant AP).`,
      },
      {
        title: 'The nth Term of an AP',
        content: `The \\(n\\)th term (general term) of an AP with first term \\(a\\) and common difference \\(d\\) is:

\\[a_n = a + (n - 1)d\\]

This formula allows us to find:
- Any specific term if \\(a\\) and \\(d\\) are known.
- The number of terms \\(n\\) if \\(a\\), \\(d\\), and \\(a_n\\) are known.
- The common difference \\(d\\) if \\(a\\), \\(n\\), and \\(a_n\\) are known.

**The last term** is often denoted by \\(l\\), so \\(l = a + (n - 1)d\\).

The \\(n\\)th term from the **end** of a finite AP is \\(l - (n - 1)d\\).`,
      },
      {
        title: 'Sum of First n Terms',
        content: `The sum of the first \\(n\\) terms of an AP is:

\\[S_n = \\frac{n}{2}\\left[2a + (n - 1)d\\right]\\]

Or equivalently, when the last term \\(l\\) is known:

\\[S_n = \\frac{n}{2}(a + l)\\]

**Important relationships:**
- The \\(n\\)th term can be found from the sum: \\(a_n = S_n - S_{n-1}\\) for \\(n \\ge 2\\).
- Sum of first \\(n\\) natural numbers: \\(S_n = \\frac{n(n + 1)}{2}\\)

**Note:** If \\(S_n\\) is given as a quadratic expression in \\(n\\), the coefficient of \\(n^2\\) gives \\(\\frac{d}{2}\\) and the sequence is an AP.`,
      },
    ],
    examples: [
      {
        title: 'Finding the nth Term',
        problem: 'Find the 20th term of the AP: \\(3, 8, 13, 18, \\ldots\\)',
        steps: [
          'Step 1: Identify \\(a = 3\\) and \\(d = 8 - 3 = 5\\)',
          'Step 2: Use the formula \\(a_n = a + (n - 1)d\\)',
          'Step 3: \\(a_{20} = 3 + (20 - 1) \\times 5 = 3 + 95 = 98\\)',
        ],
        answer: '\\(a_{20} = 98\\)',
      },
      {
        title: 'Finding the Sum of First n Terms',
        problem:
          'Find the sum of the first 15 terms of the AP: \\(7, 13, 19, 25, \\ldots\\)',
        steps: [
          'Step 1: Here \\(a = 7\\), \\(d = 13 - 7 = 6\\), \\(n = 15\\)',
          'Step 2: Use \\(S_n = \\frac{n}{2}[2a + (n - 1)d]\\)',
          'Step 3: \\(S_{15} = \\frac{15}{2}[2(7) + 14 \\times 6]\\)',
          'Step 4: \\(= \\frac{15}{2}[14 + 84] = \\frac{15}{2} \\times 98 = 15 \\times 49 = 735\\)',
        ],
        answer: '\\(S_{15} = 735\\)',
      },
      {
        title: 'Finding Number of Terms',
        problem:
          'How many terms of the AP \\(24, 21, 18, \\ldots\\) must be taken so that their sum is 78?',
        steps: [
          'Step 1: Here \\(a = 24\\), \\(d = 21 - 24 = -3\\), \\(S_n = 78\\)',
          'Step 2: Using \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\): \\(78 = \\frac{n}{2}[48 + (n-1)(-3)]\\)',
          'Step 3: \\(156 = n[48 - 3n + 3] = n(51 - 3n)\\)',
          'Step 4: \\(3n^2 - 51n + 156 = 0\\), dividing by 3: \\(n^2 - 17n + 52 = 0\\)',
          'Step 5: Factorise: \\((n - 4)(n - 13) = 0\\), so \\(n = 4\\) or \\(n = 13\\)',
          'Step 6: Both values are valid. With \\(n = 13\\), some terms are negative, and the sum still equals 78.',
        ],
        answer: '\\(n = 4\\) or \\(n = 13\\)',
        alternateMethod:
          'Verify for \\(n = 4\\): \\(S_4 = \\frac{4}{2}(24 + 15) = 2 \\times 39 = 78\\) ✓',
      },
      {
        title: 'Word Problem — AP Application',
        problem:
          'In a flower bed, there are 23 rose plants in the first row, 21 in the second, 19 in the third, and so on. There are 5 plants in the last row. How many rows are there, and how many plants are there in total?',
        steps: [
          'Step 1: This is an AP with \\(a = 23\\), \\(d = 21 - 23 = -2\\), \\(a_n = 5\\)',
          'Step 2: Using \\(a_n = a + (n-1)d\\): \\(5 = 23 + (n-1)(-2)\\)',
          'Step 3: \\(5 = 23 - 2n + 2 = 25 - 2n\\), so \\(2n = 20\\), \\(n = 10\\)',
          'Step 4: Total plants: \\(S_{10} = \\frac{10}{2}(23 + 5) = 5 \\times 28 = 140\\)',
        ],
        answer: 'There are 10 rows and 140 plants in total.',
      },
    ],
    commonMistakes: [
      'Using \\(n\\) instead of \\((n-1)\\) in the nth term formula \\(a_n = a + (n-1)d\\).',
      'Confusing \\(S_n\\) (sum of n terms) with \\(a_n\\) (nth term).',
      'Forgetting that \\(d\\) can be negative in a decreasing AP.',
      'Not checking if both solutions of a quadratic (for \\(n\\)) are valid in context.',
    ],
    keyConceptCount: 4,
    exampleCount: 4,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 6. TRIANGLES
  // ========================================================================
  {
    id: 'triangles',
    name: 'Triangles',
    icon: '📐',
    color: '#22477a',
    description:
      'Study similarity criteria for triangles (AA, SSS, SAS), BPT, and the Pythagoras theorem with proofs and applications.',
    chapters: 'Chapter 6',
    theory: [
      {
        title: 'Similar Triangles and Criteria',
        content: `Two triangles are **similar** if their corresponding angles are equal and corresponding sides are in the same ratio (proportional).

If \\(\\triangle ABC \\sim \\triangle DEF\\), then:
\\[\\angle A = \\angle D,\\; \\angle B = \\angle E,\\; \\angle C = \\angle F\\]
\\[\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}\\]

**Criteria for similarity:**

1. **AA (Angle-Angle):** If two angles of one triangle are equal to two angles of another, the triangles are similar.
2. **SSS (Side-Side-Side):** If all three pairs of corresponding sides are proportional, the triangles are similar.
3. **SAS (Side-Angle-Side):** If one pair of corresponding sides is proportional and the included angles are equal, the triangles are similar.`,
      },
      {
        title: 'Basic Proportionality Theorem (BPT / Thales\' Theorem)',
        content: `**Statement:** If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, then the other two sides are divided in the same ratio.

If in \\(\\triangle ABC\\), a line \\(DE \\parallel BC\\) meets \\(AB\\) at \\(D\\) and \\(AC\\) at \\(E\\), then:

\\[\\frac{AD}{DB} = \\frac{AE}{EC}\\]

**Converse:** If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.

**Corollary:** The line drawn through the mid-point of one side of a triangle, parallel to another side, bisects the third side (Mid-Point Theorem).`,
      },
      {
        title: 'Areas of Similar Triangles',
        content: `**Theorem:** The ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides.

If \\(\\triangle ABC \\sim \\triangle DEF\\), then:

\\[\\frac{\\text{ar}(\\triangle ABC)}{\\text{ar}(\\triangle DEF)} = \\frac{AB^2}{DE^2} = \\frac{BC^2}{EF^2} = \\frac{AC^2}{DF^2}\\]

This extends to other corresponding linear measures: the ratio of areas equals the square of the ratio of corresponding altitudes, medians, angle bisectors, and perimeters.`,
      },
      {
        title: 'Pythagoras Theorem and Its Converse',
        content: `**Pythagoras Theorem:** In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.

If \\(\\angle B = 90°\\) in \\(\\triangle ABC\\), then:

\\[AC^2 = AB^2 + BC^2\\]

**Converse:** If in a triangle, the square of one side equals the sum of the squares of the other two sides, then the angle opposite to the first side is a right angle.

**Special cases:**
- If \\(AC^2 > AB^2 + BC^2\\), then \\(\\angle B > 90°\\) (obtuse).
- If \\(AC^2 < AB^2 + BC^2\\), then \\(\\angle B < 90°\\) (acute).`,
      },
    ],
    examples: [
      {
        title: 'Applying the Basic Proportionality Theorem',
        problem:
          'In \\(\\triangle ABC\\), \\(DE \\parallel BC\\) with \\(D\\) on \\(AB\\) and \\(E\\) on \\(AC\\). If \\(AD = 4\\) cm, \\(DB = 5\\) cm, and \\(AE = 8\\) cm, find \\(EC\\).',
        steps: [
          'Step 1: By BPT (since \\(DE \\parallel BC\\)): \\(\\frac{AD}{DB} = \\frac{AE}{EC}\\)',
          'Step 2: Substitute: \\(\\frac{4}{5} = \\frac{8}{EC}\\)',
          'Step 3: Cross-multiply: \\(EC = \\frac{8 \\times 5}{4} = 10\\) cm',
        ],
        answer: '\\(EC = 10\\) cm',
      },
      {
        title: 'Proving Triangles are Similar',
        problem:
          'In \\(\\triangle ABC\\), \\(\\angle A = 25°\\) and \\(\\angle B = 35°\\). In \\(\\triangle DEF\\), \\(\\angle D = 25°\\) and \\(\\angle F = 120°\\). Are the two triangles similar?',
        steps: [
          'Step 1: In \\(\\triangle ABC\\): \\(\\angle C = 180° - 25° - 35° = 120°\\)',
          'Step 2: In \\(\\triangle DEF\\): \\(\\angle E = 180° - 25° - 120° = 35°\\)',
          'Step 3: Comparing: \\(\\angle A = \\angle D = 25°\\), \\(\\angle B = \\angle E = 35°\\), \\(\\angle C = \\angle F = 120°\\)',
          'Step 4: By AA similarity criterion: \\(\\triangle ABC \\sim \\triangle DEF\\)',
        ],
        answer: 'Yes, \\(\\triangle ABC \\sim \\triangle DEF\\) (by AA criterion).',
      },
      {
        title: 'Ratio of Areas of Similar Triangles',
        problem:
          'Two similar triangles have sides in the ratio \\(4:9\\). Find the ratio of their areas.',
        steps: [
          'Step 1: Let the ratio of corresponding sides = \\(\\frac{4}{9}\\)',
          'Step 2: The ratio of areas = square of the ratio of corresponding sides',
          'Step 3: \\(\\frac{\\text{Area}_1}{\\text{Area}_2} = \\left(\\frac{4}{9}\\right)^2 = \\frac{16}{81}\\)',
        ],
        answer: 'Ratio of areas = \\(16 : 81\\)',
      },
      {
        title: 'Applying the Pythagoras Theorem',
        problem:
          'A ladder 10 m long reaches a window 8 m above the ground. Find the distance of the foot of the ladder from the base of the wall.',
        steps: [
          'Step 1: Let the wall, ground, and ladder form a right triangle. Hypotenuse (ladder) = 10 m, height (wall) = 8 m.',
          'Step 2: Let the base distance be \\(x\\) m.',
          'Step 3: By Pythagoras theorem: \\(10^2 = 8^2 + x^2\\)',
          'Step 4: \\(100 = 64 + x^2\\), so \\(x^2 = 36\\)',
          'Step 5: \\(x = 6\\) m (rejecting \\(x = -6\\) as distance is positive)',
        ],
        answer: 'Distance from the wall = 6 m',
      },
    ],
    commonMistakes: [
      'Writing the similarity correspondence in the wrong order — \\(\\triangle ABC \\sim \\triangle DEF\\) means \\(A \\leftrightarrow D\\), not arbitrary matching.',
      'Forgetting to square the ratio when finding the ratio of areas of similar triangles.',
      'Applying BPT when the line is not parallel to a side of the triangle.',
      'Using the Pythagoras theorem for non-right-angled triangles.',
      'Confusing congruence (same shape and size) with similarity (same shape, different size).',
    ],
    keyConceptCount: 6,
    exampleCount: 4,
    difficulty: 'Hard',
  },

  // ========================================================================
  // 7. CIRCLES
  // ========================================================================
  {
    id: 'circles',
    name: 'Circles',
    icon: '⭕',
    color: '#C1E8FF',
    description:
      'Understand tangent properties, theorems on tangents from an external point, and solve problems involving tangent lengths and angles.',
    chapters: 'Chapter 10',
    theory: [
      {
        title: 'Tangent to a Circle',
        content: `A **tangent** to a circle is a line that touches the circle at exactly one point, called the **point of tangency** (or point of contact).

**Key theorem:** The tangent at any point of a circle is **perpendicular** to the radius through the point of contact.

If \\(O\\) is the centre, \\(P\\) is the point of contact, and \\(T\\) is any point on the tangent, then:

\\[OP \\perp PT\\]

**Note:** At any point on a circle, there is one and only one tangent. A line perpendicular to the radius at a point on the circle is a tangent at that point.`,
      },
      {
        title: 'Number of Tangents from a Point',
        content: `The number of tangents that can be drawn from a point to a circle depends on the position of the point:

1. **Point inside the circle:** No tangent can be drawn.
2. **Point on the circle:** Exactly one tangent can be drawn.
3. **Point outside the circle:** Exactly **two** tangents can be drawn.

**Theorem:** The lengths of tangents drawn from an **external point** to a circle are **equal**.

If \\(PA\\) and \\(PB\\) are tangents from point \\(P\\) to a circle with centre \\(O\\), touching at \\(A\\) and \\(B\\) respectively, then:

\\[PA = PB\\]

Also, \\(OP\\) bisects \\(\\angle APB\\) and \\(OP\\) bisects \\(\\angle AOB\\).`,
      },
      {
        title: 'Properties Related to Tangent and Secant',
        content: `Some important properties:

1. The perpendicular from the centre to a chord **bisects** the chord.
2. If two tangents are drawn from an external point, then:
   - They subtend equal angles at the centre.
   - The line joining the external point to the centre bisects the angle between the tangents.
3. In a quadrilateral circumscribing a circle (tangential quadrilateral), the sum of opposite sides are equal:

\\[AB + CD = AD + BC\\]

This is because the tangent lengths from each vertex to the circle are equal.`,
      },
    ],
    examples: [
      {
        title: 'Finding Tangent Length',
        problem:
          'From a point \\(P\\), 13 cm away from the centre of a circle of radius 5 cm, find the length of the tangent from \\(P\\).',
        steps: [
          'Step 1: Let \\(O\\) be the centre, and \\(PA\\) be the tangent touching at \\(A\\). Then \\(OA \\perp PA\\).',
          'Step 2: In right triangle \\(OAP\\): \\(OP = 13\\) cm, \\(OA = 5\\) cm.',
          'Step 3: By Pythagoras: \\(PA^2 = OP^2 - OA^2 = 169 - 25 = 144\\)',
          'Step 4: \\(PA = \\sqrt{144} = 12\\) cm',
        ],
        answer: 'Length of tangent = 12 cm',
      },
      {
        title: 'Tangents from an External Point',
        problem:
          'Two tangents \\(TP\\) and \\(TQ\\) are drawn from an external point \\(T\\) to a circle with centre \\(O\\). Prove that \\(\\angle PTQ = 2\\angle OPQ\\).',
        steps: [
          'Step 1: Since \\(TP = TQ\\) (tangent lengths from an external point), \\(\\triangle TPQ\\) is isosceles.',
          'Step 2: Let \\(\\angle TPQ = \\angle TQP = \\alpha\\)',
          'Step 3: Then \\(\\angle PTQ = 180° - 2\\alpha\\)',
          'Step 4: Since \\(OP \\perp TP\\), we have \\(\\angle OPT = 90°\\)',
          'Step 5: So \\(\\angle OPQ = \\angle OPT - \\angle TPQ = 90° - \\alpha\\)',
          'Step 6: Now \\(2\\angle OPQ = 2(90° - \\alpha) = 180° - 2\\alpha = \\angle PTQ\\). Hence proved.',
        ],
        answer: '\\(\\angle PTQ = 2\\angle OPQ\\) (proved)',
      },
      {
        title: 'Tangential Quadrilateral',
        problem:
          'Prove that the tangent lengths property holds: If a quadrilateral \\(ABCD\\) circumscribes a circle, then \\(AB + CD = AD + BC\\).',
        steps: [
          'Step 1: Let the circle touch \\(AB\\) at \\(P\\), \\(BC\\) at \\(Q\\), \\(CD\\) at \\(R\\), and \\(DA\\) at \\(S\\).',
          'Step 2: By the equal tangent length theorem from each vertex: \\(AP = AS\\), \\(BP = BQ\\), \\(CR = CQ\\), \\(DR = DS\\)',
          'Step 3: \\(AB + CD = (AP + BP) + (CR + DR) = (AS + BQ) + (CQ + DS)\\)',
          'Step 4: Rearranging: \\(= (AS + DS) + (BQ + CQ) = AD + BC\\)',
          'Step 5: Therefore, \\(AB + CD = AD + BC\\). Hence proved.',
        ],
        answer: '\\(AB + CD = AD + BC\\) (proved)',
      },
    ],
    commonMistakes: [
      'Forgetting that the tangent is perpendicular to the radius at the point of contact.',
      'Assuming tangent length equals the radius — they are different concepts!',
      'Not recognising that tangent lengths from the same external point are equal.',
      'Incorrectly applying circle properties to points inside the circle.',
    ],
    keyConceptCount: 4,
    exampleCount: 3,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 8. TRIGONOMETRY (Introduction + Applications)
  // ========================================================================
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    icon: '📏',
    color: '#9ec7f5',
    description:
      'Learn trigonometric ratios, identities, standard angle values, and apply them to solve heights and distances problems.',
    chapters: 'Chapters 8 & 9',
    theory: [
      {
        title: 'Trigonometric Ratios',
        content: `In a right-angled triangle \\(ABC\\) with \\(\\angle B = 90°\\), for the acute angle \\(\\angle A = \\theta\\):

\\[\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{BC}{AC}\\]
\\[\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{AB}{AC}\\]
\\[\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{BC}{AB}\\]

**Reciprocal ratios:**
\\[\\csc\\theta = \\frac{1}{\\sin\\theta},\\quad \\sec\\theta = \\frac{1}{\\cos\\theta},\\quad \\cot\\theta = \\frac{1}{\\tan\\theta}\\]

**Key relation:** \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\) and \\(\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}\\)`,
      },
      {
        title: 'Standard Angle Values',
        content: `The trigonometric ratios for standard angles are:

| \\(\\theta\\) | \\(0°\\) | \\(30°\\) | \\(45°\\) | \\(60°\\) | \\(90°\\) |
|---|---|---|---|---|---|
| \\(\\sin\\theta\\) | \\(0\\) | \\(\\frac{1}{2}\\) | \\(\\frac{1}{\\sqrt{2}}\\) | \\(\\frac{\\sqrt{3}}{2}\\) | \\(1\\) |
| \\(\\cos\\theta\\) | \\(1\\) | \\(\\frac{\\sqrt{3}}{2}\\) | \\(\\frac{1}{\\sqrt{2}}\\) | \\(\\frac{1}{2}\\) | \\(0\\) |
| \\(\\tan\\theta\\) | \\(0\\) | \\(\\frac{1}{\\sqrt{3}}\\) | \\(1\\) | \\(\\sqrt{3}\\) | undefined |

**Complementary angle relations:**
\\[\\sin(90° - \\theta) = \\cos\\theta,\\quad \\cos(90° - \\theta) = \\sin\\theta\\]
\\[\\tan(90° - \\theta) = \\cot\\theta,\\quad \\cot(90° - \\theta) = \\tan\\theta\\]
\\[\\sec(90° - \\theta) = \\csc\\theta,\\quad \\csc(90° - \\theta) = \\sec\\theta\\]`,
      },
      {
        title: 'Trigonometric Identities',
        content: `The three fundamental trigonometric identities are:

\\[\\sin^2\\theta + \\cos^2\\theta = 1\\]
\\[1 + \\tan^2\\theta = \\sec^2\\theta\\]
\\[1 + \\cot^2\\theta = \\csc^2\\theta\\]

These identities are valid for all values of \\(\\theta\\) for which the ratios are defined.

**Useful rearrangements:**
- \\(\\sin^2\\theta = 1 - \\cos^2\\theta\\)
- \\(\\cos^2\\theta = 1 - \\sin^2\\theta\\)
- \\(\\sec^2\\theta - \\tan^2\\theta = 1\\)
- \\(\\csc^2\\theta - \\cot^2\\theta = 1\\)`,
      },
      {
        title: 'Heights and Distances (Applications)',
        content: `Trigonometry is used to find heights and distances that cannot be measured directly.

**Key terms:**
- **Line of sight:** The line drawn from the eye of the observer to the point being viewed.
- **Angle of elevation:** The angle between the horizontal and the line of sight when looking **upward**.
- **Angle of depression:** The angle between the horizontal and the line of sight when looking **downward**.

**Important:** The angle of depression from point \\(A\\) to point \\(B\\) equals the angle of elevation from point \\(B\\) to point \\(A\\) (alternate interior angles).

**General approach:** Draw a clear diagram, identify the right triangle, and use the appropriate trigonometric ratio.`,
      },
    ],
    examples: [
      {
        title: 'Evaluating a Trigonometric Expression',
        problem:
          'Evaluate: \\(\\frac{\\tan 65°}{\\cot 25°}\\)',
        steps: [
          'Step 1: Use the complementary angle relation: \\(\\tan 65° = \\tan(90° - 25°) = \\cot 25°\\)',
          'Step 2: So \\(\\frac{\\tan 65°}{\\cot 25°} = \\frac{\\cot 25°}{\\cot 25°} = 1\\)',
        ],
        answer: '\\(1\\)',
      },
      {
        title: 'Proving a Trigonometric Identity',
        problem:
          'Prove that \\(\\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta} = 2\\csc\\theta\\)',
        steps: [
          'Step 1: Take LHS and find common denominator: \\(\\frac{\\sin^2\\theta + (1 + \\cos\\theta)^2}{\\sin\\theta(1 + \\cos\\theta)}\\)',
          'Step 2: Expand numerator: \\(\\sin^2\\theta + 1 + 2\\cos\\theta + \\cos^2\\theta\\)',
          'Step 3: Use identity \\(\\sin^2\\theta + \\cos^2\\theta = 1\\): Numerator \\(= 1 + 1 + 2\\cos\\theta = 2 + 2\\cos\\theta = 2(1 + \\cos\\theta)\\)',
          'Step 4: So LHS \\(= \\frac{2(1 + \\cos\\theta)}{\\sin\\theta(1 + \\cos\\theta)} = \\frac{2}{\\sin\\theta} = 2\\csc\\theta\\) = RHS',
        ],
        answer: 'LHS = RHS = \\(2\\csc\\theta\\) (proved)',
      },
      {
        title: 'Height and Distance Problem',
        problem:
          'From the top of a 7 m high building, the angle of elevation of the top of a tower is \\(60°\\) and the angle of depression of its foot is \\(45°\\). Find the height of the tower.',
        steps: [
          'Step 1: Let the tower be \\(AB\\) and the building be \\(CD = 7\\) m. Let the distance between their bases be \\(x\\) m.',
          'Step 2: From point \\(D\\) (top of building), angle of depression of \\(B\\) (foot of tower) = \\(45°\\).',
          'Step 3: So \\(\\tan 45° = \\frac{CD}{BC} = \\frac{7}{x}\\), giving \\(x = 7\\) m.',
          'Step 4: Let the part of tower above the building level = \\(h\\) m. Then angle of elevation = \\(60°\\).',
          'Step 5: \\(\\tan 60° = \\frac{h}{x} = \\frac{h}{7}\\), so \\(h = 7\\sqrt{3}\\) m.',
          'Step 6: Total height of tower \\(= 7 + 7\\sqrt{3} = 7(1 + \\sqrt{3})\\) m.',
        ],
        answer: 'Height of tower \\(= 7(1 + \\sqrt{3})\\) m \\(\\approx 19.12\\) m',
      },
      {
        title: 'Using Standard Values',
        problem:
          'If \\(\\tan(A + B) = \\sqrt{3}\\) and \\(\\tan(A - B) = \\frac{1}{\\sqrt{3}}\\), where \\(0° < A + B \\le 90°\\), find \\(A\\) and \\(B\\).',
        steps: [
          'Step 1: \\(\\tan(A + B) = \\sqrt{3} = \\tan 60°\\), so \\(A + B = 60°\\) ... (i)',
          'Step 2: \\(\\tan(A - B) = \\frac{1}{\\sqrt{3}} = \\tan 30°\\), so \\(A - B = 30°\\) ... (ii)',
          'Step 3: Adding (i) and (ii): \\(2A = 90°\\), so \\(A = 45°\\)',
          'Step 4: Substituting: \\(B = 60° - 45° = 15°\\)',
        ],
        answer: '\\(A = 45°\\), \\(B = 15°\\)',
      },
    ],
    commonMistakes: [
      'Confusing the angle of elevation with the angle of depression — they are measured from the horizontal, not the vertical.',
      'Mixing up \\(\\sin\\) and \\(\\cos\\) values for complementary angles.',
      'Forgetting that \\(\\tan 90°\\) is undefined, not zero.',
      'Not drawing a proper diagram in heights and distances problems.',
      'Errors in rationalising denominators (e.g., \\(\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}\\)).',
    ],
    keyConceptCount: 6,
    exampleCount: 4,
    difficulty: 'Hard',
  },

  // ========================================================================
  // 9. COORDINATE GEOMETRY
  // ========================================================================
  {
    id: 'coordinate-geometry',
    name: 'Coordinate Geometry',
    icon: '🗺️',
    color: '#7DA0CA',
    description:
      'Master the distance formula, section formula, mid-point formula, and area of a triangle using coordinates.',
    chapters: 'Chapter 7',
    theory: [
      {
        title: 'Distance Formula',
        content: `The distance between two points \\(P(x_1, y_1)\\) and \\(Q(x_2, y_2)\\) in the Cartesian plane is:

\\[PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\]

**Special case — Distance from the origin:**
If \\(P(x, y)\\) is any point, then its distance from the origin \\(O(0, 0)\\) is:

\\[OP = \\sqrt{x^2 + y^2}\\]

**Application:** To check whether given points form a specific shape (e.g., right triangle, square, rhombus), compute all required distances and verify the geometric conditions.`,
      },
      {
        title: 'Section Formula',
        content: `If a point \\(P(x, y)\\) divides the line segment joining \\(A(x_1, y_1)\\) and \\(B(x_2, y_2)\\) **internally** in the ratio \\(m : n\\), then:

\\[x = \\frac{m x_2 + n x_1}{m + n}, \\quad y = \\frac{m y_2 + n y_1}{m + n}\\]

**Mid-point Formula** (when \\(m = n = 1\\)):

\\[M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)\\]

**External division** (ratio \\(m : n\\) externally):

\\[x = \\frac{m x_2 - n x_1}{m - n}, \\quad y = \\frac{m y_2 - n y_1}{m - n}\\]`,
      },
      {
        title: 'Area of a Triangle',
        content: `The area of a triangle with vertices \\(A(x_1, y_1)\\), \\(B(x_2, y_2)\\), and \\(C(x_3, y_3)\\) is:

\\[\\text{Area} = \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|\\]

**Collinearity condition:** Three points are **collinear** (lie on the same straight line) if and only if the area of the triangle formed by them is **zero**.

\\[x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) = 0\\]

The formula works with the absolute value to ensure a positive area, regardless of the orientation of the vertices.`,
      },
    ],
    examples: [
      {
        title: 'Finding Distance Between Two Points',
        problem:
          'Find the distance between the points \\(A(3, 8)\\) and \\(B(-4, -2)\\).',
        steps: [
          'Step 1: Use the distance formula: \\(AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)',
          'Step 2: Substitute: \\(AB = \\sqrt{(-4 - 3)^2 + (-2 - 8)^2}\\)',
          'Step 3: \\(= \\sqrt{(-7)^2 + (-10)^2} = \\sqrt{49 + 100} = \\sqrt{149}\\)',
        ],
        answer: '\\(AB = \\sqrt{149}\\) units',
      },
      {
        title: 'Section Formula Application',
        problem:
          'Find the coordinates of the point which divides the line segment joining \\(A(1, -2)\\) and \\(B(4, 7)\\) in the ratio \\(2 : 1\\).',
        steps: [
          'Step 1: Here \\(m = 2\\), \\(n = 1\\), \\((x_1, y_1) = (1, -2)\\), \\((x_2, y_2) = (4, 7)\\)',
          'Step 2: \\(x = \\frac{2(4) + 1(1)}{2 + 1} = \\frac{8 + 1}{3} = \\frac{9}{3} = 3\\)',
          'Step 3: \\(y = \\frac{2(7) + 1(-2)}{2 + 1} = \\frac{14 - 2}{3} = \\frac{12}{3} = 4\\)',
        ],
        answer: 'The point is \\((3, 4)\\).',
      },
      {
        title: 'Finding Area of a Triangle',
        problem:
          'Find the area of the triangle whose vertices are \\(A(2, 3)\\), \\(B(-1, 0)\\), and \\(C(2, -4)\\).',
        steps: [
          'Step 1: Use the formula: Area \\(= \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|\\)',
          'Step 2: Substitute: \\(= \\frac{1}{2}|2(0 - (-4)) + (-1)((-4) - 3) + 2(3 - 0)|\\)',
          'Step 3: \\(= \\frac{1}{2}|2(4) + (-1)(-7) + 2(3)|\\)',
          'Step 4: \\(= \\frac{1}{2}|8 + 7 + 6| = \\frac{1}{2} \\times 21 = \\frac{21}{2}\\) sq. units',
        ],
        answer: 'Area \\(= \\frac{21}{2} = 10.5\\) sq. units',
      },
      {
        title: 'Checking Collinearity',
        problem:
          'Check whether the points \\(A(1, 5)\\), \\(B(2, 3)\\), and \\(C(-2, -1)\\) are collinear.',
        steps: [
          'Step 1: Compute: \\(x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\\)',
          'Step 2: \\(= 1(3 - (-1)) + 2((-1) - 5) + (-2)(5 - 3)\\)',
          'Step 3: \\(= 1(4) + 2(-6) + (-2)(2) = 4 - 12 - 4 = -12\\)',
          'Step 4: Since the result \\(\\ne 0\\), the points are **not collinear**.',
        ],
        answer: 'The points are not collinear (they form a triangle with area \\(= 6\\) sq. units).',
        alternateMethod:
          'Alternatively, compute distances \\(AB\\), \\(BC\\), \\(AC\\) and check if \\(AB + BC = AC\\). If yes, collinear; otherwise, not.',
      },
    ],
    commonMistakes: [
      'Mixing up \\((x_1, y_1)\\) and \\((x_2, y_2)\\) in the section formula — remember the ratio relates to the order of the points.',
      'Forgetting the absolute value sign in the area formula, leading to a negative area.',
      'Not squaring the differences inside the distance formula before adding.',
      'Confusing the section formula (weighted average) with the mid-point formula.',
    ],
    keyConceptCount: 4,
    exampleCount: 4,
    difficulty: 'Medium',
  },

  // ========================================================================
  // 10. SURFACE AREAS & VOLUMES
  // ========================================================================
  {
    id: 'surface-areas-volumes',
    name: 'Surface Areas & Volumes',
    icon: '📦',
    color: '#5483B3',
    description: 'Calculate the surface areas and volumes of combinations of solids like cylinders, cones, spheres, and hemispheres.',
    chapters: 'Chapter 13',
    theory: [
      {
        title: 'Formula Library for Solids',
        content: `Standard formulas for solid figures:
- **Cylinder:** CSA = \\(2\\pi rh\\), TSA = \\(2\\pi r(r + h)\\), Vol = \\(\\pi r^2h\\)
- **Cone:** CSA = \\(\\pi rl\\), TSA = \\(\\pi r(r + l)\\), Vol = \\(\\frac{1}{3}\\pi r^2h\\) (where slant height \\(l = \\sqrt{r^2 + h^2}\\))
- **Sphere:** Surface Area = \\(4\\pi r^2\\), Vol = \\(\\frac{4}{3}\\pi r^3\\)
- **Hemisphere:** CSA = \\(2\\pi r^2\\), TSA = \\(3\\pi r^2\\), Vol = \\(\\frac{2}{3}\\pi r^3\\)`
      },
      {
        title: 'Combination of Solids',
        content: `When finding the surface area of a combined solid, we only add the **exposed** surface areas.
For example, if a cone is placed on a hemisphere:
\\[\\text{Total Surface Area} = \\text{CSA of cone} + \\text{CSA of hemisphere}\\]
When finding the volume of a combined solid, we add the individual volumes:
\\[\\text{Total Volume} = \\text{Vol of cone} + \\text{Vol of hemisphere}\\]`
      },
      {
        title: 'Conversion of Solids',
        content: `When a solid of one shape is melted and converted into another shape, its **volume remains constant**.
For example, if a sphere of radius \\(R\\) is melted and drawn into a wire (cylinder) of radius \\(r\\) and length \\(h\\):
\\[\\text{Volume of Sphere} = \\text{Volume of Cylinder}\\]
\\[\\frac{4}{3}\\pi R^3 = \\pi r^2h\\]`
      }
    ],
    examples: [
      {
        title: 'TSA of Combined Solid',
        problem: 'A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of same radius. The total height of the toy is 15.5 cm. Find the total surface area of the toy.',
        steps: [
          'Step 1: Radius of cone and hemisphere \\(r = 3.5\\) cm.',
          'Step 2: Height of cone \\(h = \\text{Total height} - \\text{Radius} = 15.5 - 3.5 = 12\\) cm.',
          'Step 3: Slant height of cone \\(l = \\sqrt{r^2 + h^2} = \\sqrt{3.5^2 + 12^2} = \\sqrt{12.25 + 144} = \\sqrt{156.25} = 12.5\\) cm.',
          'Step 4: TSA of toy = CSA of cone + CSA of hemisphere = \\(\\pi rl + 2\\pi r^2 = \\pi r(l + 2r)\\).',
          'Step 5: Substitute values: \\(\\frac{22}{7} \\times 3.5 \\times (12.5 + 2(3.5)) = 11 \\times (12.5 + 7) = 11 \\times 19.5 = 214.5\\) cm².'
        ],
        answer: 'Total Surface Area = 214.5 cm²'
      },
      {
        title: 'Conversion Volume Constant',
        problem: 'A copper sphere of radius 3 cm is melted and drawn into a wire of cylindrical cross-section of radius 0.2 cm. Find the length of the wire.',
        steps: [
          'Step 1: Volume of sphere = \\(\\frac{4}{3}\\pi r_1^3 = \\frac{4}{3} \\times \\pi \\times 3^3 = 36\\pi\\) cm³.',
          'Step 2: Volume of cylinder wire = \\(\\pi r_2^2 h = \\pi \\times (0.2)^2 \\times h = 0.04\\pi h\\).',
          'Step 3: Since volume is constant, \\(0.04\\pi h = 36\\pi\\).',
          'Step 4: Solve for length \\(h = \\frac{36}{0.04} = 900\\) cm = 9 m.'
        ],
        answer: 'Length of wire = 9 m'
      }
    ],
    commonMistakes: [
      'Adding total surface areas of individual shapes when computing the TSA of a combined solid.',
      'Using the vertical height instead of slant height in the cone surface area formula.',
      'Mixing units (e.g. radius in cm and length in m) without converting first.'
    ],
    keyConceptCount: 3,
    exampleCount: 2,
    difficulty: 'Hard'
  },

  // ========================================================================
  // 11. STATISTICS
  // ========================================================================
  {
    id: 'statistics',
    name: 'Statistics',
    icon: '📊',
    color: '#396494',
    description: 'Calculate the mean, median, and mode for grouped data using algebraic and graphical methods.',
    chapters: 'Chapter 14',
    theory: [
      {
        title: 'Mean of Grouped Data',
        content: `The **mean** (\\(\\bar{x}\\)) can be computed by three methods:
1. **Direct Method:** \\(\\bar{x} = \\frac{\\sum f_ix_i}{\\sum f_i}\\) (where \\(x_i\\) is the class mark).
2. **Assumed Mean Method:** \\(\\bar{x} = a + \\frac{\\sum f_id_i}{\\sum f_i}\\) (where deviation \\(d_i = x_i - a\\)).
3. **Step-Deviation Method:** \\(\\bar{x} = a + h\\left(\\frac{\\sum f_iu_i}{\\sum f_i}\\right)\\) (where \\(u_i = \\frac{x_i - a}{h}\\)).`
      },
      {
        title: 'Mode of Grouped Data',
        content: `The **mode** is the value among observations which occurs most frequently. For grouped data:
\\[\\text{Mode} = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h\\]
where:
- \\(l\\) = lower limit of modal class
- \\(f_1\\) = frequency of modal class
- \\(f_0\\) = frequency of class preceding modal class
- \\(f_2\\) = frequency of class succeeding modal class
- \\(h\\) = size of class interval`
      },
      {
        title: 'Median of Grouped Data',
        content: `The **median** measures the central value. For grouped data:
\\[\\text{Median} = l + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h\\]
where \\(cf\\) is the cumulative frequency of the class preceding the median class, and \\(f\\) is the frequency of the median class.`
      },
      {
        title: 'Empirical Relationship',
        content: `The three measures of central tendency are connected by:
\\[3\\text{ Median} = \\text{Mode} + 2\\text{ Mean}\\]`
      }
    ],
    examples: [
      {
        title: 'Calculating Mean',
        problem: 'Find the mean of the following distribution: Class: 0-10, 10-20, 20-30; Frequencies: 3, 5, 2.',
        steps: [
          'Step 1: Find class marks (\\(x_i\\)): 5, 15, 25.',
          'Step 2: Compute \\(f_ix_i\\): \\(3\\times5=15\\), \\(5\\times15=75\\), \\(2\\times25=50\\). Sum \\(\\sum f_ix_i = 140\\).',
          'Step 3: Total frequency \\(\\sum f_i = 10\\).',
          'Step 4: Mean \\(\\bar{x} = \\frac{140}{10} = 14\\).'
        ],
        answer: 'Mean = 14'
      },
      {
        title: 'Median of Grouped Data',
        problem: 'Find the median for Class: 0-10, 10-20, 20-30; Frequencies: 4, 6, 5.',
        steps: [
          'Step 1: Calculate cumulative frequencies: 4, 10, 15. Total \\(N = 15\\), \\(N/2 = 7.5\\).',
          'Step 2: Median class is 10-20 since its cf (10) first exceeds 7.5.',
          'Step 3: Here \\(l=10\\), \\(cf=4\\) (cf of class before), \\(f=6\\), \\(h=10\\).',
          'Step 4: Median = \\(10 + \\left(\\frac{7.5 - 4}{6}\\right) \\times 10 = 10 + \\frac{3.5}{6} \\times 10 = 10 + 5.83 = 15.83\\).'
        ],
        answer: 'Median = 15.83'
      }
    ],
    commonMistakes: [
      'Using frequency instead of cumulative frequency in the median formula.',
      'Selecting the cumulative frequency of the median class instead of the preceding class.',
      'Computational errors in determining class marks.'
    ],
    keyConceptCount: 4,
    exampleCount: 2,
    difficulty: 'Medium'
  },

  // ========================================================================
  // 12. PROBABILITY
  // ========================================================================
  {
    id: 'probability',
    name: 'Probability',
    icon: '🎲',
    color: '#22477a',
    description: 'Understand theoretical probability, sample spaces, complementary events, and solve problems with coins, dice, and playing cards.',
    chapters: 'Chapter 15',
    theory: [
      {
        title: 'Theoretical Probability',
        content: `The theoretical probability of an event \\(E\\), written as \\(P(E)\\), is defined as:
\\[P(E) = \\frac{\\text{Number of outcomes favourable to } E}{\\text{Number of all possible outcomes of the experiment}}\\]
where we assume that outcomes are equally likely.`
      },
      {
        title: 'Range of Probability',
        content: `For any event \\(E\\):
\\[0 \\le P(E) \\le 1\\]
- If \\(P(E) = 0\\), it is an **impossible event** (e.g., rolling a 7 on a standard die).
- If \\(P(E) = 1\\), it is a **sure event** (e.g., rolling a number less than 7 on a die).`
      },
      {
        title: 'Complementary Events',
        content: `The event \\(\\bar{E}\\), representing "not E", is the complement of event \\(E\\).
\\[P(E) + P(\\bar{E}) = 1 \\implies P(\\bar{E}) = 1 - P(E)\\]`
      }
    ],
    examples: [
      {
        title: 'Two Coins Toss',
        problem: 'Two unbiased coins are tossed simultaneously. Find the probability of getting at least one head.',
        steps: [
          'Step 1: Write down sample space: \\(S = \\{\\text{HH, HT, TH, TT}\\}\\). Total outcomes = 4.',
          'Step 2: Favourable outcomes (at least one Head): \\(\\{\\text{HH, HT, TH}\\}\\). Favourable count = 3.',
          'Step 3: Probability \\(P(\\text{at least 1 Head}) = \\frac{3}{4} = 0.75\\).'
        ],
        answer: 'Probability = 3/4'
      },
      {
        title: 'Card Drawing',
        problem: 'A card is drawn at random from a pack of 52 playing cards. Find the probability of getting a red face card.',
        steps: [
          'Step 1: Total cards = 52.',
          'Step 2: There are 2 red suits (hearts, diamonds), each having 3 face cards (King, Queen, Jack).',
          'Step 3: Favourable outcomes (red face cards) = \\(2 \\times 3 = 6\\).',
          'Step 4: Probability = \\frac{6}{52} = \\frac{3}{26}.'
        ],
        answer: 'Probability = 3/26'
      }
    ],
    commonMistakes: [
      'Assuming two coins tossed have only 3 outcomes (2 heads, 2 tails, 1 head 1 tail) with equal likelihood. (HT and TH are distinct!).',
      'Forgetting that Aces are NOT face cards. Only Kings, Queens, and Jacks are face cards.',
      'Misinterpreting "at least" (means greater than or equal to) and "at most" (means less than or equal to).'
    ],
    keyConceptCount: 3,
    exampleCount: 2,
    difficulty: 'Easy'
  }
];
